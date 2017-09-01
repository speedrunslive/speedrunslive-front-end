import React from 'react';
import {Link} from 'react-router';
import {convertSecondsToRaceTime, addOrdinalIndicator, 
        getCssClassForRank, convertTimestampToDateString} from '../../../utils';

import './raceResult.scss';

const RaceResult = (props) => {

  const raceResult = props.raceResult;

  function renderPlace(place) {
    let placeColor = getCssClassForRank(place);

    return (
    <td className={`left ${placeColor}`}>{(place > 9996) ? '' : addOrdinalIndicator(place)}</td>
    );
  }

  function renderPlayer(player) {
    return (
      <td className="left">
        <Link to={`/profile/${player}`}>{player}</Link>
      </td>
    );
  }

  function renderRaceTime(time, place) {
    let timeString, quitterColor = '';
    if (place === 9998) timeString = 'Forfeit', quitterColor = 'red';
    else if (place === 9999) timeString = 'DQ', quitterColor = 'red';
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
  function renderTrueSkillDelta(trueskillchange, newtrueskill) {
    if (newtrueskill == 0 ) return <td> </td>;

    var trueskillColor = '';
    if (trueskillchange > 0) { trueskillColor = 'green'; } 
    else if (trueskillchange < 0) { trueskillColor = 'red'; }
    return (<td className={`true-skill ${trueskillColor}`}>{trueskillchange}</td>);
  }

  function renderRaceResultRow(result, i) {
    return (
      <tr key={i+1}>
        {renderPlace(result.place)}
        {renderPlayer(result.player)}
        {renderRaceTime(result.time, result.place)}
        {renderComment(result.message)}
        {renderTrueSkill(result.oldtrueskill, result.newtrueskill)}
        {renderTrueSkillDelta(result.trueskillchange, result.newtrueskill)}
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