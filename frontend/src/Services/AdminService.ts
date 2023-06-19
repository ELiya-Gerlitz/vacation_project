import axios from "axios";
import VacationModel from "../Models/VacationModel";
import { AuthStore } from "../Redux/AuthState";
import appConfig from "../Utils/AppConfig";
import { VacationActionTypes, VacationStore } from "../Redux/VacationState";


async function addVacation(vacation : VacationModel): Promise<void> {
console.log(VacationStore.getState().vacations)

    const myForm = new FormData()
    myForm.append("destination", vacation.destination)
    myForm.append("description", vacation.description)
    myForm.append("startingDate", vacation.startingDate)
    myForm.append("endingDate", vacation.endingDate)
    myForm.append("price", vacation.price.toString())
    myForm.append("image", vacation.image[0])
    myForm.append("continentId", vacation.continentId.toString())

    const response = await axios.post<VacationModel>(appConfig.VacationsURL, myForm)
    const newVacation = response.data

    newVacation.isFollowing = false
    newVacation.followersCount = 0 
    console.log(newVacation)
    VacationStore.dispatch({type: VacationActionTypes.AddVacation, payload: newVacation})
}


async function deleteVacation( vacationId: number): Promise<void> {
    await axios.delete<void>(appConfig.VacationsURL + vacationId, { headers: { authorization: "Bearer " + AuthStore.getState().token } })
    VacationStore.dispatch({type: VacationActionTypes.DeleteVacation, payload: vacationId})
}

export default {
    addVacation,
    deleteVacation
}