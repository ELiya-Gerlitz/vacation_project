import cyber from "../2-Utils/cyber"
import dal from "../2-Utils/dal"
import CredentialsModel from "../4-Models/CredentialsModel"
import { AuthorizationErrorModel, ValidationErrorModel } from "../4-Models/ErrorModel"
import {OkPacket} from "mysql"
import UserModel from "../4-Models/UserModel"
import RoleModel from "../4-Models/RoleModel"



async function register(user:UserModel):Promise<string>{
    console.log("I am the beginning of authLogic")
    const err = user.validate()
    if(!err) throw new ValidationErrorModel(err)

    if (await isUsernameTaken(user.username)) throw new ValidationErrorModel(`Username ${user.username} is already taken`);

    // Hash password:
    user.password = cyber.hash(user.password);
    user.role = RoleModel.User
    // save the new user in the DB
    const sql=`
        INSERT INTO users(firstName, lastName, username, email, password, role)
        VALUES (?, ?, ?, ?, ?, ?) 
    `
    const values = [user.firstName, user.lastName, user.username, user.email, user.password, user.role]
    const info : OkPacket = await dal.execute(sql, values )
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
     WHERE username = ? AND password = ?
     `
     const values = [credentials.username, credentials.password = cyber.hash(credentials.password)]
     const passwordUsernameExist:OkPacket = await dal.execute(sql, values)
 
     if(passwordUsernameExist.fieldCount <= 0) throw new ValidationErrorModel("Please register!")
    //  if(passwordUsernameExist.length <= 0) throw new ValidationErrorModel("Please register!")

    const token = cyber.createToken(passwordUsernameExist[0])
    return token
    
}

async function isUsernameTaken(username: string): Promise<boolean> {
    const sql = `SELECT COUNT(*) FROM users WHERE username = ?`;
    const count = await dal.execute(sql, [username])[0];
    return count > 0;
}

export default {
    register,
    login,
    isUsernameTaken
}