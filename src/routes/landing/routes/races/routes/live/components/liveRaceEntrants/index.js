import React from 'react';
import {convertSecondsToRaceTime, getCssClassForRank, addOrdinalIndicator} from '../../../../../../../../utils';
import {Link} from 'react-router';
import LiveRaceTimer from '../../containers/liveRaceTimer';

import './liveRaceEntrants.scss';

const LiveRaceEntrants = (props) => {
  const {race, entrants, handleCheckboxChange} = props;

  function renderRacers(entrants) {
    let raceResults = [];
    for (var i in entrants) {
      raceResults.push(
        <tr>
          {renderCheckBox(entrants[i].twitch)}
          {renderPlace(entrants[i].place)}
          {renderPlayer(entrants[i].displayname)}
          {renderTrueSkill(entrants[i].trueskill)}
          {renderRaceTime(entrants[i].time, entrants[i].place)}
        </tr>
      );
    }
    return raceResults;
  }

  function renderCheckBox(twitch) {
    if (!twitch) {
      return <td></td>
    } else {
      // return <td><input type='checkbox' value={twitch.channel.name} onChange={e => handleCheckboxChange(e.target.checked, e.target.value)} /></td>
      return <td><img className="icon" onClick={e => handleCheckboxChange(true, twitch.channel.name)} src="http://cdn.speedrunslive.com/images/ttv_icon20px.png"></img></td>
    }
  }

  function renderRaceTime(time, place) {
    if (time < 0) return <td> </td>;

    let timeString, quitterColor = '';
    if (place === 9998) timeString = 'Forfeit', quitterColor = 'red';
    else if (place === 9999) timeString = 'DQ', quitterColor = 'red';
    else if (place > 9993) timeString = ''
    else timeString = convertSecondsToRaceTime(time);

    return (<td className={`left ${quitterColor}`}>{timeString}</td>);
  }

  function renderPlace(place) {
    let placeColor = getCssClassForRank(place);

    return (
    <td className={`left ${placeColor}`}>{(place > 9993) ? '' : addOrdinalIndicator(place)}</td>
    );
  }

  function renderPlayer(player) {
    return (
      <td className="left">
        <Link to={`/profile/${player}`}>{player}</Link>
      </td>
    );
  }

  function renderTrueSkill(trueskill) {
    let trueSkillString = '' + trueskill;
    if (trueskill == 0) { trueSkillString = ' - '; }

    return <td className="true-skill">{trueSkillString}</td>
  }

  function renderLiveRaceTimer(time, statetext) {
    if (time <= 0) { 
      return statetext;
    }
    else {
      return <LiveRaceTimer start={time} />
    }
  }

  return (
    <div className='live-race-entrants'>
      <table>
        <thead>
          <tr className='leaderboard'>
            <td colSpan="5">
              <div id="entrantsBar">{race.srlData.game.name}</div>
            </td>
          </tr>
          <tr className='sub-header'>
            <td colSpan="4">{race.srlData.goal}</td>
            <td colSpan="1" className='green'>
              {renderLiveRaceTimer(race.srlData.time, race.srlData.statetext)}
            </td>
          </tr>
        </thead>
        <tbody>
          {renderRacers(entrants)}
        </tbody>
      </table>
    </div>
  );
}

export default LiveRaceEntrants;