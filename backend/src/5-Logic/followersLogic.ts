import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-Models/ErrorModel";
import {OkPacket} from "mysql"
import cyber from "../2-Utils/cyber";
import fs from "fs"
import fsPromises from "fs/promises"
import path from "path";
import {v4 as uuid} from "uuid"
import VacationModel from "../4-Models/VacationModel";
import dal from "../2-Utils/dal";
import UserModel from "../4-Models/UserModel";

async function getAllUsers():Promise<UserModel[]>{
    const sql=`
        SELECT * FROM users
    `
    const vacations = await dal.execute(sql)
    return vacations
}

export default {
    getAllUsers
}