import React from 'react';
import {Link} from 'react-router';
import RaceResult from '../raceResult';

import Pagenator from '../pagenator';

const RaceResultList = (props) => {

  var raceResultList = props.raceResultList;

  function renderRace(raceResult){
    return (<RaceResult key={raceResult.id} raceResult={raceResult} />);
  }

  function renderPageNumber() {
    if (!props.page || props.page <= 1) return null;
    return <span><span className="dull">»</span> Page {props.page} </span>
  }

  function renderIndividualRace() {
    return (
      <div className="race-result-list">
        <h1>Individual Race Result</h1>
        {raceResultList.map(renderRace)}
      </div>
      );
  }

  function renderMultipleRaces() {
    return (
      <div className="race-result-list">
        <h1>Latest Races {renderPageNumber()}</h1>
        <Pagenator page={props.page} lastPage={props.lastPage} />
        {raceResultList.map(renderRace)}
        <Pagenator page={props.page} lastPage={props.lastPage} />
      </div>
    );
  }

  if (props.isIndividualRace) { 
    return renderIndividualRace();
  } 
  else {
    return renderMultipleRaces(); 
  }
  
}

export default RaceResultList;