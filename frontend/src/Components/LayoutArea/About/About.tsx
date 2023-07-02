import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
				<section className="about-upper-section" itemProp="mainContentofPage">
			<div className="container">
				<article className="who-we-are">
					<h2 className="top-heading">who we are </h2>
					<h2 className="top-heading">About us: </h2>
				
				
				</article>
				
			</div>
		</section>

		<section className="team-members" itemProp="contributor">
			<div className="container">
				<h2 className="top-heading">meet our team</h2>
				<article className="developer-grid">
					
				</article>
			</div>
		</section>


        </div>
    );
}

export default About;
