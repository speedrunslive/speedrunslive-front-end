import React from 'react';
import {convertSecondsToTimeString} from '../../../../../../../../utils';

import './globalStats.scss';

const GlobalStats = (props) => {
  return (
    <div className='global-stats'>
      <h1>Global Stats</h1>
      <ul>
        <li>Races: <strong>{props.globalStats.totalRaces}</strong></li>
        <li>Players: <strong>{props.globalStats.totalPlayers}</strong></li>
        <li>Games: <strong>{props.globalStats.totalGames}</strong></li>
        <li>Time Played: <strong>{convertSecondsToTimeString(props.globalStats.totalTimePlayed)}</strong></li>
      </ul>
    </div>
  );
}

export default GlobalStats;