import Gallery from "../../VacationArea/Gallery/Gallery";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Routing from "../Routing/Routing";
import "./Layout.css";
import DestinationsNavBar from "../../VacationArea/DestinationNavBar/DestinationsNavBar";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
            <Header/>
            </header>
            
            <Banner/>
            <Main/>
            
            <Footer/>
        </div>
    );
}

export default Layout;
