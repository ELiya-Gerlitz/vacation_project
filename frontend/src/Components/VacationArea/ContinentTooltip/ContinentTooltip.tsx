import "./ContinentTooltip.css";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";
import VacationService from "../../../Services/VacationService";
import VacationModel from "../../../Models/VacationModel";

interface  continentInterface {
    continentName : string
    continentId : number

}

function ContinentTooltip(props : continentInterface): JSX.Element {
    const [continentId, setContinentId] = useState<number>()
    const [vacationsByContinentId, setVacationsByContinentId] = useState<VacationModel[]>()

    const fetchContinentIdValue = (e : any)=>{
        // const continentName = e.target.dataset.continentname
        // alert(continentName)
        // // setContinentId(e.target.dataset.continentid)

        VacationService.getVacationsByContinentId(e.target.dataset.continentid)
        .then((vacationsByContinentId)=>{
            setVacationsByContinentId(vacationsByContinentId)
            console.log(vacationsByContinentId)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="ContinentTooltip">
            <Tooltip title={props.continentName} followCursor>
                <Box sx={{ color: 'background.paper', p: 2 }}>
                    <div data-continent={props.continentName} onClick={fetchContinentIdValue} data-continentid={props.continentId}>Hover over me</div>
                </Box>
            </Tooltip>
        </div>
    );
}
export default ContinentTooltip;
