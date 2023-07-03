import "./ContinentTooltip.css";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import VacationModel from "../../../Models/VacationModel";
import FilterService from "../../../Services/FilterService";

// This component is not yet in use *****************************//
interface  continentInterface {
    continentName : string
    continentId : number
    className :string

}

function ContinentTooltip(props : continentInterface): JSX.Element {
    const [vacationsByContinentId, setVacationsByContinentId] = useState<VacationModel[]>([])

    const fetchContinentIdValue = (e : any)=>{
        FilterService.getVacationsByContinentId(e.target.dataset.continentid)
        .then((vacationsByContinentId)=>{
           (setVacationsByContinentId(vacationsByContinentId))
           console.log(vacationsByContinentId)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="ContinentTooltip">
            <Tooltip title={props.continentName} followCursor>
                <Box sx={{ color: 'background.paper'}}>
                    <div data-continentname={props.continentName} onClick={fetchContinentIdValue} data-continentid={props.continentId} className={"divsing"}>Hover over me</div>
                </Box>
            </Tooltip>
        </div>
    );
}
export default ContinentTooltip;
