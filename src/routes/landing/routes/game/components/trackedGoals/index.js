import React from 'react';
import {Link} from 'react-router';
import {convertSecondsToRaceTime} from '../../../../../../utils';

import './trackedGoals.scss';

const TrackedGoals = (props) => {

  const {trackedGoals} = props;

    function renderPlace(place) {
      var placeColor = '';
      if (place === 3) {placeColor = 'third';}
      else if (place === 2) {placeColor = 'second';}
      else if (place === 1) {placeColor = 'first';}
      else {placeColor = 'dull';}

      return (
        <td className={placeColor}>{place}</td>
        );
    }

    function renderRaceTime(seconds, race) {
      return (
      <td className={`left`}>
        <Link to={`/races/result/${race}`}>{convertSecondsToRaceTime(seconds)}</Link>
      </td>
      );
    }

    function renderRow(result, i) {
      let place = i+1;
      if (place > 5) return null;
    return (
      <tr key={place}>
        {renderPlace(place)}
        <td className='left'>{result.player}</td>
        {renderRaceTime(result.time, result.race)}
      </tr>
    );
  }

  function renderGoal(goal,i) {
    return (
      <div key={i} className='tracked-goal'>
        <table>
          <thead>
            <tr className="leaderboard">
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

  return (
    <div className=''>
      <h1>Best Race Times</h1>
      {trackedGoals.map(renderGoal)}
    </div>
  );

}

export default TrackedGoals;


