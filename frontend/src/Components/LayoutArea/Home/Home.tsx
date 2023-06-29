import "./Home.css";
import Eilat_with_fam from "../../../Assets/images/eilat.jpg"
import wald2 from "../../../Assets/image/wald2.jpg"
import wald1 from "../../../Assets/image/wald1.jpg"
// import wald2 from "../../../Assets/images/"


function Home(): JSX.Element {

    return (
        <div className="Home">
		<h2>Home</h2>
        <img src={Eilat_with_fam}/>
            
        </div>
    );
}

export default Home;
