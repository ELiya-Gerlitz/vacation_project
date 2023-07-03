import "./Card3D.css";
import VacationModel from "../../../Models/VacationModel";
import appConfig from "../../../Utils/AppConfig";
import ToggleButton from "../ToggleButton/ToggleButton";
import UserModel from "../../../Models/UserModel";
import ToggleButtonAdmin from "../ToggleButtonAdmin/ToggleButtonAdmin";
import tripadvisor_owl_PNG from "../../../Assets/images/tripadvisor_owl_PNG.png"
import EventIcon from '@mui/icons-material/Event';
import { NavLink } from "react-router-dom";

interface CardContents{
  vacationModel : VacationModel
  user : UserModel
}

function Card3D( props : CardContents): JSX.Element {
  const num = Math.floor(Math.random() * (900 - 200) ) + 200
    return (
        <div className="Card3D">
            <article>
                <div className="article-wrapper">
                  <figure>
                          <div className="toggleController">
                          <img className="tripadvisorCircles" src={tripadvisor_owl_PNG} /> 
                          <span className="tripadvisorReviewsText">{num}&nbsp;TripAdvisor Reviews</span>
                          {props.user.role === "Admin"? <ToggleButtonAdmin vacationModel={props.vacationModel} /> : <ToggleButton vacationModel={props.vacationModel} />}
                          </div> 
                          <div className="image-container"> 
                          <div className="image-overlay"></div>
                          <img src={appConfig.imgUrl + props.vacationModel.imageName} alt="" />
                          </div>
                  </figure>
                  <div className="article-body">
                    <h2>   $ {props.vacationModel.price} |  &nbsp;{props.vacationModel.destination}</h2>
                    {/* <hr></hr> */}
                    <p>
                    <EventIcon/> &nbsp; {new Date(props.vacationModel.startingDate).toLocaleDateString()} &nbsp; - &nbsp; {new Date(props.vacationModel.endingDate).toLocaleDateString()}
                    </p>
                    <p>
                    {props.vacationModel.description.substring(0, 100)}... 
                    </p>
                    <NavLink to="#" className="read-more">
                      Take Me There <span className="sr-only">about this is some title</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </NavLink>
                  </div>
                </div>
              </article>
          </div>
    );
}

export default Card3D;
