import "./ReportsImplementation.css";
import Chart from '../Chart/Chart';
import { Fab } from '@mui/material';
import { NavLink } from 'react-router-dom';

function ReportsImplementation(): JSX.Element {
      return (
        <div className="ReportsImplementation">
            <h3>Vacations Reports</h3>
            <div className='flexReport'>
                    <div className='upper'>
                        <Chart /> 
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
