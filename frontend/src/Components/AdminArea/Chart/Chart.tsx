import "./Chart.css"

import * as React from 'react';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import VacationModel from "../../../Models/VacationModel";
import CSV from "../CSV/CSV";

interface VacationInfo {
  vacations: VacationModel[];
}

function Chart( props : VacationInfo): JSX.Element {
  function getMaxFollowersCount(): number {
    return Math.max(...props.vacations.map(function (vacation) {
      return vacation.followersCount;
    }));
  }

  const maxFollowersCount = getMaxFollowersCount();

  const yAxisLabels = Array.from(Array(5).keys()).map(function (_, index) {
    const label = ((maxFollowersCount / 5) * (index + 1)).toFixed(0);
    return (
      <text key={index} x="2%" y={`${100 + (400 / 5) * (4 - index + 0.5)}`} textAnchor="end">
        {label}
      </text>
    );
  });

  const horizontalLines = Array.from(Array(5).keys()).map(function (_, index) {
    const yPos = `${100 + (400 / 5) * (4 - index)}`;
    return <line key={index} x1="5%" y1={yPos} x2="95%" y2={yPos} stroke="rgba(0, 0, 0, 0.3)" strokeWidth="1" />;
  });
  
  return (
    <div className="Chart paddingTopCSV">
      {/* CSV downloader *************/}
       <CSV vacations={props.vacations}/>

      {/* Chart *************/}
    <svg width="100%" height="600">
      {/* Horizontal lines */}
      <g style={{ zIndex: -1 }}>
        {horizontalLines}
      </g>

      {/* X-axis */}
      <line x1="5%" y1="500" x2="95%" y2="500" stroke="black" />

      {props.vacations.map(function (vacation, index) {
        const xPos = `${2 + (90 / props.vacations.length) * (index + 0.5)}%`;
        const yPos = `${500 - (400 / maxFollowersCount) * vacation.followersCount}`;
        const barHeight = `${(400 / maxFollowersCount) * vacation.followersCount}`;
        // const brightness = (1 - vacation.followersCount / maxFollowersCount) * 80 + 20; // Calculate brightness based on followersCount
        // const fill = `hsl(210, 100%, ${brightness}%)`; // Use HSL color model for better control
        return (
          <React.Fragment key={index}>
           <Tooltip title={vacation.followersCount + " followers"} placement="bottom" className="toolt" TransitionComponent={Zoom} followCursor={true}>
          <rect x={xPos} y={yPos} width={`${(90 / props.vacations.length) * 0.8}%`} height={barHeight} fill="steelblue" />
          </Tooltip>
           <text x={xPos} y={yPos} dy="-0.3em" dx="2em" textAnchor="middle" fill="black" fontWeight="bold">
              {vacation.followersCount}
            </text>
            {/* Ein negativer Wert wie dx="-0.3em" verschiebt den Text nach links,  positiver-nach rechts. dy = negative=nach oben, positive= nach unten*/}
            <text x={xPos} y="500" dy="1.5em" dx="2.4em" textAnchor="middle" fill="black">
              {vacation.destination}
            </text>
          </React.Fragment>
        );
      })}

      {/* Y-axis */}
      <line x1="5%" y1="100" x2="5%" y2="500" stroke="black" />
      {yAxisLabels}
    </svg>

    {/* CSV download button */}
    {/* <NavLink to={"/Admin/reports"}> <button className="add-btn" >get CSV</button></NavLink> */}   
    </div>

    
  );
}

export default Chart;
