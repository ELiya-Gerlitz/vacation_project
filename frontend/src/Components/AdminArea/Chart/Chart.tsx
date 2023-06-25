import React from 'react';
import "./Chart.css"

interface Vacation {
  destination: string;
  followersCount: number;
}

interface ChartProps {
  vacations: Vacation[];
}

function Chart({ vacations }: ChartProps): JSX.Element {
  function getMaxFollowersCount(): number {
    return Math.max(...vacations.map(function (vacation) {
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
    <svg width="100%" height="600">
      {/* Horizontal lines */}
      <g style={{ zIndex: -1 }}>
        {horizontalLines}
      </g>

      {/* X-axis */}
      <line x1="5%" y1="500" x2="95%" y2="500" stroke="black" />

      {vacations.map(function (vacation, index) {
        const xPos = `${2 + (90 / vacations.length) * (index + 0.5)}%`;
        const yPos = `${500 - (400 / maxFollowersCount) * vacation.followersCount}`;
        const barHeight = `${(400 / maxFollowersCount) * vacation.followersCount}`;
        const brightness = (1 - vacation.followersCount / maxFollowersCount) * 80 + 20; // Calculate brightness based on followersCount
        // const fill = `hsl(210, 100%, ${brightness}%)`; // Use HSL color model for better control
        return (
          <React.Fragment key={index}>
            <rect x={xPos} y={yPos} width={`${(90 / vacations.length) * 0.8}%`} height={barHeight} fill="steelblue" />
           <text x={xPos} y={yPos} dy="-0.3em" dx="2em" textAnchor="middle" fill="black" fontWeight="bold">
              {vacation.followersCount}
            </text>
            {/* Ein negativer Wert wie dx="-0.3em" verschiebt den Text nach links, während ein positiver Wert den Text nach rechts verschiebt. dy = negative=oben, positive= unten*/}
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
  );
}

export default Chart;











// import React from 'react';

// interface Vacation {
//   destination: string;
//   followersCount: number;
// }

// interface ChartProps {
//   vacations: Vacation[];
// }

// function Chart({ vacations }: ChartProps): JSX.Element {
//   function getMaxFollowersCount(): number {
//     return Math.max(...vacations.map(function (vacation) {
//       return vacation.followersCount;
//     }));
//   }

//   const maxFollowersCount = getMaxFollowersCount();

//   return (
//     <svg width="100%" height="600">
//       {/* X-axis */}
//       <line x1="5%" y1="500" x2="95%" y2="500" stroke="black" />
//       {vacations.map(function (vacation, index) {
//         const xPos = `${5 + (90 / vacations.length) * (index + 0.5)}%`;
//         return (
//           <text
//             key={index}
//             x={xPos}
//             y="525"
//             textAnchor="middle"
//           >
//             {vacation.destination}
//           </text>
//         );
//       })}

//       {/* Y-axis */}
//       <line x1="5%" y1="100" x2="5%" y2="500" stroke="black" />
//       {Array.from(Array(5).keys()).map(function (_, index) {
//         const yPos = `${100 + (400 / 5) * (index + 0.5)}`;
//         return (
//           <React.Fragment key={index}>
//             <line x1="4%" y1={yPos} x2="5%" y2={yPos} stroke="black" />
//             <text x="3%" y={yPos} textAnchor="end">
//               {((maxFollowersCount / 5) * (index + 1)).toFixed(0)}
//             </text>
//           </React.Fragment>
//         );
//       })}

//       {/* Bars */}
//       {vacations.map(function (vacation, index) {
//         const barWidth = `${(90 / vacations.length) * 0.8}%`;
//         const barHeight = `${(400 / maxFollowersCount) * vacation.followersCount}`;
//         const xPos = `${5 + (90 / vacations.length) * (index + 0.1)}%`;
//         const yPos = `${500 - (400 / maxFollowersCount) * vacation.followersCount}`;
//         return (
//           <rect
//             key={index}
//             x={xPos}
//             y={yPos}
//             width={barWidth}
//             height={barHeight}
//             fill="steelblue"
//           />
//         );
//       })}
//     </svg>
//   );
// }

// export default Chart;
