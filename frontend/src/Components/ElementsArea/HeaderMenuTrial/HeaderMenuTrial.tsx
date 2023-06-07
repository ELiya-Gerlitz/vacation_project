import { NavLink } from "react-router-dom";
import "./HeaderMenuTrial.css";

function HeaderMenuTrial(): JSX.Element {
    return (
        <div className="HeaderMenuTrial">




<div className="container gallery-section2">
		<div id="filters" className="button-group">       
			<button className="button" ><NavLink to="/home">Home</NavLink></button>
			  <button className="button" ><NavLink to="/destinations">Destinations</NavLink></button>
			  <button className="button" ><NavLink to="/gallery">Gallery</NavLink></button>
			  <button className="button" ><NavLink to="/about">About</NavLink></button>
			  <button className="button" ><NavLink to="#">Contact</NavLink></button>
			  {/* <button className="button" >marketing</button> */}
		</div>
	</div>
			
        </div>
    );
}

export default HeaderMenuTrial;
