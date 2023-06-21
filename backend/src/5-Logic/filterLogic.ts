import dal from "../2-Utils/dal";
import VacationModel from "../4-Models/VacationModel";

async function filterByisFollowed( userId :number):Promise<VacationModel[]>{
    const sql = `
    SELECT DISTINCT
	v.vacationId, v.destination, v.description, DATE_FORMAT(v.startingDate, '%d.%m.%Y') as startingDate,  DATE_FORMAT(v.endingDate, '%d.%m.%Y') as endingDate, v.price, v.imageName, v.continentId, 
    EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
    COUNT(F.userId) AS followersCount
    FROM vacations as V LEFT JOIN followers as F
    ON V.vacationId = F.vacationId
    WHERE F.userId = ? AND F.vacationId > 0
    GROUP BY vacationId
    ORDER BY vacationId ASC
    `;

    const vacations = await dal.execute(sql, [userId, userId]);
    return vacations;
}

async function filterByUnstarted( userId :number):Promise<VacationModel[]>{
    const sql = `
    SELECT DISTINCT
	v.vacationId, v.destination, v.description, DATE_FORMAT(v.startingDate, '%d.%m.%Y') as startingDate,  DATE_FORMAT(v.endingDate, '%d.%m.%Y') as endingDate, v.price, v.imageName, v.continentId, 
	EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
	COUNT(F.userId) AS followersCount
    FROM vacations as V LEFT JOIN followers as F
    ON V.vacationId = F.vacationId
    WHERE V.startingDate > CURDATE()
    GROUP BY vacationId
    ORDER BY vacationId ASC
    `;

    const vacations = await dal.execute(sql, [userId]);
    return vacations;

}

async function activeVacations( userId :number):Promise<VacationModel[]>{

    const sql = `
    SELECT DISTINCT
	v.vacationId, v.destination, v.description, DATE_FORMAT(v.startingDate, '%d.%m.%Y') as startingDate,  DATE_FORMAT(v.endingDate, '%d.%m.%Y') as endingDate, v.price, v.imageName, v.continentId, 
	EXISTS(SELECT * FROM followers WHERE vacationId = F.vacationId AND userId = ?) AS isFollowing,
	COUNT(F.userId) AS followersCount
    FROM vacations as V LEFT JOIN followers as F
    ON V.vacationId = F.vacationId
    WHERE V.startingDate <= CURDATE() AND V.endingDate >= CURDATE()
    GROUP BY vacationId
    ORDER BY vacationId ASC
    `;

    const vacations = await dal.execute(sql, [userId]);
    return vacations;
}

export default {
    filterByisFollowed,
    filterByUnstarted,
    activeVacations
}