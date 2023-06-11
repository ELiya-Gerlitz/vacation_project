import { NavLink } from "react-router-dom";
import "./Header.css";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import MenuHeader from "../MenuHeader/MenuHeader";
import HeaderMenuTrial from "../../ElementsArea/HeaderMenuTrial/HeaderMenuTrial";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <header className="site-header">
			<div className="top-header">
				<div className="container">
					<div className="top-header-left">
						<div className="top-header-block">
							<a href="mailto:info@educationpro.com" itemProp="email"><i className="fas fa-envelope"></i> info@educationpro.com</a>
						</div>
						<div className="top-header-block">
							<a href="tel:+9779813639131" itemProp="telephone"><i className="fas fa-phone"></i> +977 9813639131</a>
						</div>
					</div>
					{/*  className="top header right" -das ist geschrieben in der AuthMenu Component*/}
						<AuthMenu/>
					
				</div>
			</div>
			{/* <!-- Top header Close --> */}
			{/* <MenuHeader/> */}
			<HeaderMenuTrial/>





			<div className="nav">
      <ul>
        <li className="home"><a href="#">Home</a></li>
        <li className="tutorials"><a className="active" href="#">Tutorials</a></li>
        <li className="about"><a href="#">About</a></li>
        <li className="news"><a href="#">Newsletter</a></li>
        <li className="contact"><a href="#">Contact</a></li>
      </ul>
    </div>





			
		</header>
		{/* <!-- Header Close --> */}
        </div>
    );
}

export default Header;
