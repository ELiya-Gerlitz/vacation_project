import React, { useState } from 'react';
import './ToggleButton.css';
import VacationService from '../../../Services/VacationService';
import VacationModel from '../../../Models/VacationModel';


interface DataInterface {
 vacationModel : VacationModel
  userId : number
  
}

function ToggleButton( props : DataInterface): JSX.Element {
  
  const [heartColor, setHeartColor] = useState<boolean>();
  
  const handleToggle = () => {
    try{
      if( props.vacationModel.isFollowing) {
        setHeartColor(props.vacationModel.isFollowing = false)
              VacationService.unfollow(props.userId, props.vacationModel.vacationId)
              .then(()=> "successfully updated unfollow!")
              .catch(err => console.log(err))
      }else {
        setHeartColor(props.vacationModel.isFollowing = true)
        VacationService.follow(props.userId, props.vacationModel.vacationId)
        .then(()=> "successfully updated follow!")
        .catch(err => console.log(err))
      }    
    }catch(err:any){
      console.log(err)
    }
  }
  return (
    <div className="ToggleButton">
        <button className={`toggle-button ${props.vacationModel.isFollowing ? 'following' : 'not-following'}`} onClick={handleToggle}>
          <span className="heart" role="img" aria-label="Heart">{props.vacationModel.isFollowing ? '❤️' : '🖤'}</span>
          <span className="text">{props.vacationModel.isFollowing ? 'Unfollow' : 'Follow'}</span>
        </button>
    </div>
  );
}

export default ToggleButton;

