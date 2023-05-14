import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			I am layout
            <Header/>
            <Menu/>
            <Banner/>
            <Routing/>
            <Footer/>
        </div>
    );
}

export default Layout;
