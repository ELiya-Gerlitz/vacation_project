import cyber from "../2-Utils/cyber"
import dal from "../2-Utils/dal"
import CredentialsModel from "../4-Models/CredentialsModel"
import { AuthorizationErrorModel, ValidationErrorModel } from "../4-Models/ErrorModel"
import {OkPacket} from "mysql"
import UserModel from "../4-Models/UserModel"



async function register(user:UserModel):Promise<string>{
    console.log("I am the beginning of authLogic")
    const err= user.validate()
    if(!err) throw new ValidationErrorModel(err)

    // check whether userName is already taken.
    const sql=`
        SELECT * FROM users
        WHERE username= ?
    `

    const usernameTaken  = await dal.execute(sql, [user.username]) //das (OkPacket) wirk nicht mit SELECT!!!
    if(usernameTaken.length > 0) throw new ValidationErrorModel("username is already in use!") 


    // save the new user in the DB
    const sql2save=`
        INSERT INTO users(firstName, lastName, username, password)
        VALUES (?, ?, ?, ?) 
    `
    const info : OkPacket = await dal.execute(sql2save, [user.firstName, user.lastName, user.username, user.password])
    user.userId=info.insertId

    const token= await cyber.createToken(user)
    return token
}

async function login(credentials: CredentialsModel):Promise<string>{

    const err = credentials.validate()
    if(err) throw new ValidationErrorModel(err)

     // get all users and see whether the userName && password exist.
     const sql=`
     SELECT * FROM users
     WHERE username = ? AND password = ?;
     `
     const passwordUsernameExist = await dal.execute(sql, [credentials.username, credentials.password])
     console.log(passwordUsernameExist)
     if(passwordUsernameExist.length <= 0) throw new ValidationErrorModel("Please register!")

    const token= cyber.createToken(passwordUsernameExist)
    return token
}

export default {
    register,
    login
}