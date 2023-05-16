import axios from "axios";
import VacationModel from "../Models/VacationModel";
import appConfig from "../Utils/AppConfig";


async function getAllVacations():Promise<VacationModel[]>{
    const response = await axios.get<VacationModel[]>(appConfig.getAllVacations)
    const vacations = response.data
    return vacations
    
    }


async function getVacationsByContinentId(continentId : string):Promise<VacationModel[]>{
const response = await axios.get<VacationModel[]>(appConfig.getVacByContinentId + continentId)
const vacations = response.data
return vacations

}

export default {
    getAllVacations,
    getVacationsByContinentId
}