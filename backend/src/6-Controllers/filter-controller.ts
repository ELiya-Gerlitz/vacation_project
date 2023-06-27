import express, { NextFunction, Request, Response } from "express"
import filterLogic from "../5-Logic/filterLogic"
import cyber from "../2-Utils/cyber"

const router = express.Router()


router.get("/vacation_by_isFollowing", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            const userId = await cyber.getUserIdFromToken(request.headers.authorization)
            const vacations = await filterLogic.filterByisFollowed(userId)
            response.json(vacations)
    }catch(err:any){
        next(err)
    }
})

router.get("/vacation_by_unstarted", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            const userId = await cyber.getUserIdFromToken(request.headers.authorization)
            const vacations = await filterLogic.filterByUnstarted(userId)
            response.json(vacations)
    }catch(err:any){
        next(err)
    }
})

router.get("/vacation_by_activeVacations", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            const userId = await cyber.getUserIdFromToken(request.headers.authorization)
            const vacations = await filterLogic.activeVacations(userId)
            response.json(vacations)
    }catch(err:any){
        next(err)
    }
})


export default router