import { useEffect, useState } from 'react';
import "./ReportsImplementation.css";
import VacationService from '../../../Services/VacationService';
import VacationModel from '../../../Models/VacationModel';
import Chart from '../Chart/Chart';
import { Fab } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import Canvas from '../Canvas/Canvas';
// import App from './App';
// const Canvas = require('./Canvas/Canvas.tsx').default;


function ReportsImplementation(): JSX.Element {
    const [vacations , setVacations] = useState<VacationModel[]>([])

    useEffect(()=>{
        VacationService.getAllVacations()
        .then(vacations=> {
            setVacations(vacations)

            
        })
        .catch(err=> console.log(err))
    })

    
              //     const followersMaxCount333 = vacations.map(v=> v.followersCount)
    //     console.log(followersMaxCount333)
    //     console.log(Math.max(...followersMaxCount333))
      // })
      // .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
    // setmaxFollowersCount(Math.max(...vacations.map((vacation) => vacation.followersCount)))
    return (
        <div className="ReportsImplementation">
            <h3>Vacations Reports</h3>
            <div className='flexReport'>
                    <div className='upper'>
                        {/* <Canvas/> */}
                        <Chart /> 
                        {/* <Canvas/> */}
                        {/* <Chart vacations={vacations} />  */}
                        {/* <CanvasJSChart options={options} containerProps={{ width: '100%', height: '300px' }} /> */}
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
