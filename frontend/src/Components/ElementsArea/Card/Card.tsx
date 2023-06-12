import { useState } from "react";
import VacationModel from "../../../Models/VacationModel";
import "./Card.css";
import "./Card.scss";
import appConfig from "../../../Utils/AppConfig";
import Heart from "../Heart/Heart";
import ToggleButton from "../ToggleButton/ToggleButton";

interface CardContents{
    cardContents : VacationModel
}

function Card( props : CardContents ): JSX.Element {
    return (
    <div className="Card">
        <br></br>
        <br></br>
        <br></br>
        <Heart/>
        <div className="card-hover">
              <div className="card-hover__content">
                      <h3 className="card-hover__title">
                        Make your <span>{props.cardContents.destination}</span> You are following Yes/No  {props.cardContents.isFollowing ? <span>💗</span>  : <span>🤍</span>}   <div className={props.cardContents.isFollowing ? "active" : ""}></div>
                      </h3>
                      {/* <ToggleButton/> */}
                      <p className="card-hover__text"></p>
                      <a href="#" className="card-hover__link">
                          <span> How Many Folloers follow this vacation {props.cardContents.followersCount}</span>
                          <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                          </svg>        
                      </a>
              </div>
                <div className="card-hover__extra">
                      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
                </div>
            <img src={appConfig.imgUrl +  props.cardContents.imageName} alt=""/>
        </div>
    </div>
    );
}

export default Card;
