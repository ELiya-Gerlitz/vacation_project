import "./Header.css";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";
import TravelLogo from  "../../../Assets/images/logo_PNG.png"

function Header(): JSX.Element {
    return (
        <div className="Header">
            <header className="site-header">
			<div className="top-header">
				<div className="container">
				<img src={TravelLogo} className="travelLogo"/>

					<div className="top-header-left">
						<div className="top-header-block">
							<a href="mailto:info@vacationpro.com" itemProp="email"><i className="fas fa-envelope"></i> info@vacationpro.com</a>
						</div>
						<div className="top-header-block">
							<a href="tel:+9779813639131" itemProp="telephone"><i className="fas fa-phone"></i> +977 9813639131</a>
						</div>
					</div>
					{/*  className="top header right" -das ist geschrieben in der AuthMenu Component*/}
					<AuthMenu/>
				</div>
			</div>
			<div className="headerWhiteBuffer"></div>
		</header>
        </div>
    );
}
export default Header;
