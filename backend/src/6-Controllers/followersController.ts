import express, { NextFunction, Request, Response } from "express"

import path from "path"
import vacationLogic from "../5-Logic/vacationLogic"
import followersLogic from "../5-Logic/followersLogic"


const router = express.Router()

// get All vacations
router.get("/users", async( request: Request, response: Response,next: NextFunction)=>{
    try{
        const users = await followersLogic.getAllUsers()
        response.json(users)
    }catch(err:any){
        next(err)
    }
})

export default router