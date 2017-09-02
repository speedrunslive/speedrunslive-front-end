import React from 'react';
import LiveRace from '../liveRace';

import './liveRacesList.scss';

const LiveRacesList = (props) => {
  const races = props.races;

  function renderRace(race){
    // Do not render races recorded or complete
    if (race.state <= 3) {
      return <LiveRace key={race.id} race={race} />
    }
  }

  return (
    <div className='live-races-list'>
      <h1>Live Races</h1>
      <ul>
        {races.map(renderRace)}
      </ul>
    </div>
  );
}

export default LiveRacesList;