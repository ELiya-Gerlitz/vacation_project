import express, { NextFunction, Request, Response } from "express"

import path from "path"
import vacationLogic from "../5-Logic/vacationLogic"
import verifyLoggedIn from "../3-Middleware/verify-loggedin"
import VacationModel from "../4-Models/VacationModel"
import verifyAdmin from "../3-Middleware/verify-Admin"

const router = express.Router()

// get All vacations
router.get("/vacations/:userId", verifyLoggedIn, async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const userId = +request.params.userId
        const vacations = await vacationLogic.getAllVacationsWithFollowDetails(userId)
        response.json(vacations)
    }catch(err:any){
        next(err)
    }
})

// // get single vacation according to the vacationId
router.get("/vacations/singleVacation/:vacationId([0-9]+)", verifyLoggedIn, async(request: Request, response: Response,next: NextFunction)=>{
    try{
        const vacationId= +request.params.vacationId
        const singleVacation = await vacationLogic.getOneVacation(vacationId)
        response.json(singleVacation)
    }catch(err:any){
        next(err)
    }
})

// post ONE vacation

router.post("/vacations", verifyAdmin, async (request: Request, response: Response, next:NextFunction)=>{
    try{
        request.body.image = request.files?.image
        const newVacation = new VacationModel(request.body)
        const addedVacation = await vacationLogic.postNewVacation(newVacation)
        console.log(addedVacation)
        response.status(201).json(addedVacation)
    }catch(err:any){
        next(err)
    }
})

// alter ONE vacation

router.put("/vacations/:vacationId([0-9]+)", verifyAdmin, async(request: Request, response: Response,next: NextFunction)=>{
    try{
        request.body.image = request.files?.image
        request.body.vacationId = +request.params.vacationId
        const vacationToUpdate = new VacationModel(request.body)
        const updatedVacation = await vacationLogic.putVacation(vacationToUpdate)
        console.log(updatedVacation + "I am updated in controller")
        response.status(201).json(updatedVacation)
    }catch(err:any){
        next(err)
    }
})
router.delete("/vacations/:vacationId([0-9]+)", verifyAdmin, async (request: Request, response: Response,next: NextFunction)=>{
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
        let imagename= request.params?.imageName
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
router.post("/follow/:userId([0-9]+)/:vacationId([0-9]+)", verifyLoggedIn, async (request: Request, response: Response, next:NextFunction)=>{
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
router.delete("/unfollow/:userId([0-9]+)/:vacationId([0-9]+)",verifyLoggedIn,  async (request: Request, response: Response,next: NextFunction)=>{
    try{
        const userId = +request.params.userId
        const vacationId = +request.params.vacationId
        await vacationLogic.unfollow(userId, vacationId)
        response.sendStatus(204)
    }catch(err:any){
        next(err)
    }
})

router.get("/continents", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const continent = await vacationLogic.getAllContinents()
        response.json(continent)
    }catch(err:any){
        next(err)
    }
})



export default router