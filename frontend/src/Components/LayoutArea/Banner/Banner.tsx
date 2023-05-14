import "./Banner.css";
import page_banner from "../../../Assets/images/page-banner.jpg"
 


function Banner(): JSX.Element {
    return (
        <div className="Banner">
            <div className="banner">
			<div className="owl-four owl-carousel" itemProp="image">
				<img src={page_banner} alt="Image of Bannner"/>
				<img src="images/page-banner2.jpg" alt="Image of Bannner"/>
				<img src="images/page-banner3.jpg" alt="Image of Bannner"/>
			</div>
			<div className="container" itemProp="description">
				<h1>welcome to vacation pro</h1>
				<h3>With our advance search feature you can now find the trips for you...</h3>
			</div>
			 <div id="owl-four-nav" className="owl-nav"></div>
		</div>
		{/* <!-- <div className="banner"> */}
        </div>
    );
}

export default Banner;
