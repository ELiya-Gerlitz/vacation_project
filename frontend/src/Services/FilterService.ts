import axios from "axios";
import VacationModel from "../Models/VacationModel";
import { VacationStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";

async function filterByisFollowing():Promise<VacationModel[]>{
    let allVacationsUnfiltered = VacationStore.getState().vacations;
    if(allVacationsUnfiltered.length > 0) {
       let filteredVacations = allVacationsUnfiltered.filter(v=> v.isFollowing === 1)
       return filteredVacations
    }else{
        // basically, it should never get into this spot, but just in case....
        const response = await axios.get<VacationModel[]>(appConfig.filterByisFollowingURL)
        let filteredVacations = response.data
        return filteredVacations
    }
}

async function filterUnstarted():Promise<VacationModel[]>{
    let allVacationsUnfiltered = VacationStore.getState().vacations;
    if(allVacationsUnfiltered.length > 0) {
       let filteredVacations = allVacationsUnfiltered.filter( v => new Date(v.startingDate) > new Date())
       return filteredVacations
    }else{
        const response = await axios.get<VacationModel[]>(appConfig.filterByUnstartedURL)
        let filteredVacations = response.data
        return filteredVacations
    }
}

async function filterActiveVacations():Promise<VacationModel[]>{
    let allVacationsUnfiltered = VacationStore.getState().vacations;
    const currentDate = new Date()
    if(allVacationsUnfiltered.length > 0) {
       let filteredVacations = allVacationsUnfiltered.filter( v => new Date(v.startingDate) <= currentDate && new Date(v.endingDate) >= currentDate)
       return filteredVacations
    }else{
        const response = await axios.get<VacationModel[]>(appConfig.filterByActiveVacationsURL)
        let filteredVacations = response.data
        return filteredVacations
    }
}

// Unfinished feature ************************************//
async function getVacationsByContinentId( continentId : number):Promise<VacationModel[]>{
    let vacations = VacationStore.getState().vacations
    console.log("I am before th if")
    console.log(vacations)
    // if(vacations.length === 0){
    //     console.log("I am in the if")
    //     const response = await axios.get<VacationModel[]>(appConfig.getVacByContinentId + continentId)
    //     const filteredVacations = response.data
    //     return filteredVacations
    // }
    // else{
        const filteredVacations = vacations.filter(v=> v.continentId === continentId )
        console.log(filteredVacations)
        return filteredVacations
    // }
}

export default{
    filterByisFollowing,
    filterUnstarted,
    filterActiveVacations,
    getVacationsByContinentId
}