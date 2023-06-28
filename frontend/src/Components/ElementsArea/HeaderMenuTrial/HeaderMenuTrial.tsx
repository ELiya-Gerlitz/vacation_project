import { NavLink, useNavigate } from "react-router-dom";
import "./HeaderMenuTrial.css";
import { AuthStore } from "../../../Redux/AuthState";

function HeaderMenuTrial(): JSX.Element {
	const navigate = useNavigate()

	const handleClick = () => {
		if(AuthStore.getState().token){
			navigate("/destinations")
		}else{
			alert("you Must be logged in in order to watch the vacations!")
			navigate("/auth/login")
		}
	}
    return (
        <div className="HeaderMenuTrial">
			<div className="gallery-section2">
					<div id="filters" className="button-group">       
						<button className="button" ><NavLink to="/home">Home</NavLink></button>
						<button className="button" onClick={handleClick}><NavLink to="#">Destinations</NavLink></button>
						{/* <button className="button" ><NavLink to="/gallery">Gallery</NavLink></button> */}
						<button className="button" ><NavLink to="/about">About</NavLink></button>
						{/* <button className="button" ><NavLink to="#">Contact</NavLink></button> */}
					</div>
				</div>
        </div>
    );
}
export default HeaderMenuTrial;
