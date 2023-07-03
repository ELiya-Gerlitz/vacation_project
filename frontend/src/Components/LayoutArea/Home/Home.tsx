import "./Home.css";
import Eilat_with_fam from "../../../Assets/images/eilat.jpg"
import wald1 from "../../../Assets/images/wald1.jpg"
import wald3 from "../../../Assets/images/wald3.jpg"

function Home(): JSX.Element {
    return (
        <div className="Home">
            <h2>Home</h2>
            {/* <img src={Eilat_with_fam}/> */}
            {/* <img src={wald1}/> */}
            <img src={wald3}/>
        </div>
    );
}

export default Home;
