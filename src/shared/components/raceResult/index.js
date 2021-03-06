import React from 'react';
import {Link} from 'react-router';
import {convertTimestampToDateString} from '../../../utils';
import * as raceHelper from '../../../utils/raceHelper';

import './raceResult.scss';

/**
 * RaceResult - display a single SRL race result as an html table
 * 
 * @param {Object} raceResult - Object with result details.
 */
const RaceResult = (props) => {

  const raceResult = props.raceResult;

  return (
    <div className='race-result-table'>
      <table>

        {renderHeader(raceResult)}

        <tbody>
          {raceResult.results.map(renderRaceResultRow)}
        </tbody>
      </table>
    </div>
  );

  
  function renderHeader(raceResult) {
    return (
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
    );
  }

  function renderRaceResultRow(result, i) {
    return (
      <tr key={i+1}>
        {raceHelper.renderPlace(result.place)}
        {raceHelper.renderPlayer(result.player)}
        {raceHelper.renderRaceTime(result.time, result.place)}
        {renderComment(result.message)}
        {renderTrueSkill(result.oldtrueskill, result.newtrueskill)}
        {renderTrueSkillDelta(result.trueskillchange, result.newtrueskill)}
      </tr>
    );
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
}

export default RaceResult;