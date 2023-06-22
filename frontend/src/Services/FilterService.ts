import axios from "axios";
import VacationModel from "../Models/VacationModel";
import { VacationStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";


async function filterByisFollowing(userId : number):Promise<VacationModel[]>{
    let allVacationsUnfiltered = VacationStore.getState().vacations;
    if(allVacationsUnfiltered.length > 0) {
       let filteredVacations = allVacationsUnfiltered.filter(v=> v.isFollowing === 1)
       console.log("I am in the filtering from the redux FilterService")
       console.log(filteredVacations)
       return filteredVacations
    }else{
        alert("empty")
        const response = await axios.get<VacationModel[]>(appConfig.filterByisFollowingURL + userId)
        let filteredVacations = response.data
        return filteredVacations
    }
}

async function filterUnstarted(userId : number):Promise<VacationModel[]>{
    let allVacationsUnfiltered = VacationStore.getState().vacations;
    if(allVacationsUnfiltered.length > 0) {
       let filteredVacations = allVacationsUnfiltered.filter( v => new Date(v.startingDate) > new Date())
       console.log(filteredVacations)
    // eslint-disable-next-line no-restricted-globals
// console.log(new Date(v.startingDate) )
       return filteredVacations
    }else{
        alert("empty")
        const response = await axios.get<VacationModel[]>(appConfig.filterByUnstartedURL + userId)
        let filteredVacations = response.data
        return filteredVacations
    }
}

async function filterActiveVacations(userId : number):Promise<VacationModel[]>{
    let allVacationsUnfiltered = VacationStore.getState().vacations;
    const currentDate = new Date()
    if(allVacationsUnfiltered.length > 0) {
       let filteredVacations = allVacationsUnfiltered.filter( v => new Date(v.startingDate) < currentDate && new Date(v.endingDate) > currentDate)
       return filteredVacations
    }else{
        alert("empty")
        const response = await axios.get<VacationModel[]>(appConfig.filterByActiveVacationsURL + userId)
        let filteredVacations = response.data
        return filteredVacations
    }
}

export default{
    filterByisFollowing,
    filterUnstarted,
    filterActiveVacations
}