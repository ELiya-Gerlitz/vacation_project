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
        SELECT vacationId, destination, description, DATE_FORMAT(startingDate, '%d.%m.%Y'), 
        DATE_FORMAT(endingDate, '%d.%m.%Y') , price, imageName
        FROM vacations 
    `
    const vacations = await dal.execute(sql)
    return vacations
}

async function getOneVacation(vacationId :number):Promise<VacationModel>{
    const sql= `
        SELECT *
        FROM vacations
        WHERE vacations.vacationId = ?
    `
    const info : OkPacket = await dal.execute(sql, vacationId)
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
            vacation.imageName= uuid() +extension
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
    VALUES(DEFAULT, ?, ?, ?, ?, ?,?)
    `
    const values = [vacation.destination, vacation.description, vacation.startingDate, vacation.endingDate, vacation.price, vacation.imageName ]
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

           const extension= path.extname(vacation.image.name)        
           vacation.imageName = uuid()+ extension
           await vacation.image.mv("./src/1-Assets/images/" + vacation.imageName)
           delete vacation.image

    }else if(!vacation.image){
        vacation.imageName= bookToUpdate.imageName
    }

    const sql=`
    UPDATE vacations
    SET 
        destination = ?,
        description = ?,
        startingDate = ?,
        endingDate = ?,
        price = ?,
        imageName = ?
    WHERE vacationId = ?
    `
    const values = [vacation.destination, vacation.description, vacation.startingDate, vacation.endingDate, vacation.price, vacation.imageName, vacation.vacationId]
    const updatedInfo: OkPacket= await dal.execute(sql, values)
    if(updatedInfo.affectedRows===0) throw new ResourceNotFoundErrorModel(vacation.vacationId)
    return updatedInfo[0]
}

// async function deleteBook(id: number):Promise<void>{

//     const sqlForDeletingImage=`
//     SELECT * FROM books
//     WHERE bookId= ?
//     `
//     const bookarr :OkPacket = await dal.execute(sqlForDeletingImage, [id])
//     const book = bookarr[0]
//     if(!book) throw new ResourceNotFoundErrorModel(id)

//        // Delete it:
//     try{
//         const path= "./src/1-Assets/images/" + book.imageName
//         fs.unlinkSync(path);
//     }catch(err:any){
//         console.log(err)
//     }

//     const sql=`
//     DELETE FROM books
//     WHERE bookId= ?
//     `
//     const info :OkPacket= await dal.execute(sql, [id])
//     if(info.affectedRows===0) throw new ResourceNotFoundErrorModel(id)
// }

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

export default {
    getAllVacations,
    getOneVacation,
    postNewVacation,
    putVacation
    // putVacation
    // deleteBook,
    // getAllGenres,
    // // getOneGenre,
}