import React from 'react';
import LiveRaceTimer from '../../containers/liveRaceTimer';
import {Link} from 'react-router';

import './liveRace.scss';

import blankImage from '../../../../../../../../css/images/blank-image.png';

const LiveRace = (props) => {
  const {game,goal,time,statetext,numentrants,state,id} = props.race;

  function getTimer() {
    let raceStart = new Date(time * 1000);
    return <span className='green'><LiveRaceTimer start={raceStart} /></span>

  }

  function renderRaceStatus() {
    if (state === 3) {
      return getTimer();
    }

    else {
      return <span>{statetext}</span>
    }
  }

  return (
    <Link to={`/races/live/${id}`}>
      <li className='live-race'>
          <img onError={(ev)=> ev.target.src=blankImage} 
                src={`http://cdn.speedrunslive.com/images/games/${game.abbrev}.jpg`} alt='Game Image'/>
          <div className='race-details'>
            <h2>{game.name}</h2>
            <div>{goal}</div>
          </div>
          <div className="race-status">
            <h2>{numentrants} entrant(s)</h2>
            {renderRaceStatus()}
          </div>
      </li>
    </Link>
  );
}

export default LiveRace;