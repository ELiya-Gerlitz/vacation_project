import express, { NextFunction, Request, Response } from "express"

import path from "path"
import vacationLogic from "../5-Logic/vacationLogic"
import verifyLoggedIn from "../3-Middleware/verify-loggedin"
import VacationModel from "../4-Models/VacationModel"

const router= express.Router()

// get All vacations
router.get("/vacations", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const vacations = await vacationLogic.getAllVacations()
        response.json(vacations)
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

// post ONE vacation

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

// alter ONE vacation

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
router.delete("/vacations/:vacationId", async (request: Request, response: Response,next: NextFunction)=>{
    try{
        const vacationId= +request.params.vacationId
        await vacationLogic.deleteVacation(vacationId)
        response.sendStatus(204)
    }catch(err:any){
        next(err)
    }
})


// get ONE image from fs

router.get("/vacations/images/:imageName", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            let imagename = request.params?.imageName
            const file = path.join(__dirname,"..", "1-Assets", "images" , imagename) 
            response.sendFile(file)
    }catch(err:any){
        next(err)
    }
})

// // get vacation arr [] according to the continent
router.get("/vacation_by_continent/:continent_Id", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            let continent_Id= request.params?.continent_Id
            const vacations = await vacationLogic.getVacationsByContinentName(continent_Id)
            response.json(vacations)
    }catch(err:any){
        next(err)
    }
})

// save followers
router.post("/follow/:userId([0-9]+)/:vacationId([0-9]+)", async (request: Request, response: Response, next:NextFunction)=>{
    try{
        const userId = +request.params.userId
        const vacationId = +request.params.vacationId
        const follow = await vacationLogic.follow(userId, vacationId)
        response.status(201).json(follow)
    }catch(err:any){
        next(err)
    }
})
// unfollow
router.delete("/unfollow/:userId/:vacationId", async (request: Request, response: Response,next: NextFunction)=>{
    try{
        const userId = +request.params.userId
        const vacationId = +request.params.vacationId
        await vacationLogic.unfollow(userId, vacationId)
        response.sendStatus(204)
    }catch(err:any){
        next(err)
    }
})


export default router