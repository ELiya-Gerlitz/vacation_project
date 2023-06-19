import { useState, useEffect } from "react";
import VacationModel from "../../../Models/VacationModel";
import VacationService from "../../../Services/VacationService";
import "./ToggleButtonAdmin.css";

interface DataInterface {
    vacationModel : VacationModel
     userId : number
   }

function ToggleButtonAdmin( props : DataInterface): JSX.Element {
      
  const [heartColor, setHeartColor] = useState<boolean>();
  const [followersCount, setFollowersCount] = useState<number>()

  useEffect(()=> {
    setFollowersCount(props.vacationModel.followersCount)
  },[])
  
  // toggle the Follow button + update the db.
  const handleToggle = () => {
    try{
      if(props.vacationModel.isFollowing) {
        setHeartColor(props.vacationModel.isFollowing = false)
              VacationService.unfollow(props.userId, props.vacationModel.vacationId)
              .then(()=> {
                "successfully updated unfollow!"
                setFollowersCount((props.vacationModel.followersCount))
              })
              .catch(err => console.log(err))
      }else {
        setHeartColor(props.vacationModel.isFollowing = true)
        VacationService.follow(props.userId, props.vacationModel.vacationId)
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
        <div className="ToggleButtonAdmin">
			 <div className="ToggleButton">
        <button className={`toggle-button ${props.vacationModel.isFollowing ? 'following' : 'not-following'}`} onClick={handleToggle}>
          <span className="heart" role="img" aria-label="Heart">{props.vacationModel.isFollowing ? '⭕' : '💙'}</span>
          <span className="text">Like {followersCount}</span>
        </button>
    </div>
        </div>
    );
}

export default ToggleButtonAdmin;
