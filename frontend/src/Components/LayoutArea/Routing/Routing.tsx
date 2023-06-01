import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import "./Routing.css";
import Gallery from "../../VacationArea/Gallery/Gallery";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import About from "../About/About";
import DestinationsNavBar from "../../VacationArea/DestinationNavBar/DestinationsNavBar";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Gallery/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/gallery" element={<Gallery/>} />
                <Route path="/auth/register" element={<Register/>} />
                <Route path="/auth/login" element={<Login/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/destinations" element={<DestinationsNavBar/>
} />
            </Routes>
        </div>
    );
}

export default Routing;
