import React from 'react';
import {convertTimestampToDateString, convertSecondsToTimeString, addOrdinalIndicator} from '../../../../../../utils';
import {Link} from 'react-router';

import './playerStats.scss';


/**
 * PlayerStats - Display race stats for racer
 * 
 * @param {string} playerStats.game - current game to display in header
 * @param {any} playerStats.stats - stats to display
 * @param {Object} playerStats.player - unused, but currently attached to state object.  
 */
const PlayerStats = (props) => {
  const {game, stats} = props.playerStats;

  function renderHeader(game) {
    return (
    <h1>Stats <span className='dull'> » </span> {game.name}</h1>
    );
  }

  function renderStats(stats) {
    return (
      <table>
        <tbody>
          <tr>
            <td>First Race</td>
            <td>
              <Link to={`/races/result/${stats.firstRace}`}>
                {convertTimestampToDateString(stats.firstRaceDate)}
              </Link>
              </td>
          </tr>
          <tr>
            <td>Total Races</td>
            <td>{stats.totalRaces}</td>
          </tr>
          <tr>
            <td>Time Played</td>
            <td>{convertSecondsToTimeString(stats.totalTimePlayed)}</td>
          </tr>
          <tr>
            <td>Total Games</td>
            <td>{stats.totalGames}</td>
          </tr>
          <tr>
            <td>Rank</td>
            <td>{(stats.rank > 0) ? addOrdinalIndicator(stats.rank) : ''}</td>
          </tr>
          <tr className='first-place'>
            <td>1sts</td>
            <td>{stats.totalFirstPlace}</td>
          </tr>
          <tr className='second-place'>
            <td>2nds</td>
            <td>{stats.totalSecondPlace}</td>
          </tr>
          <tr className='third-place'>
            <td>3rds</td>
            <td>{stats.totalThirdPlace}</td>
          </tr>
          <tr className='red'>
            <td>Forfeits</td>
            <td>{stats.totalQuits}</td>
          </tr>
          <tr className='red'>
            <td>DQs</td>
            <td>{(stats.totalDisqualifications > 0) ? stats.totalDisqualifications : ''}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (!game) return null;
  return (
    <div className='player-stats'>
      {renderHeader(game)}
      {renderStats(stats)}
    </div>
  );
}

export default PlayerStats;

