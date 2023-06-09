import { NavLink, useNavigate } from "react-router-dom";
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
import RoleEnum from "../../../Models/RolesEnum";
import ImageButtonComponent from "../../ElementsArea/ButtonMUIComplex/ImageButtonComponent";
import London from "../../../Assets/images/London_Bridge.jpg"
import Water from "../../../Assets/images/Water.jpg"
import Athens from "../../../Assets/images/Athens.jpg"
import Carrebian from "../../../Assets/images/Carrebian.jpg"
import FrameBtn from "../../ElementsArea/FrameBtn/FrameBtn";
import notifyService from "../../../Services/NotifyService";


function DestinationFilters(): JSX.Element {
    const userFromRedux = AuthStore.getState().user
    const [vacations, setVacations] = useState<VacationModel[]>([])
    const navigate = useNavigate()
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
                // ********************************************************
            const element = document.getElementById('section-1');
            if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
            }

        setCurrentPage(pageNumber);
      }

useEffect(()=>{
    VacationService.getAllVacations()
	.then(vacations => {
		setVacations(vacations)
	})
	.catch(err=> console.log(err))
    
    const unsubscribe = VacationStore.subscribe(() => {
        const updatedVacations = [...VacationStore.getState().vacations]
        setVacations(updatedVacations);
      });
  
},[])

const handleAllVacations = ()=> {
     VacationService.getAllVacations()
	.then(vacations => {
		setVacations(vacations)
        setCurrentPage(1)

        const unsubscribe = VacationStore.subscribe(() => {
            try{
                setVacations(VacationStore.getState().vacations)

            }catch(err:any){
                notifyService.error(err)
            }
        })
	})
	.catch(err=> {
        notifyService.error(err)
    })
}

const handleFollowed = async () => {
  if(userFromRedux.role === RoleEnum.Admin){
    navigate("/Admin/reports")
  } else{
    FilterService.filterByisFollowing()
    .then((filteredFollowedVacations)=>{
    setVacations(filteredFollowedVacations)
    setCurrentPage(1)
})
    .catch(err=>{
        notifyService.error(err)
    })
  }
}

const handleUnstarted = async ()=> {
    FilterService.filterUnstarted()
    .then((filteredUnstarted)=>{
        setVacations(filteredUnstarted)
        setCurrentPage(1)
    })
    .catch(err=>{
        notifyService.error(err)
    })
}
      
const handleActive =()=> {
    FilterService.filterActiveVacations()
    .then((filteredActive)=>{
        setVacations(filteredActive)
        setCurrentPage(1)
    })
    .catch(err=>{
        notifyService.error(err)
    })
}
    return (
        <div className="DestinationFilters">
            <ImageButtonComponent url={London} title="AllVacations" width="25%" onClick={handleAllVacations}/>
            <ImageButtonComponent url={Water} title="Followed" width="25%" onClick={handleFollowed}/>
            <ImageButtonComponent url={Athens} title="Unstarted" width="25%" onClick={handleUnstarted}/>
            <ImageButtonComponent url={Carrebian} title="Active" width="25%" onClick={handleActive}/>
        
            {/* this div {section-1} is for the `scrollIntoView` */}
            <div style={{height : "20px"}} id="section-1"></div>
                  <div className="addingOrnament">{userFromRedux?.role === RoleEnum.Admin ? <NavLink to={"/Admin/add-vacation"}> <FrameBtn btnString={"Add Vacation"}/></NavLink>: ""}</div>

                <section className="articles">
                    {vacations && currentItems.map(v=><Card3D key={v.vacationId} vacationModel={v} user={userFromRedux} />)}
                </section>	
                                 {/* <ContinentFilter/> */}
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