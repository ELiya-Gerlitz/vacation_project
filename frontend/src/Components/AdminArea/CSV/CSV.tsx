import React, { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";
// genommen von:  https://stackblitz.com/edit/react-download-csv-from-api-response?file=src%2FHttpClient.js

interface VacationInfo {
  vacations : VacationModel[]
}

function CSV( props: VacationInfo ): JSX.Element {
  const [dataInCSV, setDataInCSV] = useState("");

function handleInsertData()  {
    const row = props.vacations.map((v)=> {
    const dataRow = [v.destination, v.followersCount]
    return dataRow.join(',')

  })
  setDataInCSV(row.join('\n')) 
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