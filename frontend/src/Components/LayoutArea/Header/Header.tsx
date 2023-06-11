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
		</header>
		{/* <!-- Header Close --> */}
        </div>
    );
}

export default Header;
