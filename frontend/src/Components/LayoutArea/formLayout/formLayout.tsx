import "./formLayout.css";

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
                {formContent}
            </div>
        </div>
    );
}

export default FormLayout;
