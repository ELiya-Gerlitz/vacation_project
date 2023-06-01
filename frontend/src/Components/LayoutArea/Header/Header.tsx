import { NavLink } from "react-router-dom";
import "./Header.css";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";

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
			<div className="main-header">
				<div className="container">
					<div className="logo-wrap" itemProp="logo">
						<img src="images/site-logo.jpg" alt="Logo Image"/>
						{/* <!-- <h1>Education</h1> --> */}
					</div>
					<div className="nav-wrap">
						<nav className="nav-desktop">
							<ul className="menu-list">
								<li><NavLink to="/home">Home</NavLink></li>
								<li><NavLink to="/destinations">Destinations</NavLink></li>
								<li><NavLink to="/gallery">Gallery</NavLink></li>
								<li className="menu-parent">Courses
									<ul className="sub-menu">
										<li><NavLink to="#">Child</NavLink></li>
										<li><NavLink to="#">Child</NavLink></li>
										<li className="menu-parent">Child
											<ul className="sub-menu">
												<li><NavLink to="">Grand-child</NavLink></li>
												<li><NavLink to="">Grand-child</NavLink></li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="menu-parent">News
									<ul className="sub-menu">
										<li><NavLink to="#">Child</NavLink></li>
										<li><NavLink to="#">Child</NavLink></li>
									</ul>
								</li>
								<li><NavLink to="/about">About</NavLink></li>
								<li><NavLink to="">Contact</NavLink></li>
							</ul>
						</nav>
						<div id="bar">
							<i className="fas fa-bars"></i>
						</div>
						<div id="close">
							<i className="fas fa-times"></i>
						</div>
					</div>
				</div>
			</div>
		</header>
		{/* <!-- Header Close --> */}
        </div>
    );
}

export default Header;
