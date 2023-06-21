import express, { NextFunction, Request, Response } from "express"
import vacationLogic from "../5-Logic/vacationLogic"
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

export default router
