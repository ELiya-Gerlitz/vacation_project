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

async function updateVacation( vacation: VacationModel): Promise<void> {

    const myForm = new FormData()
    myForm.append("destination", vacation.destination)
    myForm.append("description", vacation.description)
    myForm.append("startingDate", vacation.startingDate)
    myForm.append("endingDate", vacation.endingDate)
    myForm.append("price", vacation.price.toString())
    myForm.append("image", vacation.image[0])
    myForm.append("continentId", vacation.continentId.toString())

    const response = await axios.put<VacationModel>(appConfig.VacationsURL + vacation.vacationId, myForm)
    const updatedVacation = response.data
    VacationStore.dispatch({type: VacationActionTypes.UpdateVacation, payload: updatedVacation})
}


async function deleteVacation( vacationId: number): Promise<void> {
    await axios.delete<void>(appConfig.VacationsURL + vacationId)
    VacationStore.dispatch({type: VacationActionTypes.DeleteVacation, payload: vacationId})
}


async function getSingleVacation( vacationId : number ): Promise<VacationModel> {

    let vacation = VacationStore.getState().vacations
    let vacationSpecific = vacation.find(v =>v.vacationId === vacationId)
    if(!vacationSpecific){
        alert("empty")
    const response = await axios.get<VacationModel>(appConfig.VacationsURL + vacationId)
    vacationSpecific = response.data
    }
    return vacationSpecific
}


export default {
    addVacation,
    deleteVacation,
    updateVacation,
    getSingleVacation
}