import VacationModel from "../../../Models/VacationModel";
import "./ToggleButtonAdmin.css";
import ModalExample from "../ModalExample/ModalExample";
import { useNavigate } from "react-router-dom";

interface DataInterface {
    vacationModel : VacationModel
     userId : number
   }

function ToggleButtonAdmin( props : DataInterface): JSX.Element {
    const navigate = useNavigate()
      
    const handleEdit = ()=> {
       const vacationId = props.vacationModel.vacationId
       console.log("vacationID"+vacationId)
       navigate("/Admin/update-vacation/" + vacationId)
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
                <ModalExample vacationId={props.vacationModel.vacationId}/>
            </div>

        </div>
    );
}

export default ToggleButtonAdmin;
