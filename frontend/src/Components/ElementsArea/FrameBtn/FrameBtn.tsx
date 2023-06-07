import "./FrameBtn.css";

interface BtnString {
    btnString : string
}

function FrameBtn(props : BtnString): JSX.Element {
    return (
        <div className="FrameBtn">
            <div className="frame">
			  <button className="custom-btn btn-13"> {props.btnString} </button>
            </div>
        </div>
    );
}

export default FrameBtn;
