import React, { useEffect, useState } from 'react';
import './ToggleButton.css';
import VacationService from '../../../Services/VacationService';
import VacationModel from '../../../Models/VacationModel';


interface DataInterface {
 vacationModel : VacationModel
}

function ToggleButton( props : DataInterface ): JSX.Element {
  
  const [heartColor, setHeartColor] = useState<number>();
  const [followersCount, setFollowersCount] = useState<number>()

  useEffect(()=> {
    setFollowersCount(props.vacationModel.followersCount)
    setHeartColor(props.vacationModel.isFollowing)
  },[])
  
  // toggle the Follow button + update the db.
  const handleToggle = () => {
    try{
      if(props.vacationModel.isFollowing) {
        setHeartColor(props.vacationModel.isFollowing = 0)
              VacationService.unfollow(props.vacationModel.vacationId)
              .then(()=> {
                "successfully updated unfollow!"
                setFollowersCount((props.vacationModel.followersCount))
              })
              .catch(err => console.log(err))
      }else {
        setHeartColor(props.vacationModel.isFollowing = 1)
        VacationService.follow(props.vacationModel.vacationId)
          .then(()=> {
              "successfully updated follow!"
              setFollowersCount((props.vacationModel.followersCount))

        })
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
          <span className="text">Like {followersCount}</span>
        </button>
    </div>
  );
}

export default ToggleButton;

