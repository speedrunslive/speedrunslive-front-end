import React from 'react';
import {Link} from 'react-router';
import RaceResult from '../raceResult';

import './raceResultList.scss';

const RaceResultList = (props) => {

  var raceResultList = props.raceResultList;

  function renderRace(raceResult){
    return (<RaceResult key={raceResult.id} raceResult={raceResult} />);
  }

  function renderPagenator() {
    // temp paging. Should be done with react router and buttons in future.
    var nextPage = parseInt(props.page) + 1;
    var prevPage = parseInt(props.page) - 1;
    prevPage = (prevPage < 1) ? 1 : prevPage;
    nextPage = (nextPage > props.lastPage) ? props.lastPage : nextPage;
    
  return (
    <div className="pagenator">
      <a className="btn red-hover" href='1'>First</a>
      <a className="btn red-hover" href={prevPage}>Left</a>
      <a className="btn red-hover" href={nextPage}>Right</a>
      <a className="btn red-hover" href={props.lastPage}>Last</a>
    </div>
  );
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
        {renderPagenator()}
        {raceResultList.map(renderRace)}
        {renderPagenator()}
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