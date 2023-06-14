import { NavLink } from "react-router-dom";
import "./DestinationFilters.css";
import VacationService from "../../../Services/VacationService";

function DestinationFilters(): JSX.Element {

const handleFollowedVacations = ()=> {
    // VacationService.

}

    return (
        <div className="DestinationFilters">
           <a href="#" onClick={()=>handleFollowedVacations()}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </a>
			
        </div>
    );
}

export default DestinationFilters;
