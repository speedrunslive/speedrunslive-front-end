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
        <h1><Translate content="racesNavigation.heading" /></h1>
        <Link to="/races/live" activeClassName="active-red" className="btn btn-large red-hover">
          <Translate content="racesNavigation.liveRaces" />
          <img src="http://cdn.speedrunslive.com/images/liveraces.png" alt="Live Races" />
        </Link>
        <Link to="/races/seasons" activeClassName="active-red" className="btn btn-large red-hover">
          <Translate content="racesNavigation.seasons" />
          <img src="http://cdn.speedrunslive.com/images/seasons.png" alt="Seasons" />
        </Link>
        <Link to="/races/racestats" activeClassName="active-red" className="btn btn-large red-hover">
          <Translate content="racesNavigation.raceStats" /><img src="http://cdn.speedrunslive.com/images/pastresults.png" alt="Past Results" />
        </Link>
        <Link to="/races/pastresults" activeClassName="active-red" className="btn btn-large red-hover">
          <Translate content="racesNavigation.pastResults" /><img src="http://cdn.speedrunslive.com/images/awards.png" alt="Awards" />
        </Link>
        <Link to="/races/gamelist" activeClassName="active-red" className="btn btn-large red-hover">
          <Translate content="racesNavigation.gameList" /><img src="http://cdn.speedrunslive.com/images/gamelist.png" alt="Game List" />
        </Link>
        <Link to="/races/bulletinboard" activeClassName="active-red" className="btn btn-large red-hover">
          <Translate content="racesNavigation.bulletinBoard" /><img src="http://cdn.speedrunslive.com/images/bboard.png" alt="Board" />
        </Link>
      </div>
    </div>
  );
}

export default RacesNavigation;

// 