import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./translations/en'));

export default class RacesNavigation extends React.Component {
  render() {
    return (
        <div id="racesNav">
          <h1><Translate content="racesNavigation.heading"/></h1>
          <Link to="/races/live"><Translate content="racesNavigation.liveRaces"/></Link>
          <Link to="/races/gamelist"><Translate content="racesNavigation.gamelist"/></Link>
        </div>
    );
  }
}