import "./PageNotFound.css";
import pNotFound from "../../../Assets/images/pageNotFound.jpg"

function PageNotFound(): JSX.Element {
    return (
        <div className="formLayout form-component-wrapper">
                <div className="image-sectionOfForm">
                    <img src={pNotFound} alt="page not found" className="imageOfForm" />
                </div>
                
                <div className="form-section-right">
                    <span>404</span>  <br></br><span>Page Not Found</span>
                </div>
        </div>
    );
}

export default PageNotFound;