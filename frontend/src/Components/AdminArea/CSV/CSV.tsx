import React, { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";


// genommen von:  https://stackblitz.com/edit/react-download-csv-from-api-response?file=src%2FHttpClient.js

interface VacationInfo {
  vacations : VacationModel[]
}

function CSV( props: VacationInfo ): JSX.Element {
  const [dataInCSV, setDataInCSV] = useState("");

function handleInsertData()  {
  const data = props.vacations
  const followersCountWithDestination = data.map(v=> (v.destination+ ","+ v.followersCount))
  setDataInCSV(followersCountWithDestination.toString())
}
  return (
      <button onClick={handleInsertData}>
        <a
          href={`data:text/csv;charset=utf-8,${escape("destination,"+"followers"+dataInCSV)}`}
          download="Destination_Followers.csv"
        >
          download CSV file
        </a>
         </button>
  );
}
export default CSV;