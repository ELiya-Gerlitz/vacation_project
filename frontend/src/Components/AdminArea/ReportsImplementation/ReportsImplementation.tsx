import { useEffect, useState } from 'react';
import "./ReportsImplementation.css";
import VacationService from '../../../Services/VacationService';
import VacationModel from '../../../Models/VacationModel';
import Chart from '../Chart/Chart';
import { Fab } from '@mui/material';
import { NavLink } from 'react-router-dom';

function ReportsImplementation(): JSX.Element {
    const [vacations , setVacations] = useState<VacationModel[]>([])

    useEffect(()=>{
        VacationService.getAllVacations()
        .then(vacations=> {
            setVacations(vacations)
        })
        .catch(err=> console.log(err))
    })

    return (
        <div className="ReportsImplementation">
            <h3>Vacations Reports</h3>
            <div className='flexReport'>
                    <div className='upper'>
                        <Chart vacations={vacations} /> 
                    </div>

                    <div className='lower'>
                        <NavLink to="/destinations">
                        <Fab aria-label="like">
                            <span>back {">"} </span>
                        </Fab>	
                        </NavLink>
                    </div>
    </div>
        </div>
    );
}

export default ReportsImplementation;
