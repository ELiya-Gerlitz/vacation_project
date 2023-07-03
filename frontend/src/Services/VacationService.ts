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

async function follow(vacationId: number): Promise<void> {
    await axios.post<any>(appConfig.followURL + vacationId)
    VacationStore.dispatch({type: VacationActionTypes.Follow, payload: {vacationId}})
}

async function unfollow(vacationId: number): Promise<void> {
    await axios.delete<void>(appConfig.unfollowURL+ vacationId)
    VacationStore.dispatch({type: VacationActionTypes.Unfollow, payload: {vacationId}})
}

async function getAllContinents():Promise<ContinentModel[]>{
    let continents = VacationStore.getState().continents;
        if (continents.length === 0) {
        const response = await axios.get<ContinentModel[]>(appConfig.continentsURL)
        continents = response.data
        VacationStore.dispatch({ type: VacationActionTypes.FetchAllContinents, payload: continents});
        }
    return continents
}

export default {
    getAllVacations,
    follow,
    unfollow,
    getAllContinents
}