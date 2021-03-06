import React from 'react';
import LiveRaceTimer from '../../containers/liveRaceTimer';
import {Link} from 'react-router';

import './liveRacePanel.scss';

/**
 * LiveRacePanel - Display race details in a typical SRL Panel
 *                 Does not display if race.state === 4
 * 
 * @param {any} race - race to be displayed
 */
const LiveRacePanel = (props) => {
  const {game,goal,statetext,numentrants,id} = props.race;

  function getTimer(time) {
    return <span className='green'><LiveRaceTimer start={time} /></span>
  }

  function renderRaceStatus(race) {
    if (race.state === 3) {
      return getTimer(race.time);
    }
    else {
      return <span>{statetext}</span>
    }
  }

  if (props.race.state === 4) return null;
  return (
    <Link to={`/races/live/${id}`}>
      <li className='live-race-panel'>
          <img onError={(ev)=> ev.target.src=require('../../../../../../../../css/images/blank-image.png')} 
                src={`http://cdn.speedrunslive.com/images/games/${game.abbrev}.jpg`} alt='Game Image'/>
          <div className='race-details'>
            <h2>{game.name}</h2>
            <div>{goal}</div>
          </div>
          <div className="race-status">
            <h2>{numentrants} entrant(s)</h2>
            {renderRaceStatus(props.race)}
          </div>
      </li>
    </Link>
  );
}

export default LiveRacePanel;