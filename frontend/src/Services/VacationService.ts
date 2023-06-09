import axios from "axios";
import VacationModel from "../Models/VacationModel";
import appConfig from "../Utils/AppConfig";
import { VacationActionTypes, VacationStore } from "../Components/Redux/VacationState";


async function getAllVacations( userId : number ):Promise<VacationModel[]>{
    let vacations = VacationStore.getState().vacations;
    if (vacations.length === 0) {
    const response = await axios.get<VacationModel[]>(appConfig.getAllVacations + userId)
    vacations = response.data
    VacationStore.dispatch({ type: VacationActionTypes.FetchAllVacations, payload: vacations });
}
    return vacations
}

    async function getSingleVacation( vacationId : number ):Promise<VacationModel[]>{
        const response = await axios.get<VacationModel[]>(appConfig.getSingleVacation + vacationId)
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
    getVacationsByContinentId,
    getSingleVacation
}