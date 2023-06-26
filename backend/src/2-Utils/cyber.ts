import { Request } from "express";
import jwt from "jsonwebtoken"
import UserModel from "../4-Models/UserModel";
import crypto from "crypto";
import RoleModel from "../4-Models/RoleModel";


const secretKey= "patzkareshet@!"

function createToken( user : UserModel ):Promise<string>{

    delete user.password

    const container = {user}
    const options = {expiresIn : "3h"}
    const token = jwt.sign(container, secretKey, options)
    return token

}


function isLoggedIn( request:Request ):Promise<boolean>{
    return new Promise<boolean>((resolve,reject)=>{
        try{
            const header = request.headers.authorization
            if(!header) {
                console.log("there is no header!")
                resolve(false)
                return
            }
            // const token= header.split("")[1] // same as :   const token= header.substring(7)
            const token = header.substring(7)
            if(!token){
                resolve(false)
                return
            }

            jwt.verify(token, secretKey, err=>{
                if(err){
                    resolve(false)
                    return
                }
                resolve(true)
            })
            
        }catch(err:any){
        reject(err)
        }
    })
   
}


async function isAdmin(request: Request): Promise<boolean> {
    const isLoggedin = await  isLoggedIn(request)

    if(!isLoggedin) return false;

    const header = request.header("authorization");
    const token = header.substring(7);

    // Extract container from token:
    const container: any = jwt.decode(token);

    // Extract user: 
    const user: UserModel = container.user;

    return user.role === RoleModel.Admin;
}


async function getUserIdFromToken( headers: string): Promise<number> {
  
    const token = headers.substring(7);

    // Extract container from token:
    const container: any = jwt.decode(token);

    // Extract user: 
    const user: UserModel = container.user;
    const userId = user.userId

    return userId
}

const salt = "MakeThingsGoRightinJohnBryce!";

function hash(plainText: string): string {

    if(!plainText) return null;

    // Hash with salt: 
    const hashedText = crypto.createHmac("sha512", salt).update(plainText).digest("hex");

    return hashedText;
}

export default {
    isLoggedIn,
    createToken,
    hash,
    isAdmin,
    getUserIdFromToken
}