import React, { useState } from 'react';
import './ToggleButton.css';
import VacationService from '../../../Services/VacationService';


interface DataInterface {
  isFollowing : boolean
  userId : number
  vacationId : number
  
}

function ToggleButton( props : DataInterface): JSX.Element {
  
  const [isFollowing, setIsFollowing] = useState(false);
  
  function handleToggle(e: any) {
    try{
      if(isFollowing){
        setIsFollowing(prevState => !prevState)
        VacationService.unfollow(props.userId, props.vacationId)
        .then(()=> "successfully updated unfollow!")
        .catch(err => console.log(err))

      }else{
        setIsFollowing(prevState => !prevState)
        VacationService.follow(props.userId, props.vacationId)
        .then(()=> "successfully updated follow!")
        .catch(err => console.log(err))
      }
      // VacationService.updateFollower(props.userId)
    
    }catch(err:any){
      console.log(err)
    }
  }

  return (
    <div className="ToggleButton">

<button className={`toggle-button ${isFollowing ? 'following' : 'not-following'}`} onClick={handleToggle}>
      <span className="heart" role="img" aria-label="Heart">{isFollowing ? '❤️' : '🖤'}</span>
      <span className="text">{isFollowing ? 'Unfollow' : 'Follow'}</span>
    </button>
   
    </div>
  );
}

export default ToggleButton;

