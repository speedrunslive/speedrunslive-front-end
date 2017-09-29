import React from 'react';
import LiveRacePanel from '../liveRacePanel';

import './liveRacePanelList.scss';


/**
 * LiveRacePanelList - Display a header and list of LiveRacePanel components
 * 
 * @param {Array} races - list of race objects
 */
const LiveRacePanelList = (props) => {
  const races = props.races;

  function renderRace(race){
      return <LiveRacePanel key={race.id} race={race} />
  }

  return (
    <div className='live-race-panel-list'>
      <h1>Live Races</h1>
      <ul>
        {races.map(renderRace)}
      </ul>
    </div>
  );
}

export default LiveRacePanelList;