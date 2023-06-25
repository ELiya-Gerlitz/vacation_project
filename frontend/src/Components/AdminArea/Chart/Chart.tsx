import React from 'react';

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

  return (
    <svg width="400" height="300">
      {/* X-axis */}
      <line x1="50" y1="250" x2="350" y2="250" stroke="black" />
      {vacations.map(function (vacation, index) {
        return (
          <text
            key={index}
            x={50 + ((300 / vacations.length) * (index + 1))}
            y="275"
            textAnchor="middle"
          >
            {vacation.destination}
          </text>
        );
      })}

      {/* Y-axis */}
      <line x1="50" y1="50" x2="50" y2="250" stroke="black" />
      {Array.from(Array(5).keys()).map(function (_, index) {
        return (
          <React.Fragment key={index}>
            <line x1="45" y1={250 - (200 / 5) * (index + 1)} x2="50" y2={250 - (200 / 5) * (index + 1)} stroke="black" />
            <text x="40" y={255 - (200 / 5) * (index + 1)} textAnchor="end">
              {((maxFollowersCount / 5) * (index + 1)).toFixed(0)}
            </text>
          </React.Fragment>
        );
      })}

      {/* Bars */}
      {vacations.map(function (vacation, index) {
        return (
          <rect
            key={index}
            x={50 + ((300 / vacations.length) * (index + 0.25))}
            y={250 - (200 / maxFollowersCount) * vacation.followersCount}
            width={(300 / vacations.length) * 0.5}
            height={(200 / maxFollowersCount) * vacation.followersCount}
            fill="steelblue"
          />
        );
      })}
    </svg>
  );
}

export default Chart;
