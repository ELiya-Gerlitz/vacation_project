import { NextFunction, Request, Response } from "express";

function catchAll(err:any, request:Request,response:Response, next:NextFunction){
    console.log(err)
    // logger(err)
    response.status(err.status || 500).send(err.message)

}

export default catchAll