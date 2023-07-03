import "./Footer.css";
import uxImage from "../../../Assets/images/ui-ux.jpg"
import github_logo from "../../../Assets/images/github-logo.png"
import John_bryce_logo from "../../../Assets/images/John_bryce_logo.jpg"

function Footer(): JSX.Element {
    return (
        <div className="Footer">

<footer className="page-footer" itemProp="footer" itemScope itemType="http://schema.org/WPFooter">
	<hr></hr>
			<div className="footer-first-section">
				<div className="container">
					<div className="box-wrap" itemProp="about">
						<header>
							<h1>about</h1>
						</header>
						<h4><a href="tel:+9779813639131"><i className="fas fa-phone"></i>Contact us : 054-8443865</a></h4>
						<h4><a href="mailto:info@vacationpro.com"><i className="fas fa-envelope"></i> tent84e@gmail.com</a></h4>
						<h4><a href=""><i className="fas fa-map-marker-alt"></i>Jerusalem, Israel</a></h4>
					</div>

					<div className="box-wrap">
						<header>
							<h1>links</h1>
						</header>
						<ul>
							<li><a href="https://github.com/ELiya-Gerlitz/vacation_project" target="_blank"><img src={github_logo} className="gitHubLogo"/>  My VacationPro in GitHub</a></li>
							<li><a href="https://github.com/ELiya-Gerlitz" target="_blank"><img src={github_logo} className="gitHubLogo"/>  My repositories in GitHub</a></li>
						
						</ul>
					</div>

					<div className="box-wrap">
						<header>
							<h1>recent courses</h1>
						</header>
						<div className="recent-course-wrap">
						<a href="https://www.johnbryce.co.il/" target="_blank">
							<img src={John_bryce_logo} alt="Ui/Ux Designing"/>
							
								<div className="course-name">
								<br></br>
								<h3>MERN Stack Development</h3>
								<p>at John-Bryce Academy</p>
							</div>
							</a>
						</div>
					</div>
				</div>
			</div>
	
			<div className="footer-last-section">
				<div className="container">
					<p>Copyright 2023 &copy; Eliya Gerlitz <span> | </span>Full-Stack Web Developer </p>
				</div>
			</div>
		</footer>
        </div>
    );
}

export default Footer;
