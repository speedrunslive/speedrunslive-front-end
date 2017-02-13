import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './racesNavigation.scss'

counterpart.registerTranslations('en', require('./translations/en'));

export default class RacesNavigation extends React.Component {
  render() {
    return (
        <div className="racesNav">
          <div className="col-md-3">
            <h1><Translate content="racesNavigation.heading"/></h1>
            <Link to="/races/live" className="btn btn-large red-hover"><Translate content="racesNavigation.liveRaces"/></Link>
            <Link to="/races/seasons" className="btn btn-large red-hover"><Translate content="racesNavigation.seasons"/></Link>
            <Link to="/races/racestats" className="btn btn-large red-hover"><Translate content="racesNavigation.raceStats"/></Link>
            <Link to="/races/pastresults" className="btn btn-large red-hover"><Translate content="racesNavigation.pastResults"/></Link>
            <Link to="/races/gamelist" className="btn btn-large red-hover"><Translate content="racesNavigation.gameList"/></Link>
            <Link to="/races/bulletinboard" className="btn btn-large red-hover"><Translate content="racesNavigation.bulletinBoard"/></Link>
          </div>
        </div>
    );
  }
}