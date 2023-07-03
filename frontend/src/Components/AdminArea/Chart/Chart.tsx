import "./Chart.css";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import VacationModel from "../../../Models/VacationModel";
import CSV from "../CSV/CSV";

import "./Chart.css"
import VacationService from "../../../Services/VacationService";
import { useEffect, useState } from "react";
import * as React from 'react';

function Chart(): JSX.Element {

  const [vacations, setVacations]= useState<VacationModel[]>([])

  useEffect(()=>{
      VacationService.getAllVacations()
      .then((vacations)=>{
        setVacations(vacations)
      })
      .catch(err=>console.log(err))

  })
  function getMaxFollowersCount(): number {
    return Math.max(...vacations.map((vacation) => vacation.followersCount))
  }

  const maxFollowersCount = getMaxFollowersCount()
  const maxHeight = 400;
  const unitHeight = maxFollowersCount > 0 ? maxHeight / maxFollowersCount : 0;

  const yAxisLabels = maxFollowersCount > 0 ? Array.from(Array(maxFollowersCount + 1).keys()).map((_, index) => {
    const label = index.toFixed(0); // Use index as the label directly
    return (
      <text key={index} x="2%" y={`${100 + maxHeight - (index * unitHeight)}`} textAnchor="end">
        {label}
      </text>
    );
  }) : null;
  
  const horizontalLines = maxFollowersCount > 0 ? Array.from(Array(maxFollowersCount + 1).keys()).map((_, index) => {
    const yPos = `${100 + maxHeight - (index * unitHeight)}`;
    return <line key={index} x1="5%" y1={yPos} x2="95%" y2={yPos} stroke="rgba(0, 0, 0, 0.3)" strokeWidth="1" />
  }) : null;
  return (
    <div className="Chart paddingTopCSV">
      {/* CSV downloader *************/}
       <CSV vacations={vacations}/>

      {/* Chart *************/}
    {vacations && <svg width="100%" height="600">
      {/* Horizontal lines */}
      <g style={{ zIndex: -1 }}>
        {horizontalLines}
      </g>

      {/* X-axis */}
      <line x1="5%" y1="500" x2="95%" y2="500" stroke="black" />

      { vacations.map(function (vacation, index) {
        const xPos = `${2 + (90 / vacations.length) * (index + 0.5)}%`
        const yPos = `${500 - (400 / maxFollowersCount) * vacation.followersCount}`
        const barHeight = `${(400 / maxFollowersCount) * vacation.followersCount}`
        return (
          <React.Fragment key={index}>
           <Tooltip title={vacation.followersCount + " followers"} placement="bottom" className="toolt" TransitionComponent={Zoom} followCursor={true}>
          <rect x={xPos} y={yPos} width={`${(90 / vacations.length) * 0.8}%`} height={barHeight} fill="steelblue" />
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
    </svg>}
    </div>
  );
}

export default Chart;



