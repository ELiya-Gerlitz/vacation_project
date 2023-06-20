import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./Routing.css";
import Gallery from "../../VacationArea/Gallery/Gallery";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import About from "../About/About";
import DestinationsNavBar from "../../VacationArea/DestinationNavBar/DestinationsNavBar";
import Logout from "../../AuthArea/Logout/Logout";
import DestinationFilters from "../../VacationArea/DestinationFilters/DestinationFilters";
import AddVacation from "../../AdminArea/AddVacation/AddVacation";
import EditVacation from "../../AdminArea/EditVacation/EditVacation";
// import DestinationFilters from "../../VacationArea/DestinationFilters/DestinationFilters";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/auth/register" element={<Register/>} />
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/logout" element={<Logout/>} />
                <Route path="/destinations" element={<DestinationFilters/>} />
                <Route path="/Admin/add-vacation" element={<AddVacation/>} />
                <Route path="/Admin/update-vacation/:vacationId" element={<EditVacation/>} />
            </Routes>
        </div>
    );
}

export default Routing;
