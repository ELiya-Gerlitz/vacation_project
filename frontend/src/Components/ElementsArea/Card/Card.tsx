import { useState } from "react";
import VacationModel from "../../../Models/VacationModel";
import "./Card.css";
import "./Card.scss";

interface CardContents{
    cardContents : VacationModel
}

function Card( props : CardContents ): JSX.Element {
    return (
        <div className="Card">
<div className="card-hover">
    <div className="card-hover__content">
      <h3 className="card-hover__title">
        Make your <span>{props.cardContents.destination}</span> You are following Yes/No  {props.cardContents.isFollowing ? <span>💗</span> : <span>🤍</span>}
      </h3>
      <p className="card-hover__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia quisquam doloremque nostrum laboriosam, blanditiis libero corporis nulla a aut?</p>
      <a href="#" className="card-hover__link">
        <span>Learn How</span>
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>        
      </a>
    </div>
    <div className="card-hover__extra">
      <h4>Learn <span>now</span> and get <span>40%</span> discount!</h4>
    </div>
    <img src="https://img.freepik.com/premium-photo/matterhorn-with-stellisee-lake-zermatt_1339-38355.jpg?size=626&ext=jpg&uid=R44753440&ga=GA1.2.1103567159.1597658053&semt=sph" alt=""/>
  </div>
        </div>
    );
}

export default Card;
