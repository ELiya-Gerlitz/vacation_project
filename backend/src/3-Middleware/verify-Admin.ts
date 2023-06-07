import cyber from "../2-Utils/cyber"
import { NextFunction, Request, Response } from "express";
import { AuthorizationErrorModel } from "../4-Models/ErrorModel"

async function verifyAdmin(request: Request, response: Response, next: NextFunction){
    try{
        const isAdmin = await cyber.isAdmin(request)
        if(!isAdmin) throw new AuthorizationErrorModel("You must be Admin!")
        next()
    }catch(err:any){
        next(err)
    }
}

export default verifyAdmin