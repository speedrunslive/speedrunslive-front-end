import React from 'react';

import './toggleUnrankedLeaderboard.scss';

/**
 * ToggleUnrankedLeaderboard - specialized div which displays input props
 * example:
 * {status} Unranked [{count}]
 * 
 * @param {string} status 
 * @param {number} count 
 * @returns 
 */
const ToggleUnrankedLeaderboard = (props) => {
  return (
    <div className='toggle-unranked-leaderboard'>{props.status} Unranked [{props.count}]</div>
  );
}

export default ToggleUnrankedLeaderboard;