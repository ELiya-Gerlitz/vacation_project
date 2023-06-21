import express, { NextFunction, Request, Response } from "express"
import filterLogic from "../5-Logic/filterLogic"

const router = express.Router()


router.get("/vacation_by_isFollowing/:userId([0-9]+)", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            let userId= +request.params?.userId
            const vacations = await filterLogic.filterByisFollowed(userId)
            response.json(vacations)
    }catch(err:any){
        next(err)
    }
})

router.get("/vacation_by_unstarted/:userId([0-9]+)", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            let userId= +request.params?.userId
            const vacations = await filterLogic.filterByUnstarted(userId)
            response.json(vacations)
    }catch(err:any){
        next(err)
    }
})

router.get("/vacation_by_activeVacations/:userId([0-9]+)", async (request: Request, response: Response,next: NextFunction)=>{
    try{
            let userId= +request.params?.userId
            const vacations = await filterLogic.activeVacations(userId)
            response.json(vacations)
    }catch(err:any){
        next(err)
    }
})


export default router