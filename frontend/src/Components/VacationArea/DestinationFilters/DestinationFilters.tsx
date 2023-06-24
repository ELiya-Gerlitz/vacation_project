import { NavLink } from "react-router-dom";
import "./DestinationFilters.css";
import VacationService from "../../../Services/VacationService";
import Card3D from "../../ElementsArea/Card3D/Card3D";
import { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";
import { AuthStore } from "../../../Redux/AuthState";
import { VacationStore } from "../../../Redux/VacationState";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import FilterService from "../../../Services/FilterService";
// import PaginationPattern from "../../../Utils/PaginationPattern/PaginationPattern";


function DestinationFilters(): JSX.Element {
    const userFromRedux = AuthStore.getState().user
    const [vacations, setVacations] = useState<VacationModel[]>([])
    // const [filteredByIsFollowing, setFilteredByIsFollowing] = useState<VacationModel[]>()

// state variables ***********************************************
    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 6;

// rendering Logic *************************************************

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = vacations.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(vacations.length / itemsPerPage);


    const handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
        setCurrentPage(pageNumber);
      }

useEffect(()=>{
    VacationService.getAllVacations(userFromRedux.userId)
	.then(vacations => {
		setVacations(vacations)
        // const unsubscribe = VacationStore.subscribe(() => {
        //    const updatedVacations= VacationStore.getState().vacations
        //     setVacations(updatedVacations)
        })
        // return ()=> {
        //     unsubscribe()
        // }
	// })
	.catch(err=> console.log(err))
},[])

const handleAllVacations = ()=> {
    VacationService.getAllVacations(userFromRedux.userId)
	.then(vacations => {
		setVacations(vacations)
        VacationStore.subscribe(() => {setVacations(vacations)})
	})
	.catch(err=> console.log(err))
}

const handleFollowed = async () => {
   FilterService.filterByisFollowing( userFromRedux.userId )
        .then((filteredFollowedVacations)=>{
        console.log("filtered vacations"+ filteredFollowedVacations)
        setVacations(filteredFollowedVacations)
        alert("here are the vacations!" + filteredFollowedVacations)
    })
        .catch(err=>console.log(err))
}

const handleUnstarted = async  ()=> {

    FilterService.filterUnstarted(userFromRedux.userId )
    .then((filteredUnstarted)=>{
        console.log("unstarted" +filteredUnstarted)
        setVacations(filteredUnstarted)
    })
    .catch()
}
      
const handleActive =()=> {
    FilterService.filterActiveVacations(userFromRedux.userId)
    .then((filteredActive)=>{
        console.log("active" +filteredActive)
        setVacations(filteredActive)
    })
    .catch()
}
    return (
        <div className="DestinationFilters">

<span>all</span> <button onClick={()=>handleAllVacations()}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button>
            <span>followed</span> <button onClick={()=>handleFollowed()}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button>
           <span>unstarted</span> <button onClick={()=>handleUnstarted()}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button>
           <span>active </span><button onClick={()=>handleActive()}><img className="filterImg" src="https://img.freepik.com/free-photo/cyclist-bycicle-race_181624-23283.jpg?w=740&t=st=1686774042~exp=1686774642~hmac=d1da707aedacac7fd3abbe90a06f3b07309d90c66bf8108fcc89366885a26f2a"/> </button> 

            {userFromRedux?.role === "Admin" ? <NavLink to={"/Admin/add-vacation"}> <button className="add-btn" >add new Vacation!</button></NavLink>: ""}

            
         
                <section className="articles">
                    {vacations && currentItems.map(v=><Card3D key={v.vacationId} vacationModel={v} user={userFromRedux} />)}
                    {/* {vacations && vacations.map(v=><Card3D key={v.vacationId} vacationModel={v} user={userFromRedux} />)} */}
                </section>	

                <Stack spacing={2}>
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    size="large"
                    className="handlePageChange"
                />
            </Stack>
        </div>
    );
}

export default DestinationFilters;