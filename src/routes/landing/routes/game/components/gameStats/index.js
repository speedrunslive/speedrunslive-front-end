import React from 'react';
import {convertSecondsToTimeString} from '../../../../../../utils';
import {Link} from 'react-router';

import './gameStats.scss';

const GameStats = (props) => {
  const {game, stats} = props;
  
  if (!game || !stats) return null;

  function renderLargestRace() {
    return (
      <Link to={`/races/result/${stats.largestRace}`}>{stats.largestRaceSize}</Link>
    );
  }

  return (
    <div className='game-stats'>
      <h1>Stats</h1>
      <ul>
        <li>Abbreviation: <strong>{game.abbrev}</strong></li>
        <li>Races: <strong>{stats.totalRaces}</strong></li>
        <li>Players: <strong>{stats.totalPlayers}</strong></li>
        <li>Time Played: <strong>{convertSecondsToTimeString(stats.totalTimePlayed)}</strong></li>
        <li>Largest Race: <strong>{renderLargestRace()}</strong></li>
      </ul>
    </div>
  );
}

export default GameStats;

// game {id: 326, name: "The Magical Quest Starring Mickey Mouse", abbrev: "mmq", popularity: 36, popularityrank: 27}
// stats {totalRaces: 92, totalPlayers: 79, largestRace: 7792, largestRaceSize: 7, totalRaceTime: 222144, totalRaceTime, totalTimePlayed}