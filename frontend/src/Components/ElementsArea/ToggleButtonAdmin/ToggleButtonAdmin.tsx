import { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";
import "./ToggleButtonAdmin.css";
import VacationService from "../../../Services/VacationService";
import AdminService from "../../../Services/AdminService";
import ModalExample from "../ModalExample/ModalExample";

interface DataInterface {
    vacationModel : VacationModel
     userId : number
   }

function ToggleButtonAdmin( props : DataInterface): JSX.Element {
      
    const handleEdit = ()=> {
       
            
    }

const handleDelete = ()=> {
    AdminService.deleteVacation(props.vacationModel.vacationId)
    .then(()=> alert("successfully deleted!"))
    .catch(err=> console.log(err))
    
}
    return (
        <div className="ToggleButtonAdmin">
            {/* Edit btn ********************/}
            <div className="flexer"> 
                <button className="toggle-button" onClick={handleEdit}>
                        <lord-icon
                            src="https://cdn.lordicon.com/bxxnzvfm.json"
                            trigger="hover"
                            colors="primary:#3a3347,secondary:#ffc738,tertiary:#f9c9c0,quaternary:#ebe6ef"
                            className="Bleistift">
                        </lord-icon>
                    <span className="text">Edit</span>
                </button>
            </div>

            {/* Delete btn ********************/}            
            <div className="flexer">
                {/* <button className="toggle-button" onClick={handleDelete}>
                        <lord-icon
                            src="https://cdn.lordicon.com/qjwkduhc.json"
                            trigger="hover"
                            colors="primary:#c7166f,secondary:#848484,tertiary:#3080e8"
                            >
                        </lord-icon>
                    <span className="text">Delete</span>
                </button> */}
                <ModalExample vacationId={props.vacationModel.vacationId}/>
            </div>

        </div>
    );
}

export default ToggleButtonAdmin;
