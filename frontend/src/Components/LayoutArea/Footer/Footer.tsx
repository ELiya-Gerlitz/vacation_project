import "./Footer.css";
import uxImage from "../../../Assets/images/ui-ux.jpg"

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
						<h4><a href="tel:+9779813639131"><i className="fas fa-phone"></i> 054-8443865</a></h4>
						<h4><a href="mailto:info@vacationpro.com"><i className="fas fa-envelope"></i> info@vacationpro.com</a></h4>
						<h4><a href=""><i className="fas fa-map-marker-alt"></i>Jerusalem, Israel</a></h4>
					</div>

					<div className="box-wrap">
						<header>
							<h1>links</h1>
						</header>
						<ul>
							<li><a href="#">Teacher</a></li>
							<li><a href="#">Courses</a></li>
							<li><a href="#">Courses</a></li>
						</ul>
					</div>

					<div className="box-wrap">
						<header>
							<h1>recent courses</h1>
						</header>
						<div className="recent-course-wrap">
							<img src={uxImage} alt="Ui/Ux Designing"/>
							<a href=""><div className="course-name">
								<h3>UI/UX Designer courses</h3>
								<p><span>$50</span> $40</p>
							</div></a>
						</div>
					</div>
				</div>
			</div>
	
			<div className="footer-last-section">
				<div className="container">
					<p>Copyright 2023 &copy; Eliya Gerlitz <span> | </span> Web Developer </p>
				</div>
			</div>
		</footer>
        </div>
    );
}

export default Footer;
