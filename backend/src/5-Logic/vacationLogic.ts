import dal from "../2-Utils/dal";
import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-Models/ErrorModel";
import {OkPacket} from "mysql"
import cyber from "../2-Utils/cyber";
import fs from "fs"
import fsPromises from "fs/promises"
import path from "path";
import {v4 as uuid} from "uuid"
import VacationModel from "../4-Models/VacationModel";
// import handleFiles from "../2-Utils/handleFiles";


async function getAllVacations():Promise<VacationModel[]>{
    const sql=`
        SELECT v.vacationId, v.destination, v.description, DATE_FORMAT(v.startingDate, '%d.%m.%Y') AS startingDate, 
        DATE_FORMAT(v.endingDate, '%d.%m.%Y') AS endingDate , v.price, v.imageName, c.continentName
        FROM vacations AS v JOIN continents AS c
        ON v.continentId = c.continentId
    `
    const vacations = await dal.execute(sql)
    return vacations
}

async function getOneVacation(vacationId :number):Promise<VacationModel>{
    const sql= `
        SELECT v.*, c.continentName
        FROM vacations AS v JOIN continents AS c
        ON v.continentId = c.continentId
        WHERE v.vacationId = ?
    `
    const info : OkPacket = await dal.execute(sql, [vacationId])
    if(!info[0]) throw new ResourceNotFoundErrorModel(vacationId)
    return info[0]  // überflüßig? Nein! Im gegenteil!🤠
}

async function postNewVacation(vacation :VacationModel):Promise<VacationModel>{
    const err= vacation.validate()
    if(err) throw new ValidationErrorModel(err)

    if(vacation.image){
        try{
            // handleFiles(book) no need to delete anything.(!🙄) it is a completely new book added presently.
            const extension = path.extname(vacation.image.name)
            vacation.imageName = uuid() + extension
            console.log("I am in the if statement in before the post query Logic" + vacation.imageName)
            const pathToKeep="./src/1-Assets/images/" + vacation.imageName
            await vacation.image.mv(pathToKeep)
            delete vacation.image

        }catch(err:any){
            console.log(err)
        }
    }
    const sql=
    `
    INSERT INTO vacations
    VALUES(DEFAULT, ?, ?, ?, ?, ?,?, ?)
    `
    const values = [vacation.destination, vacation.description, vacation.startingDate, vacation.endingDate, vacation.price, vacation.imageName, vacation.continentId ]
    const response: OkPacket = await dal.execute(sql, values )
    vacation.vacationId = response.insertId
    console.log(" I am the added book.bookId"+ vacation.vacationId) //Das wirkt gut ohne zum die arr[0] zurückkehren. Wieso? 🤲🤔
    return vacation
}

// // Das war nicht gut. Was hat gefehlt? Des fetches des vorherigen Buch. (! Es nervt mich dass ich das Fehler nich verstehe!)

async function putVacation(vacation: VacationModel):Promise<VacationModel>{
    const err= vacation.validate()
    if(err) throw new ValidationErrorModel(err)

    // const vacationToUpdate = await getOneBook(book.bookId)         
    const bookToUpdate = await getOneVacation(vacation.vacationId)         
        if(vacation.image){
           const imagePath = "./src/1-Assets/images/" + bookToUpdate.imageName


        //   await fsPromises.unlink(imagePath) //das wirkt auch gut!
           fs.unlinkSync(imagePath)

           const extension = path.extname(vacation.image.name)        
           vacation.imageName = uuid() + extension
           await vacation.image.mv("./src/1-Assets/images/" + vacation.imageName)
           delete vacation.image

    }else if(!vacation.image){
        vacation.imageName = bookToUpdate.imageName
    }

    const sql=`
    UPDATE vacations
    SET 
        destination = ?,
        description = ?,
        startingDate = ?,
        endingDate = ?,
        price = ?,
        imageName = ?,
        continentId = ?
    WHERE vacationId = ?
    `
    const values = [vacation.destination, vacation.description, vacation.startingDate, vacation.endingDate, vacation.price, vacation.imageName, vacation.continentId, vacation.vacationId]
    const updatedInfo: OkPacket= await dal.execute(sql, values)
    if(updatedInfo.affectedRows===0) throw new ResourceNotFoundErrorModel(vacation.vacationId)
    return updatedInfo[0]
}

async function deleteVacation( vacationId: number ):Promise<void>{

// we're fetching the vacation that should be deleted in order to delete its image-file.

    const sqlForDeletingImage=`
    SELECT * FROM vacations
    WHERE vacationId = ?
    `
    const vacationsArr :OkPacket = await dal.execute(sqlForDeletingImage, [vacationId])
    const vacationToDelete = vacationsArr[0]
    if(!vacationToDelete) throw new ResourceNotFoundErrorModel(vacationId)
    
       // Delete image:
    try{
        const path = "./src/1-Assets/images/" + vacationToDelete.imageName
        fs.unlinkSync(path);
    }catch(err:any){
        console.log(err)
    }

    const sql=`
    DELETE FROM vacations
    WHERE vacationId= ?
    `
    const info :OkPacket = await dal.execute(sql, [vacationId])
    if(info.affectedRows===0) throw new ResourceNotFoundErrorModel(vacationId)
}

// //Brauche ich das überhaupt? Ja! Für den <select> Tag in den UpdateBook.
// async function getAllGenres():Promise<GenreModel[]>{
//     const sql=`
//     SELECT * FROM genre
//     `
//     const genres :OkPacket= await dal.execute(sql)
//     return genres
// }

// async function getOneGenre(id: number):Promise<GenreModel>{
//     const sql=`
//     SELECT * FROM genre
//     WHERE genreId = ?
//     `
//     const genreNames : OkPacket = await dal.execute(sql, [id])
//     const genreName = genreNames[0]
//     if(!genreName) throw new ResourceNotFoundErrorModel(id)
//     return genreName
// }

async function getVacationsByContinentName(continent_Id : string):Promise<VacationModel[]>{
    const sql = `
    SELECT * FROM vacations
    WHERE continentId = ${continent_Id}
    `
    const vacations = await dal.execute(sql)
    return vacations
}


async function follow(userId: number, vacationId :number):Promise<VacationModel>{

// check whether following record exists already

    const checkIfAlreadyFollowingSql = `
    SELECT * FROM followers
    WHERE userId = ? AND vacationId = ?
    `
    const values = [userId, vacationId]
    const exists = await dal.execute( checkIfAlreadyFollowingSql, values )

    console.log("exists " + exists[0])
    try{
        if(!exists[0]){

            const sql=
            `
            INSERT INTO followers
            VALUES(?, ?)
            `
            const followers = await dal.execute( sql, values )
            return followers[0]
        }
        else{
    console.log("follow already exists")
        }
    }catch(err){
        console.log(err)
    }
}

async function unfollow( userId: number, vacationId :number ):Promise<void>{

        const sql=`
        DELETE FROM followers
        WHERE userId= ? AND vacationId = ?
        `
        const info :OkPacket = await dal.execute(sql, [userId, vacationId])
        if(info.affectedRows===0) throw new ResourceNotFoundErrorModel(vacationId)
    }
    

export default {
    getAllVacations,
    getOneVacation,
    postNewVacation,
    putVacation,
    getVacationsByContinentName,
    deleteVacation,
    follow,
    unfollow
}