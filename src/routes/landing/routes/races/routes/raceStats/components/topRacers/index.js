import React from 'react';

import './topRacers.scss'; 

const TopRacers = (props) => {

  function createRow(racer, i){
    return (
      <tr key={i+1} className={(i%2)?"odd-row":null}>
        <td>{i+1}</td>
        <td>{racer.name}</td>
        <td>{racer.totalRaces}</td>
        <td>{racer.totalFirstPlace}</td>
        <td>{racer.totalTimePlayed}</td>
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
          <th>Rank</th>
          <th>Name</th>
          <th>Races</th>
          <th>Wins</th>
          <th>Time</th>
          <th>Games</th>
        </tr>
      </thead>
      <tbody>
        {props.topRacers.map(createRow)}
      </tbody>
    </table>
    </div>
  );
}

export default TopRacers;