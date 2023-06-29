import axios from "axios";
import VacationModel from "../Models/VacationModel";
import appConfig from "../Utils/AppConfig";
import { VacationActionTypes, VacationStore } from "../Redux/VacationState";


async function addVacation(vacation : VacationModel): Promise<void> {
    console.log(vacation.continentId)
    console.log("vacation.continentId")

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



    // retrieve continentName from Redux to front to render it 
    // const continentsFromRedux = VacationStore.getState().continents
    // console.log("these are the continentsFromRedux")
    // console.log(continentsFromRedux)
    // const wantedIndex = continentsFromRedux.findIndex(c=>c.continentId === vacation.continentId)
    // console.log("wantedIndex")
    // console.log(wantedIndex)
    // const wantedContinent = continentsFromRedux[wantedIndex].continentName

    // console.log("wantedcontinentName")
    // console.log(wantedContinent)
  
    newVacation.isFollowing = 0
    newVacation.followersCount = 0 

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
    updatedVacation.continentName = vacation.continentName
    VacationStore.dispatch({type: VacationActionTypes.UpdateVacation, payload: updatedVacation})
}


async function deleteVacation( vacationId: number): Promise<void> {
    await axios.delete<void>(appConfig.VacationsURL + vacationId)
    VacationStore.dispatch({type: VacationActionTypes.DeleteVacation, payload: vacationId})
}


async function getSingleVacation( vacationId : number ): Promise<VacationModel> {
    let vacations = VacationStore.getState().vacations
    if(vacations.length > 0){
        let specificVacation = vacations.find(v =>v.vacationId === vacationId)
        return specificVacation
    }
    else{
        alert("empty")
    const response = await axios.get<VacationModel>(appConfig.getSingleVacation + vacationId)
    let specificVacation = response.data
    return specificVacation
    }
}


export default {
    addVacation,
    deleteVacation,
    updateVacation,
    getSingleVacation
}