import "./CardLayout.css";
import course_pic from "../../../Assets/images/course-pic.jpg"


function CardLayout(): JSX.Element {
    return (
        <div className="CardLayout">
				<div className="page-heading">
			<div className="container">
				<h2>popular courses</h2>
			</div>
		</div>
		{/* <!-- Popular courses End --> */}

        <div className="learn-courses">
			<div className="container">
				<div className="courses">
					<div className="owl-one owl-carousel">
						<div className="box-wrap" itemProp="event" itemScope itemType=" http://schema.org/Course">
							<div className="img-wrap" itemProp="image"><img src={course_pic} alt="courses picture"/></div>
								<a href="#" className="learn-desining-banner" itemProp="name">Learn Web Designing </a>
							<div className="box-body" itemProp="description">
								<p>Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum</p>
								<section itemProp="time">
									<p><span>Duration:</span> 4 Years</p>
									<p><span>class Time:</span> 6am-12am / 11am-5pm</p>
									<p><span>Fee:</span> 4,00,000</p>
								</section>
							</div>
						</div>

						<div className="box-wrap" itemProp="event" itemScope itemType=" http://schema.org/Course">
							<div className="img-wrap"  itemProp="image"><img src={course_pic} alt="courses picture"/></div>
								<a href="#" className="learn-desining-banner" itemProp="name">Learn Web Designing </a>
							<div className="box-body" itemProp="description">
								<p>Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum</p>
								<section itemProp="time">
									<p><span>Duration:</span> 4 Years</p>
									<p><span>Class Time:</span> 6am-12am / 11am-5pm</p>
									<p><span>Fee:</span> 4,00,000</p>
								</section>
							</div>
						</div>

						<div className="box-wrap" itemProp="event" itemScope itemType=" http://schema.org/Course">
							<div className="img-wrap"  itemProp="image"><img src={course_pic} alt="courses picture"/></div>
								<a href="#" className="learn-desining-banner" itemProp="name">Learn Web Designing </a>
							<div className="box-body" itemProp="description">
								<p>Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum</p>
								<section itemProp="time">
									<p><span>Duration:</span> 4 Years</p>
									<p><span>className Time:</span> 6am-12am / 11am-5pm</p>
									<p><span>Fee:</span> 4,00,000</p>
								</section>
							</div>
						</div>

						<div className="box-wrap" itemProp="event" itemScope itemType=" http://schema.org/Course">
							<div className="img-wrap"  itemProp="image"><img src={course_pic} alt="courses picture"/></div>
								<a href="#" className="learn-desining-banner" itemProp="name">Learn Web Designing </a>
							<div className="box-body" itemProp="description">
								<p>Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum Lorem Ipsum lorem ipsum</p>
								<section itemProp="time">
									<p><span>Duration:</span> 4 Years</p>
									<p><span>className Time:</span> 6am-12am / 11am-5pm</p>
									<p><span>Fee:</span> 4,00,000</p>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- Learn courses End --> */}
        </div>
    );
}

export default CardLayout;
