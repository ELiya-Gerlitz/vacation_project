import "./Banner.css";
import page_banner from "../../../Assets/images/page-banner-verkleinert.jpg"
import HeaderMenuTrial from "../HeaderMenuTrial/HeaderMenuTrial";

function Banner(): JSX.Element {
    return (
        <div className="Banner banner">
			<div className="owl-four owl-carousel" itemProp="image">
				<img src={page_banner} alt="Image of Bannner"/>
			</div>

			<div className="container" itemProp="description">
				<h1>welcome to vacation pro</h1>
				<h3>With our advanced search feature you can now find the trips for you...</h3>
			</div>

			<div className="bufferZone">
			<HeaderMenuTrial/>
			</div>
        </div>
    );
}

export default Banner;
