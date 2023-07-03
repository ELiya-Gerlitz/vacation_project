import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

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
