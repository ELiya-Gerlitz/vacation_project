import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
				<section className="about-upper-section" itemProp="mainContentofPage">
			<div className="container">
				<article className="who-we-are">
					<h2 className="top-heading">who we are</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex</p>
				</article>
				<div className="our-story">
					<h2 className="top-heading">our story</h2>
					<ul>
						<li><i className="fas fa-chalkboard-teacher"></i> <a href="#">60+ certified teachers</a></li>
						<li><i className="fas fa-graduation-cap"></i> <a href="#">600+ students enrolled</a></li>
						<li><i className="fas fa-book-open"></i> <a href="#">50+ courses completed</a></li>
						<li><i className="fas fa-users"></i> <a href="#">10000+ foreign followers</a></li>

						{/* <!-- For None link use below --> */}
						{/* <!--  */}
                        <li><i className="fas fa-chalkboard-teacher"></i> <p>60+ certified teachers</p></li>
						<li><i className="fas fa-graduation-cap"></i>  <p>600+ students enrolled</p></li>
						<li><i className="fas fa-book-open"></i>  <p>50+ courses completed</p></li>
						<li><i className="fas fa-users"></i>  <p>10000+ foreign followers</p></li>
                         {/* --> */}
					</ul>
				</div>
			</div>
		</section>

		<section className="team-members" itemProp="contributor">
			<div className="container">
				<h2 className="top-heading">meet our team</h2>
				<article className="developer-grid">
					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>

					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>

					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>

					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>

					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>

					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>

					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>

					<div className="developer-wrap">
						<img src="images/developer-img.jpg" alt="developer images"/>
						<h3>Bibek Basnet</h3>
						<p>Web Developer</p>
						<ul>
							<li><a href=""><i className="fab fa-facebook-f"></i></a></li>
							<li><a href=""><i className="fab fa-instagram"></i></a></li>
							<li><a href=""><i className="fab fa-twitter"></i></a></li>
							<li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
						</ul>
					</div>
				</article>
			</div>
		</section>
		{/* <!-- Team Members Closed  --> */}

        <section className="what-other-say">
			<div className="container">
				<div className="wrap-others-say">
					<h1>what other say about us</h1>
					<div id="carousel" className="flexslider">
						<ul className="slides">
							<li className="img-wrap">
								<figure>
									<img src="images/review-big-img.jpg" alt="Person Image"/>
									<figcaption className="hidden">
										<h3>Sagar Sapkota</h3>
										<h4>UI Designer</h4>
									</figcaption>
								</figure>
							</li>
							<li className="img-wrap">
								<figure>
									<img src="images/review-big-img.jpg" alt="Person Image"/>
									<figcaption className="fig">
										<h3 className="hidden">Sagar Sapkota</h3>
										<h4 className="hidden">UI Designer</h4>
									</figcaption>
								</figure>
							</li>
						</ul>
					</div>

					<div id="slider" className="flexslider">
	  					<ul className="slides">
						    <li>
						    	<div className="testimonial-holder">
						    		<strong className="title">Amazing service and amazing team. Thank you!</strong>
						    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique fer-<br/>mentum mauris, non tincidunt arcu venenatis vel. Nam et vehicula turpis. Ut nunc purus, mattis eu odio a, egestas facilisis nibh. Mauris magna diam, iaculis vitae sapien non, pharetra congue purus. Phasellus in odio purus.</p>
						    		<div className="rateYo"></div>
						    	</div>
						    </li>
						    <li>
						    	<div className="testimonial-holder">
						    		<strong className="title">Very Satisfaied with their service</strong>
						    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique fer-<br/>mentum mauris, non tincidunt arcu venenatis vel. Nam et vehicula turpis. Ut nunc purus, mattis eu odio a, egestas facilisis nibh. Mauris magna diam, iaculis vitae sapien non, pharetra congue purus. Phasellus in odio purus.</p>
						    		<div className="rateYo"></div>
						    	</div>
						    </li>
						    <li>
						    	<div className="testimonial-holder">
						    		<strong className="title">Quick, efficient and meets your expectations</strong>
						    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique fer-<br/>mentum mauris, non tincidunt arcu venenatis vel. Nam et vehicula turpis. Ut nunc purus, mattis eu odio a, egestas facilisis nibh. Mauris magna diam, iaculis vitae sapien non, pharetra congue purus. Phasellus in odio purus.</p>
						    		<div className="rateYo"></div>
						    	</div>
						    </li>	 
	  					</ul>
					</div>
               </div>
			</div>
           </section>

        </div>
    );
}

export default About;
