import dal from "../2-Utils/dal";
import VacationModel from "../4-Models/VacationModel";
// Wirkt gut
async function filterByisFollowed( userId :number):Promise<VacationModel[]>{
    const sql = `
    SELECT DISTINCT
    V.*,
    c.continentName,
    EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
    COUNT(F.userId) AS followersCount
    FROM vacations as V 
    LEFT JOIN followers as F ON V.vacationId = F.vacationId
    LEFT JOIN continents AS c ON v.continentId = c.continentId 
    WHERE F.userId = ? AND F.vacationId > 0
    GROUP BY vacationId
    ORDER BY vacationId ASC
    `;

    const vacations = await dal.execute(sql, [userId, userId]);
    return vacations;
}
// Wirkt gut
async function filterByUnstarted( userId :number):Promise<VacationModel[]>{
    const sql = `
    SELECT DISTINCT
	V.*,
    c.continentName,
	EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
	COUNT(F.userId) AS followersCount
    FROM vacations as V 
    LEFT JOIN followers as F ON V.vacationId = F.vacationId
    LEFT JOIN continents AS c ON v.continentId = c.continentId 
    WHERE V.startingDate > CURDATE()
    GROUP BY vacationId
    ORDER BY vacationId ASC
    `;

    const vacations = await dal.execute(sql, [userId]);
    return vacations;

}
// Wirkt gut
async function activeVacations( userId :number):Promise<VacationModel[]>{
    const sql = `
    SELECT DISTINCT
	V.*,
    c.continentName,
	EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
	COUNT(F.userId) AS followersCount
    FROM vacations as V LEFT JOIN followers as F ON V.vacationId = F.vacationId
    LEFT JOIN continents AS c ON V.continentId = c.continentId 
    WHERE V.startingDate <= CURDATE() AND V.endingDate >= CURDATE()
    GROUP BY vacationId
    ORDER BY vacationId ASC
    `;

    const vacations = await dal.execute(sql, [userId]);
    return vacations;
}

// Wirkt gut
async function getVacationsByContinentId(continent_Id : number, userId : number):Promise<VacationModel[]>{

const sql = 
    `SELECT DISTINCT
    V.*, 
    c.continentName,
    EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
    COUNT(F.userId) AS followersCount
    FROM vacations as V LEFT JOIN followers as F ON V.vacationId = F.vacationId
    LEFT JOIN continents AS c ON v.continentId = c.continentId 
    WHERE c.continentId = ${continent_Id}
    GROUP BY vacationId
    ORDER BY vacationId ASC`

    const vacations = await dal.execute(sql, [userId])
    return vacations
}


export default {
    filterByisFollowed,
    filterByUnstarted,
    activeVacations,
    getVacationsByContinentId

}