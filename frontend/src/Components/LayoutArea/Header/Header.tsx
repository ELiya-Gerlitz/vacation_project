import "./Header.css";

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
					<div className="top-header-right">
						<div className="social-block">
							<ul className="social-list">
								<li><a href=""><i className="fab fa-viber"></i></a></li>
								<li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
								<li><a href=""><i className="fab fa-facebook-square"></i></a></li>
								<li><a href=""><i className="fab fa-facebook-messenger"></i></a></li>
								<li><a href=""><i className="fab fa-twitter"></i></a></li>
								<li><a href=""><i className="fab fa-skype"></i></a></li>
							</ul>
						</div>
						<div className="login-block">
							<a href="">Login /</a>
							<a href="">Register</a>
						</div>
					</div>
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
								<li><a href="#">Home</a></li>
								<li className="menu-parent">Courses
									<ul className="sub-menu">
										<li><a href="#">Child</a></li>
										<li><a href="#">Child</a></li>
										<li className="menu-parent">Child
											<ul className="sub-menu">
												<li><a href="">Grand-child</a></li>
												<li><a href="">Grand-child</a></li>
											</ul>
										</li>
									</ul>
								</li>
								<li className="menu-parent">News
									<ul className="sub-menu">
										<li><a href="#">Child</a></li>
										<li><a href="#">Child</a></li>
									</ul>
								</li>
								<li><a href="">About</a></li>
								<li><a href="">Gallery</a></li>
								<li><a href="">Contact</a></li>
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
