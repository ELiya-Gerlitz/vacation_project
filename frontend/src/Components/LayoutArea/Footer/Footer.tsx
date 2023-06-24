import "./Footer.css";
import uxImage from "../../../Assets/images/ui-ux.jpg"
import PaginationPattern from "../../../Utils/PaginationPattern/PaginationPattern";

function Footer(): JSX.Element {
    return (
        <div className="Footer">

<footer className="page-footer" itemProp="footer" itemScope itemType="http://schema.org/WPFooter">
			<div className="footer-first-section">
				<div className="container">
					<div className="box-wrap" itemProp="about">
						<header>
							<h1>about</h1>
						</header>
						<p>Edulab is a great start for and education. Personnel or oganization to start the online business with 1 click</p>

						<h4><a href="tel:+9779813639131"><i className="fas fa-phone"></i> +977 9813639131</a></h4>
						<h4><a href="mailto:info@educationpro.com"><i className="fas fa-envelope"></i> info@educationpro.com</a></h4>
						<h4><a href=""><i className="fas fa-map-marker-alt"></i>Gongabu, Kathmandu, Nepal</a></h4>
					</div>

					<div className="box-wrap">
						<header>
							<h1>links</h1>
						</header>
						<ul>
							<li><a href="#">Teacher</a></li>
							<li><a href="#">Courses</a></li>
							<li><a href="#">Courses</a></li>
							<li><a href="#">Courses</a></li>
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
						<div className="recent-course-wrap">
							<img src={uxImage} alt="Ui/Ux Designing"/>
							<a href=""><div className="course-name">
								<h3>UI/UX Designer courses</h3>
								<p><span>$50</span> $40</p>
							</div></a>
						</div>
					</div>

					<div className="box-wrap">
						<header>
							<h1>quick contact</h1>
						</header>
						<section className="quick-contact">
							<input type="email" name="email" placeholder="Your Email*"/>
							<textarea placeholder="Type your message*"></textarea>
							<button>send message</button>
						</section>
					</div>

				</div>
			</div>

			{/* <!-- End of box-Wrap --> */}
			<div className="footer-second-section">
				<div className="container">
					<hr className="footer-line"></hr>
					<ul className="social-list">
						<li><a href=""><i className="fab fa-facebook-square"></i></a></li>
						<li><a href=""><i className="fab fa-twitter"></i></a></li>
						<li><a href=""><i className="fab fa-skype"></i></a></li>
						<li><a href=""><i className="fab fa-youtube"></i></a></li>
						<li><a href=""><i className="fab fa-instagram"></i></a></li>
					</ul>
					<hr className="footer-line"></hr>
				</div>
			</div>
			<div className="footer-last-section">
				<div className="container">
					<p>Copyright 2018 &copy; educationpro.com <span> | </span> Theme designed and developed by <a href="https://labtheme.com">Lab Theme</a></p>
				</div>
			</div>
		</footer>
        </div>
    );
}

export default Footer;
