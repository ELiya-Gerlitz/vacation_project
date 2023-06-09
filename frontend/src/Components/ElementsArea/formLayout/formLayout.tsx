import "./formLayout.css";
import surfing from "../../../Assets/images/young-man-with-kitesurf-board.jpg"
import { ComponentElement } from "react";

interface ComponentProps {
    imageSrc: string;
    formContent: React.ReactNode;
  }


function FormLayout({ imageSrc, formContent }: ComponentProps): JSX.Element {
    return (
        <div className="formLayout form-component-wrapper">
            <div className="image-sectionOfForm">
                <img src={imageSrc} alt="Embedded Image" className="imageOfForm" />
            </div>
            <div className="form-section-right">
                {/* <form> from another component embeded below */}
                {formContent}
                {/* </form> */}
            </div>
        </div>
    );
}

export default FormLayout;
