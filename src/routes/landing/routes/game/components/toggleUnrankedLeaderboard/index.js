import React from 'react';

import './toggleUnrankedLeaderboard.scss';

const ToggleUnrankedLeaderboard = (props) => {
  return (
    <div className='toggle-unranked-leaderboard'>{props.status} Unranked [{props.count}]</div>
  );
}

export default ToggleUnrankedLeaderboard;