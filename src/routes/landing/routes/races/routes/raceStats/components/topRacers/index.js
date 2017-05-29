import React from 'react';
import * as sort from '../../containers/topRacers/constants';
import {convertSecondsToTimeString} from '../../../../../../../../utils';

import './topRacers.scss'; 

const TopRacers = (props) => {

  function createRow(racer, i){
    return (
      <tr key={i+1} className={(i%2)?"odd-row":null}>
        <td>{i+1}</td>
        <td>{racer.name}</td>
        <td>{racer.totalRaces}</td>
        <td>{racer.totalFirstPlace}</td>
        <td>{convertSecondsToTimeString(racer.totalTimePlayed)}</td>
        <td>{racer.totalGames}</td>
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