import { createStore } from "redux"
import VacationModel from "../Models/VacationModel";

export class VacationState{
    public vacations: VacationModel[]=[];
}

export enum VacationActionTypes{
    FetchAllVacations,
    AddVacation,
    UpdateVacation,
    DeleteVacation,
    Follow,
    Unfollow
}

export interface VacationActions{
    type: VacationActionTypes
    payload: any
}

export function VacationReducer(currentState= new VacationState(), action: VacationActions):VacationState{
   const newState= {...currentState}
   switch (action.type){

    case VacationActionTypes.FetchAllVacations:
        newState.vacations = action.payload
        break;

    // case VacationActionTypes.AddVacation:
    //     newState.vacations.push(action.payload)
    //     break;

    // case VacationActionTypes.UpdateVacation:
    //     let updatedVacationIndex = newState.vacations.findIndex(v=>v.vacationId === action.payload.vacationId)  //new details about one vacation
    //     if(updatedVacationIndex > -1){
    //        newState.vacations[updatedVacationIndex] = action.payload
    //     }
    //     break;

    // case VacationActionTypes.DeleteVacation:
    //     let indexToDelete = newState.vacations.findIndex(v=> v.vacationId === action.payload)        
    //     if(indexToDelete > -1){
    //         newState.vacations.splice(indexToDelete, 1)
    //     }
    //     break;

    case VacationActionTypes.Follow:
      let vacationIndex = newState.vacations.findIndex( v => v.vacationId === action.payload.vacationId)
      if (vacationIndex > -1) {
        newState.vacations[vacationIndex].isFollowing = true
        console.log("is Following is updated in Redux as `true`")
      }
        break;


        case VacationActionTypes.Unfollow:
             let vacIndex= newState.vacations.findIndex( v => v.vacationId === action.payload.vacationId)
            if (vacIndex > -1) {
              newState.vacations[vacationIndex].isFollowing = false
              console.log("is Following is updated in Redux as `false`")
            }
              break;
   }

   return newState
}

export const VacationStore = createStore(VacationReducer)