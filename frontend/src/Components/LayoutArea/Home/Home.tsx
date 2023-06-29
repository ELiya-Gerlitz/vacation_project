import "./Home.css";
import Eilat_with_fam from "../../../Assets/images/eilat.jpg"
import wald2 from "../../../Assets/image/wald2.jpg"
import wald1 from "../../../Assets/image/wald1.jpg"
import { useState } from "react";
import VacationModel from "../../../Models/VacationModel";
import FilterService from "../../../Services/FilterService";
// import wald2 from "../../../Assets/images/"


function Home(): JSX.Element {

    const [vacationsByContinent, setVacationsByContinent]= useState<VacationModel[]>()
    const handleVac = ()=>{
        alert("Hi btn")
        FilterService.getVacationsByContinentId(7)
        .then(vacationsByContinent=>{
                setVacationsByContinent(vacationsByContinent)
                console.log(vacationsByContinent)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className="Home">
		<h2>Home</h2>
        <img src={Eilat_with_fam}/>
        <button onClick={handleVac}>click me !</button>
            
        </div>
    );
}

export default Home;
