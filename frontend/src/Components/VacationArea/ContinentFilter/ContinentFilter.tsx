import ContinentTooltip from "../ContinentTooltip/ContinentTooltip";
import "./ContinentFilter.css";

//  This component is not yet in use************************

function ContinentFilter(): JSX.Element {
    return (
        <div className="ContinentFilter">
            <div id="envelope">
                <ContinentTooltip continentName={"AAAAAAAAAAAasia"} continentId={2} className={"continentDiv"}/>
                <ContinentTooltip continentName={"Africa"} continentId={4} className={"continentDiv"}/>
            </div>
 </div>
    );
}

export default ContinentFilter;
