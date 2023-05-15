import Gallery from "../../VacationArea/Gallery/Gallery";
import Banner from "../Banner/Banner";
import CardLayout from "../CardLayout/CardLayout";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header/>
            <Banner/>
            <Menu/>
            <Gallery/>
            {/* <CardLayout/> */}
            <Routing/>
            <Footer/>
        </div>
    );
}

export default Layout;
