import "./Card3D.css";
import Zug from "../../../Assets/images/Zug.jpg"
import VacationModel from "../../../Models/VacationModel";
import appConfig from "../../../Utils/AppConfig";
import ToggleButton from "../ToggleButton/ToggleButton";
import UserModel from "../../../Models/UserModel";
import ToggleButtonAdmin from "../ToggleButtonAdmin/ToggleButtonAdmin";

interface CardContents{
  vacationModel : VacationModel
  user : UserModel
  
}

function Card3D( props : CardContents): JSX.Element {
    return (
        <div className="Card3D">
            <article>
                <div className="article-wrapper">
                  <figure>
                          <div className="toggleController">
                            {props.user.role === "Admin"? <ToggleButtonAdmin vacationModel={props.vacationModel} /> : <ToggleButton vacationModel={props.vacationModel} />}
                          </div>  
                    <img src={appConfig.imgUrl + props.vacationModel.imageName} alt="" />
                  </figure>
                  <div className="article-body">
                    <h2>This is some title &nbsp;{props.vacationModel.vacationId}&nbsp;{props.vacationModel.destination}</h2>
                    <p>
                      {props.vacationModel.description} | {new Date(props.vacationModel.startingDate).toLocaleDateString()} 
                    </p>
                    <p>
                    {props.vacationModel.description} | {new Date(props.vacationModel.endingDate).toLocaleDateString()} 
                    </p>
                    <a href="#" className="read-more">
                      Read more <span className="sr-only">about this is some title</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
          </div>
    );
}

export default Card3D;
