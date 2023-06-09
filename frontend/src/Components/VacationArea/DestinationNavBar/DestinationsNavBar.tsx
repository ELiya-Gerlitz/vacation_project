import { useState } from "react";
import VacationService from "../../../Services/VacationService";
import "./DestinationsNavBar.css";
import VacationModel from "../../../Models/VacationModel";
import appConfig from "../../../Utils/AppConfig";

function DestinationsNavBar(): JSX.Element {
	const [destinationsFiltered, setDestinationsFiltered] = useState<VacationModel[]>()


const handleClick = (continentId : string)=> {    //the continent is a string for including the "all" fetching.
    VacationService.getVacationsByContinentId(continentId)
    .then((destinationsFiltered)=>{
		console.log(destinationsFiltered)
		// console.log(destinationsFiltered.map(m=>m.isFollowing))
		setDestinationsFiltered(destinationsFiltered)
	})
    .catch((err:any)=>console.log(err))
}  
    return (
        <div className="DestinationsNavBar gallery-section2">
		<section className="page-heading">
			<div className="container">
				<h2>Destinations</h2>
			</div>
		</section>
			<div className="container">
				<div id="filters" className="button-group">       
					<button className="button" data-filter="*" onClick={()=>handleClick("continentId")}>All</button>
					<button className="button" data-filter=".europe" onClick={()=>handleClick("4")}>Europe</button>
					<button className="button" data-filter=".asia"  onClick={()=>handleClick("3")}>Asia</button>
					<button className="button" data-filter=".africa"  onClick={()=>handleClick("5")}>Africa</button>
					<button className="button" data-filter=".australia"  onClick={()=>handleClick("7")}>Australia</button>
					<button className="button" data-filter=".northAmerica"  onClick={()=>handleClick("1")}>North America</button>
					<button className="button" data-filter=".southAmerica"  onClick={()=>handleClick("2")}>South America</button>
					<button className="button" data-filter=".antarctica"  onClick={()=>handleClick("6")}>Antarctica</button>
				</div>
			</div>
			<div>
				{destinationsFiltered && destinationsFiltered.map(d=> <span key={d.vacationId}>{d.destination}{d.isFollowing }<img src={appConfig.imgUrl + d.imageName} alt="vacationImg"/></span>)}
			</div>
        </div>
    );
}

export default DestinationsNavBar;
