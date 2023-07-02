import cyber from "../2-Utils/cyber"
import dal from "../2-Utils/dal"
import CredentialsModel from "../4-Models/CredentialsModel"
import { ValidationErrorModel } from "../4-Models/ErrorModel"
import {OkPacket} from "mysql"
import UserModel from "../4-Models/UserModel"
import RoleModel from "../4-Models/RoleModel"

async function register(user:UserModel):Promise<string>{
    const err = user.validate()
    if(!err) throw new ValidationErrorModel(err)

    if (await isEmailTaken(user.email)) throw new ValidationErrorModel(`Email is already taken`);

    // Hash password:
    user.password = cyber.hash(user.password);
    user.role = RoleModel.User
    // save the new user in the DB
    const sql =`
        INSERT INTO users(firstName, lastName, email, password, role)
        VALUES (?, ?, ?, ?, ?) 
    `
    const values = [user.firstName, user.lastName, user.email, user.password, user.role]
    const info : OkPacket = await dal.execute(sql, values )
    user.userId = info.insertId

    const token = await cyber.createToken(user)
    return token
}

async function login( credentials: CredentialsModel ):Promise<string>{

    const err = credentials.validate()
    if(err) throw new ValidationErrorModel(err) 

     const hashedPassword = cyber.hash(credentials.password)
     const values = [credentials.email, hashedPassword]
     // get all users and see whether the userName && password exist.
     const sql =`
     SELECT * FROM users
     WHERE email = ? AND password = ?
     `
     const passwordUsernameExist = await dal.execute(sql, values)
    if(passwordUsernameExist.length <= 0) throw new ValidationErrorModel("Please register!")
    const token = cyber.createToken(passwordUsernameExist[0])
    return token
}

async function isEmailTaken(email: string): Promise<boolean> {
    const sql=`SELECT * FROM users
     WHERE email = ? 
     `
     const emailTaken = await dal.execute(sql, [email])
     return emailTaken.length > 0
}

export default {
    register,
    login,
    isEmailTaken
}
