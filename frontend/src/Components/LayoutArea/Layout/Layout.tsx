import Gallery from "../../VacationArea/Gallery/Gallery";
import Listing from "../../VacationArea/Listing/Listing";
import Banner from "../Banner/Banner";
import CardLayout from "../CardLayout/CardLayout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header/>
            <Banner/>
            <Gallery/>
            <Listing/>
            {/* <CardLayout/> */}
            <Routing/>
            <Footer/>
        </div>
    );
}

export default Layout;
