import React, { useEffect, useState } from 'react';
import Chart from "../Chart/Chart";
import "./ReportsImplementation.css";
import VacationService from '../../../Services/VacationService';
import { AuthStore } from '../../../Redux/AuthState';
import VacationModel from '../../../Models/VacationModel';

function ReportsImplementation(): JSX.Element {
    const [vacations , setVacations] = useState<VacationModel[]>([])

    const userFromRedux = AuthStore.getState().user

    useEffect(()=>{
        VacationService.getAllVacations(userFromRedux.userId)
        .then(vacations=> {
            setVacations(vacations)
        })
        .catch(err=> console.log(err))
    })

    return (
        <div className="ReportsImplementation">
  <Chart vacations={vacations} />			
        </div>
    );
}

export default ReportsImplementation;
