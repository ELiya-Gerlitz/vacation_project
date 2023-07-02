import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./Routing.css";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import About from "../About/About";
import Logout from "../../AuthArea/Logout/Logout";
import DestinationFilters from "../../VacationArea/DestinationFilters/DestinationFilters";
import AddVacation from "../../AdminArea/AddVacation/AddVacation";
import EditVacation from "../../AdminArea/EditVacation/EditVacation";
import ReportsImplementation from "../../AdminArea/ReportsImplementation/ReportsImplementation";
import PageNotFound from "../PageNotFound/PageNotFound";
// import Reports from "../../AdminArea/Reports/Reports";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/auth/register" element={<Register/>} />
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/destinations" element={<DestinationFilters/>} />
                <Route path="/Admin/add-vacation" element={<AddVacation/>} />
                <Route path="/Admin/update-vacation/:vacationId" element={<EditVacation/>} />
                <Route path="/Admin/reports" element={<ReportsImplementation/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </div>
    );
}

export default Routing;
