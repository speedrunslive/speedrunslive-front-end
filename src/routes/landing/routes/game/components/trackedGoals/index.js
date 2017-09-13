import React from 'react';
import {Link} from 'react-router';
import * as raceHelper from '../../../../../../utils/raceHelper';

import './trackedGoals.scss';

/**
 * TrackedGoals - Render table of top 5 racers for each given category 
 * 
 * @param {Array} trackedGoals - list of goal objects to parse
 */
const TrackedGoals = (props) => {
  const {trackedGoals} = props;

  return (
    <div className='tracked-goals'>
      <h1>Best Race Times</h1>
      {trackedGoals.map(renderGoal)}
    </div>
  );

  function renderGoal(goal,i) {
    return (
      <div key={i} className=''>
        <table>
          <thead>
            <tr>
              <th colSpan='3' className='category'>
                {goal.name}
              </th>
            </tr>
          </thead>
          <tbody>
            {goal.toptimes.map(renderRow)}
          </tbody>
        </table>
      </div>
    );
  }

    function renderRow(result, i) {
      let place = i+1;
      if (place > 5) return null;
      return (
        <tr key={place}>
          {raceHelper.renderPlace(place)}
          {raceHelper.renderPlayer(result.player)}
          <Link to={`/races/result/${result.race}`}>{raceHelper.renderRaceTime(result.time, place)}</Link>
        </tr>
      );
  }
}
export default TrackedGoals;


