import axios from "axios";
import VacationModel from "../Models/VacationModel";
import { AuthStore } from "../Redux/AuthState";
import appConfig from "../Utils/AppConfig";
import { VacationActionTypes, VacationStore } from "../Redux/VacationState";


async function addVacation(vacation : VacationModel): Promise<void> {
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

export default {
    addVacation
}