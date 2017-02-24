import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './racesNavigation.scss'

counterpart.registerTranslations('en', require('./translations/en'));

const RacesNavigation = () => {
  return (
    <div className="racesNav">
      <div className="col-md-3">
        <h1><Translate content="racesNavigation.heading"/></h1>
        <Link to="/races/live" activeClassName="active-red" className="btn btn-large red-hover"><Translate content="racesNavigation.liveRaces"/></Link>
        <Link to="/races/seasons" activeClassName="active-red" className="btn btn-large red-hover"><Translate content="racesNavigation.seasons"/></Link>
        <Link to="/races/racestats" activeClassName="active-red" className="btn btn-large red-hover"><Translate content="racesNavigation.raceStats"/></Link>
        <Link to="/races/pastresults" activeClassName="active-red" className="btn btn-large red-hover"><Translate content="racesNavigation.pastResults"/></Link>
        <Link to="/races/gamelist" activeClassName="active-red" className="btn btn-large red-hover"><Translate content="racesNavigation.gameList"/></Link>
        <Link to="/races/bulletinboard" activeClassName="active-red" className="btn btn-large red-hover"><Translate content="racesNavigation.bulletinBoard"/></Link>
      </div>
    </div>
  );
}

export default RacesNavigation;