import { NavLink } from "react-router-dom";
import "./DestinationFilters.css";
import VacationService from "../../../Services/VacationService";
import Card3D from "../../ElementsArea/Card3D/Card3D";
import { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";
import { AuthStore } from "../../../Redux/AuthState";
import { VacationStore } from "../../../Redux/VacationState";
import FilterService from "../../../Services/FilterService";

function DestinationFilters(): JSX.Element {
    // const userIdLoggedIn = AuthStore.getState().user.userId
    const userFromRedux = AuthStore.getState().user
    const [vacations, setVacations] = useState<VacationModel[]>()
    const [filteredByIsFollowing, setFilteredByIsFollowing] = useState<VacationModel[]>()

useEffect(()=>{
	VacationService.getAllVacations(userFromRedux.userId)
	.then(vacations => {
		setVacations(vacations)
        VacationStore.subscribe(() => {setVacations(vacations)})
	})
	.catch(err=> console.log(err))
},[])

const handleFilter = async ( param :string) => {
    switch(param) {
        case "followed":
            FilterService.filterByisFollowing(userFromRedux.userId)
            .then((vacations)=>{
                console.log(vacations)
                setVacations(vacations)
                alert("here are the vacations!" +vacations)
            })
            .catch(err=>console.log(err))
          break;
          
        case "unstarted":
          alert("unstarted")
          break;

          case "active":
            alert("active")
            break;
      }
}

    return (
        <div className="DestinationFilters">

            <button onClick={()=>handleFilter("followed")}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button>
            <button onClick={()=>handleFilter("unstarted")}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button>
            <button onClick={()=>handleFilter("active")}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button>
            {userFromRedux?.role === "Admin" ? <NavLink to={"/Admin/add-vacation"}> <button className="add-btn" >add new Vacation!</button></NavLink>: ""}
         
                <section className="articles">
                    {vacations && vacations.map(v=><Card3D key={v.vacationId} vacationModel={v} user={userFromRedux} />)}
                    {/* {filteredByIsFollowing && filteredByIsFollowing.map(v=><Card3D key={v.vacationId} vacationModel={v} user={userFromRedux} />)} */}
                </section>		

        </div>
    );
}

export default DestinationFilters;
