import { useState } from "react";
import ContinentTooltip from "../ContinentTooltip/ContinentTooltip";
import "./ContinentFilter.css";
import VacationModel from "../../../Models/VacationModel";

function ContinentFilter(): JSX.Element {
    // const [vacationsByContinent, setvacationsByContinent] = useState<VacationModel[]>()
  
    return (
        <div className="ContinentFilter">
    <ContinentTooltip continentName={"AAAAAAAAAAAasia"} continentId={2}/>
    <ContinentTooltip continentName={"Africa"} continentId={4}/>

 </div>
    );
}

export default ContinentFilter;
