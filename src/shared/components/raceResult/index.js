import React from 'react';
import {Link} from 'react-router';
import {convertSecondsToRaceTime, addOrdinalIndicator} from '../../../utils';

import './raceResult.scss';

const RaceResult = (props) => {

  const raceResult = props.raceResult;

  function convertTimestampToDateString(timestamp) {
    var dateObj = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = dateObj.getFullYear();
    var month = months[dateObj.getMonth()];
    var date = dateObj.getDate();
    var hour = dateObj.getHours().toString().padStart(2, '0');;
    var min = dateObj.getMinutes().toString().padStart(2, '0');
    var sec = dateObj.getSeconds().toString().padStart(2, '0');
    var time = month + ' ' + date + ', ' + year + ' - ' + hour + ':' + min + ':' + sec ;
    return time;
  }

  function renderPlace(place) {
    var placeColor = '';
    if (place === 3) {placeColor = 'third-place';}
    else if (place === 2) {placeColor = 'second-place';}
    else if (place === 1) {placeColor = 'first-place';}
    else {placeColor = 'loser-place';}

    return (
    <td className={`left ${placeColor}`}>{(place > 9996) ? '' : addOrdinalIndicator(place)}</td>
    );
  }

  function renderRaceTime(time, place) {
    let timeString, quitterColor = '';
    if (place === 9998) timeString = 'Forfeit', quitterColor = 'red';
    else if (place === 9997) timeString = 'DQ', quitterColor = 'red';
    else timeString = convertSecondsToRaceTime(time);

    return (<td className={`left ${quitterColor}`}>{timeString}</td>);
  }

  function renderComment(comment) {
    if (!comment || comment.length <= 0) {
      return (<td className=""></td>);
    }
    return (<td className="comment"><span>Comment</span><div>{comment}</div></td>);
  }

  function renderTrueSkill(oldtrueskill,newtrueskill) {
    let trueSkillString = '';
    if (newtrueskill == 0) { trueSkillString = 'unranked!'; }
    else if (oldtrueskill == 0) { trueSkillString = 'ranked!'; }
    else { trueSkillString = `${oldtrueskill} → ${newtrueskill}`; }

    return <td className="true-skill">{trueSkillString}</td>
  }

  // Positive true skill = green, else red font.
  function renderTrueSkillDelta(trueskillchange) {
    var trueskillColor = '';
    if (trueskillchange > 0) { trueskillColor = 'green'; } 
    else if (trueskillchange < 0) { trueskillColor = 'red'; }
    return (<td className={`true-skill ${trueskillColor}`}>{trueskillchange}</td>);
  }

  function renderRaceResultRow(result, i) {
    return (
      <tr key={i+1}>
        {renderPlace(result.place)}
        <td className="left">{result.player}</td>
        {renderRaceTime(result.time, result.place)}
        {renderComment(result.message)}
        {renderTrueSkill(result.oldtrueskill, result.newtrueskill)}
        {renderTrueSkillDelta(result.trueskillchange)}
      </tr>
    );
  }

  return (
    <div className='race-result-table'>
      <table>
        <thead>
          <tr className="leaderboard">
            <th colSpan="4" className='game-name'>
              <Link to={`/game/${raceResult.game.abbrev}`}>{raceResult.game.name}</Link>
            </th>
            <th colSpan="2" className='race-id'>
              <Link to={`/races/result/${raceResult.id}`}>{raceResult.id}</Link>
            </th>
          </tr>
          <tr className="sub-header">
            <td colSpan="4" className='goal'>{raceResult.goal}</td>
            <td colSpan="2" className='date'>{convertTimestampToDateString(raceResult.date)}</td>
          </tr>
        </thead>
        <tbody>
          {raceResult.results.map(renderRaceResultRow)}
        </tbody>
      </table>
    </div>
  );
}

export default RaceResult;