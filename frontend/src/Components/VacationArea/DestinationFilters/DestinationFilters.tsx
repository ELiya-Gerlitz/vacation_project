import { NavLink } from "react-router-dom";
import "./DestinationFilters.css";
import VacationService from "../../../Services/VacationService";
import Card3D from "../../ElementsArea/Card3D/Card3D";
import { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";
import { AuthStore } from "../../../Redux/AuthState";

function DestinationFilters(): JSX.Element {
    // const userIdLoggedIn = AuthStore.getState().user.userId
    const userFomRedux = AuthStore.getState().user
    const [vacations, setVacations] = useState<VacationModel[]>()
    const [filteredByIsFollowing, setFilteredByIsFollowing] = useState<VacationModel[]>()

useEffect(()=>{
	VacationService.getAllVacations(userFomRedux.userId)
	.then(vacations => {
		setVacations(vacations)
	})
	.catch(err=> console.log(err))
},[])

const handleFollowed = async () => {
alert("Hi!")


}

    return (
        <div className="DestinationFilters">

                    <button onClick={handleFollowed}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button>
                 
            <br></br>
            <br></br>
            <br></br>
                <section className="articles">
                    {vacations && vacations.map(v=><Card3D key={v.vacationId} vacationModel={v} user={userFomRedux} />)}
                    {filteredByIsFollowing && filteredByIsFollowing.map(v=><Card3D key={v.vacationId} vacationModel={v} user={userFomRedux} />)}
                </section>		

        </div>
    );
}

export default DestinationFilters;
