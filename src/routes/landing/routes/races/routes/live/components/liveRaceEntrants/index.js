import React from 'react';
import {Link} from 'react-router';
import LiveRaceTimer from '../../containers/liveRaceTimer';
import * as raceHelper from '../../../../../../../../utils/raceHelper';
import './liveRaceEntrants.scss';

/**
 * LiveRaceEntrants - Display a table of race entrants
 *                    Toggleable stream 'checkbox' to select a stream
 * 
 * @param {Object} race - Race details to be displayed in table header
 * @param {Object} entrants - Race entrants to be display in table body
 * @param {Array} selectedStreams - current streams selected. Display with purple icon (else grey)
 * @param {any} handleStreamListChange - callback function to allow parent to handle when twitch icon selected
 */
const LiveRaceEntrants = (props) => {
  const twitchIconSelected = require('../../../../../../../../css/vendor/images/Glitch_Purple_RGB.svg');
  const twitchIconDeselected = require('../../../../../../../../css/vendor/images/Glitch_White_RGB.svg');
  
  const {race, entrants, handleStreamListChange, selectedStreams} = props;

  return (
    <div className='live-race-entrants'>
      <table>
          {renderHeader(race)}
        <tbody>
          {renderRacers(entrants)}
        </tbody>
      </table>
    </div>
  );

  function renderHeader(race) {
    return (        
      <thead>
        <tr className='leaderboard'>
          <td colSpan="5">
            <div id="entrantsBar"><Link to={`/game/${race.game.abbrev}`}>{race.game.name}</Link></div>
          </td>
        </tr>
        <tr className='sub-header'>
          <td colSpan="4"><div className="goal">{race.goal}</div></td>
          <td colSpan="1" className='green'>{renderLiveRaceTimer()}</td>
        </tr>
      </thead>
    );
  }

  function renderRacers(entrants) {
    let raceResults = [];
    for (var i in entrants) {
      raceResults.push(
        <tr key={entrants[i].displayname}>
          {renderStreamCheckBox(entrants[i].twitch)}
          {raceHelper.renderPlace(entrants[i].place)}
          {raceHelper.renderPlayer(entrants[i].displayname)}
          {renderTrueSkill(entrants[i].trueskill)}
          {raceHelper.renderRaceTime(entrants[i].time, entrants[i].place)}
        </tr>
      );
    }
    return raceResults;
  }

  function renderStreamCheckBox(twitch) {
    if (!twitch) return <td></td>;

    let addStream;
    let twitchIcon;
    if (selectedStreams && selectedStreams.includes(twitch)) {
      return (
        <td>
          <img className="icon" onClick={() => handleStreamListChange(false, twitch)} src={twitchIconSelected} />
        </td>
        );
    } 
    return (
      <td>
        <img className="icon" onClick={() => handleStreamListChange(true, twitch)} src={twitchIconDeselected} />
      </td>
    );
  }

  function renderTrueSkill(trueskill) {
    let trueSkillString = '' + trueskill;
    if (trueskill == 0) { trueSkillString = ' - '; }

    return <td className="true-skill">{trueSkillString}</td>
  }

  function renderLiveRaceTimer() {
    if (race.state !== 3) { 
      return race.statetext;
    }
    else {
      return <LiveRaceTimer key={race.id} start={race.time} />
    }
  }


}

export default LiveRaceEntrants;