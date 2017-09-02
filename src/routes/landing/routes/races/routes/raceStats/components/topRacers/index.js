import React from 'react';
import * as sort from '../../containers/topRacers/constants';
import {Link} from 'react-router';
import {convertSecondsToTimeString} from '../../../../../../../../utils';

import './topRacers.scss'; 

const TopRacers = (props) => {

  function createRow(player, i){
    return (
      <tr key={i+1}>
        <td>{i+1}</td>
        <td><Link to={`/profile/${player.name}`}>{player.name}</Link></td>
        <td>{player.totalRaces}</td>
        <td>{player.totalFirstPlace}</td>
        <td>{convertSecondsToTimeString(player.totalTimePlayed)}</td>
        <td>{player.totalGames}</td>
      </tr>
    );
  }

  return (
    <div className="top-racers">
      <h1>Top Racers</h1>
    <table>
      <thead>
        <tr className="leaderboard">
          <th className='rank'>Rank</th>
          <th className='name'>Name</th>
          <th className='races clickable' onClick={() => props.onHeaderClick(sort.RACES_SORT)}>Races</th>
          <th className='wins clickable' onClick={() => props.onHeaderClick(sort.WINS_SORT)}>Wins</th>
          <th className='time clickable' onClick={() => props.onHeaderClick(sort.TIME_SORT)}>Time</th>
          <th className='games clickable' onClick={() => props.onHeaderClick(sort.GAMES_SORT)}>Games</th>
        </tr>
      </thead>
      <tbody>
        {props.racers.map(createRow)}
      </tbody>
    </table>
    </div>
  );
}

export default TopRacers;