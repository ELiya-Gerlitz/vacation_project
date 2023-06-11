import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton(): JSX.Element {
  
  const [isFollowing, setIsFollowing] = useState(false);
  
  function handleToggle() {
    setIsFollowing(prevState => !prevState);
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

