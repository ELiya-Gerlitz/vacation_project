import React, { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";
// genommen von:  https://stackblitz.com/edit/react-download-csv-from-api-response?file=src%2FHttpClient.js

interface VacationInfo {
  vacations : VacationModel[]
}

function CSV( props: VacationInfo ): JSX.Element {
  const [dataInCSV, setDataInCSV] = useState("");

  function handleInsertData() {
    const headerRow = ["Destination", "followersCount"];
    const dataRows = props.vacations.map((v) => [v.destination, v.followersCount]);
  
    const csvContent = [headerRow.join(','), ...dataRows.map((row) => row.join(','))].join('\n');
  
    setDataInCSV(csvContent);
  }
  
  return (
      <button onClick={handleInsertData}>
        <a
          href={`data:text/csv;charset=utf-8,${escape(dataInCSV)}`}
          download="Destination_Followers.csv"
        >
          download CSV file
        </a>
         </button>
  );
}
export default CSV;