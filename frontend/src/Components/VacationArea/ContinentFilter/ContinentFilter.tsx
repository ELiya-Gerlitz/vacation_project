import ContinentTooltip from "../ContinentTooltip/ContinentTooltip";
import "./ContinentFilter.css";

function ContinentFilter(): JSX.Element {
  
    return (
        <div className="ContinentFilter">
    <ContinentTooltip continentName={"AAAAAAAAAAAasia"} continentId={2}/>
    <ContinentTooltip continentName={"Africa"} continentId={4}/>
			
        </div>
    );
}

export default ContinentFilter;
