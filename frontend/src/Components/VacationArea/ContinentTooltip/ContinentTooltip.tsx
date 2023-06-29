import "./ContinentTooltip.css";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import VacationService from "../../../Services/VacationService";
import VacationModel from "../../../Models/VacationModel";
import FilterService from "../../../Services/FilterService";

interface  continentInterface {
    continentName : string
    continentId : number
    className :string

}

function ContinentTooltip(props : continentInterface): JSX.Element {
    const [vacationsByContinentId, setVacationsByContinentId] = useState<VacationModel[]>([])

    const fetchContinentIdValue = (e : any)=>{

        // console.log(e.target.dataset.continentid + "e.target.dataset.continentid")
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
