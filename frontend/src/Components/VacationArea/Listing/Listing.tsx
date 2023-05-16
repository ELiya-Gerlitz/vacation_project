import VacationService from "../../../Services/VacationService";
import "./Listing.css";

function Listing(): JSX.Element {


const handleClick = (continentId : string)=> {    //the continent is a string for including the "all" fetching.
    VacationService.getVacationsByContinentId(continentId)
    .then((vacations)=>{console.log(vacations)})
    .catch(err=>console.log(err))
}
  
    return (
        <div className="Listing">

<div className="container">
		<div id="filters" className="button-group">       
			  <button className="button" data-filter="*" onClick={()=>{handleClick("continentId")}}>all</button>
			  <button className="button" data-filter=".europe" onClick={()=>{handleClick("2")}}>Europe</button>
			  <button className="button" data-filter=".asia">design</button>
			  <button className="button" data-filter=".africa">development</button>
			  <button className="button" data-filter=".australia">marketing</button>
			  <button className="button" data-filter=".northAmerica">marketing</button>
			  <button className="button" data-filter=".southAmerica">marketing</button>
              <button className="button" data-filter=".antarctic">seo</button>

		</div>
	</div>
			
        </div>
    );
}

export default Listing;
