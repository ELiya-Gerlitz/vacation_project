import React, { useEffect, useState } from 'react';
import "./ReportsImplementation.css";
import VacationService from '../../../Services/VacationService';
import { AuthStore } from '../../../Redux/AuthState';
import VacationModel from '../../../Models/VacationModel';
import Chart from '../Chart/Chart';

function ReportsImplementation(): JSX.Element {
    const [vacations , setVacations] = useState<VacationModel[]>([])

    const userFromRedux = AuthStore.getState().user

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
  <Chart vacations={vacations} />			
        </div>
    );
}

export default ReportsImplementation;
