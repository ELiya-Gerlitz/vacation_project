import axios from "axios";
import VacationModel from "../Models/VacationModel";
import appConfig from "../Utils/AppConfig";
import { VacationActionTypes, VacationStore } from "../Redux/VacationState";
import ContinentModel from "../Models/ContinentModel";


async function getAllVacations():Promise<VacationModel[]>{
    let vacations = VacationStore.getState().vacations;
    if (vacations.length === 0) {
    const response = await axios.get<VacationModel[]>(appConfig.VacationsURL)
    vacations = response.data
    VacationStore.dispatch({ type: VacationActionTypes.FetchAllVacations, payload: vacations });
}
    return vacations
}
    async function getVacationsByContinentId( continentId : string):Promise<VacationModel[]>{
        const response = await axios.get<VacationModel[]>(appConfig.getVacByContinentId + continentId)
        const vacations = response.data
        return vacations
    }

    
async function follow( userId :number, vacationId: number): Promise<void> {
    await axios.post<any>(appConfig.followURL + userId + "/" + vacationId)
    VacationStore.dispatch({type: VacationActionTypes.Follow, payload: {vacationId}})
}

async function unfollow(userId :number, vacationId: number): Promise<void> {
    await axios.delete<void>(appConfig.unfollowURL + userId + "/" + vacationId)
    VacationStore.dispatch({type: VacationActionTypes.Unfollow, payload: {vacationId}})
}


async function getAllContinents():Promise<ContinentModel[]>{
    // let vacations = VacationStore.getState().vacations;
    // if (vacations.length === 0) {
    const response = await axios.get<ContinentModel[]>(appConfig.continentsURL)
//     vacations = response.data
//     VacationStore.dispatch({ type: VacationActionTypes.FetchAllVacations, payload: vacations });
// }
const continents = response.data
    return continents
}

export default {
    getAllVacations,
    getVacationsByContinentId,
    follow,
    unfollow,
    getAllContinents
}