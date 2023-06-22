import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useEffect } from "react";
import authService from "../../../Services/authService";
import { VacationStore } from "../../../Redux/VacationState";

function Logout(): JSX.Element {

const navigate= useNavigate()

useEffect(()=>{

    authService.logout()
    .then(()=>{
        alert("bye bye")
        navigate("/home")
    })
    .catch(err=>console.log(err))
},[])
      
    return  null
}

export default Logout;