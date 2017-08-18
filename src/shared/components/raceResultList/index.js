import React from 'react';
import {Link} from 'react-router';
import RaceResult from '../raceResult';

import './raceResultList.scss';

const RaceResultList = (props) => {

  var raceResultList = props.raceResultList;

  function renderRace(raceResult){
    return (<RaceResult raceResult={raceResult} />);
  }

  function renderPagenator() {
  return (
    <div className="pagenator">
      <div className="btn grey-hover" to=''>First</div>
      <div className="btn grey-hover" to=''>Left</div>
      <div className="btn grey-hover" to=''>Right</div>
      <div className="btn grey-hover" to=''>Last</div>
    </div>
  );
  }

  return ( 
    <div className="race-result-list">
      <h2>Latest Races <span className="dull">»</span> Page {props.page}</h2>
      {renderPagenator()}
      {raceResultList.map(renderRace)}
      {renderPagenator()}
    </div>
);
}

export default RaceResultList;