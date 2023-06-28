import { useState } from "react";
import VacationModel from "../../../Models/VacationModel";
import { Fab } from "@mui/material";
// genommen von:  https://stackblitz.com/edit/react-download-csv-from-api-response?file=src%2FHttpClient.js

interface VacationInfo {
  vacations : VacationModel[]
}

function CSV( props: VacationInfo ): JSX.Element {
  const [dataInCSV, setDataInCSV] = useState("");

  function handleInsertData() {
    const headerRow = ["Destination", "followers"];
    const dataRows = props.vacations.map((v) => [v.destination, v.followersCount]);
    const csvContent = [headerRow.join(','), ...dataRows.map((row) => row.join(','))].join('\n');
  
    setDataInCSV(csvContent);
  }
  
  return (
    <div className="CSV">
      <Fab variant="extended" onClick={handleInsertData}>
        <a
          href={`data:text/csv;charset=utf-8,${escape(dataInCSV)}`}
          download="Destination_Followers.csv"
        >
        Download CSV file        
        </a>
        </Fab>
        </div>
  );
}
export default CSV;