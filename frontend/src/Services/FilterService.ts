import axios from "axios";
import VacationModel from "../Models/VacationModel";
import { VacationStore } from "../Redux/VacationState";
import appConfig from "../Utils/AppConfig";


async function filterByisFollowing( userId : number):Promise<VacationModel[]>{
    let allVacationsUnfiltered = VacationStore.getState().vacations;
    if(allVacationsUnfiltered.length > 0) {
       let filteredVacations = allVacationsUnfiltered.filter( v => v.isFollowing === true)
       return filteredVacations
    }else{
        alert("empty")
        const response = await axios.get<VacationModel[]>(appConfig.filterByisFollowingURL + userId)
        let filteredVacations = response.data
        return filteredVacations
    }
}

export default{
    filterByisFollowing
}