import VacationService from "../../../Services/VacationService";
import "./DestinationsNavBar.css";

function DestinationsNavBar(): JSX.Element {


const handleClick = (continentId : string)=> {    //the continent is a string for including the "all" fetching.
    VacationService.getVacationsByContinentId(continentId)
    .then((vacations)=>{console.log(vacations)})
    .catch(err=>console.log(err))
}  
    return (
        <div className="DestinationsNavBar gallery-section2">
			<div className="container">
				<div id="filters" className="button-group">       
					<button className="button" data-filter="*" onClick={()=>{handleClick("continentId")}}>All</button>
					<button className="button" data-filter=".europe" onClick={()=>{handleClick("2")}}>Europe</button>
					<button className="button" data-filter=".asia">Asia</button>
					<button className="button" data-filter=".africa">Africa</button>
					<button className="button" data-filter=".australia">Australia</button>
					<button className="button" data-filter=".northAmerica">North America</button>
					<button className="button" data-filter=".southAmerica">South America</button>
					<button className="button" data-filter=".antarctic">Antarctica</button>
				</div>
			</div>
        </div>
    );
}

export default DestinationsNavBar;
