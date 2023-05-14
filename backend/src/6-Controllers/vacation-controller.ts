import express, { NextFunction, Request, Response } from "express"

import path from "path"
import vacationLogic from "../5-Logic/vacationLogic"
import verifyLoggedIn from "../3-Middleware/verify-loggedin"
import VacationModel from "../4-Models/VacationModel"

const router= express.Router()

router.get("/vacations", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const books= await vacationLogic.getAllVacations()
        response.json(books)
    }catch(err:any){
        next(err)
    }
})


// // get single vacation according to the vacationId
router.get("/vacations/:vacationId([0-9]+)", async(request: Request, response: Response,next: NextFunction)=>{
    try{
        const vacationId= +request.params.vacationId
        const singleVacation = await vacationLogic.getOneVacation(vacationId)
        response.json(singleVacation)
    }catch(err:any){
        next(err)
    }
})

router.post("/vacations", async (request: Request, response: Response, next:NextFunction)=>{
    try{
        request.body.image= request.files?.image
        const newVacation = new VacationModel(request.body)
        const addedVacation = await vacationLogic.postNewVacation(newVacation)
        response.status(201).json(addedVacation)
    }catch(err:any){
        next(err)
    }
})

router.put("/vacations/:vacationId([0-9]+)", async(request: Request, response: Response,next: NextFunction)=>{
    try{
        request.body.image= request.files?.image
        request.body.vacationId= +request.params.vacationId
        const vacationToUpdate = new VacationModel(request.body)
        const updatedVacation = await vacationLogic.putVacation(vacationToUpdate)
        response.status(201).json(updatedVacation)
    }catch(err:any){
        next(err)
    }
})
// router.delete("/books/:bookId", verifyLoggedIn, async (request: Request, response: Response,next: NextFunction)=>{
//     try{
//         const bookId= +request.params.bookId
//         await bookLogic.deleteBook(bookId)
//         response.sendStatus(204)
//     }catch(err:any){
//         next(err)
//     }
// })

router.get("/books/images/:imageName", async (request: Request, response: Response,next: NextFunction)=>{
    try{
        let imagename= request.params?.imageName
            const file= path.join(__dirname,"..", "1-Assets", "images" , imagename) 
            response.sendFile(file)
    }catch(err:any){
        next(err)
    }
})

// router.get("/genres/", async (request: Request, response: Response,next: NextFunction)=>{
//     try{
//         const genres = await bookLogic.getAllGenres()
//         response.json(genres)
//     }catch(err:any){
//         next(err)
//     }
// })

export default router