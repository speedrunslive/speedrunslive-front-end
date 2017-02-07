import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './navigation.scss';

counterpart.registerTranslations('en', require('./translations/en'));

export default class Navigation extends React.Component {
  render() {
    return (
          <nav>
              <Link to="/" className="headerButton"><Translate content="navigation.streams"/></Link>
              <Link to="/races" className="racesButton headerButton"><Translate content="navigation.races"/></Link>
              <Link to="/channel" className="headerButton"><Translate content="navigation.channel"/></Link>
              <Link to="/faq/rules" className="headerButton"><Translate content="navigation.rules"/></Link>
              <Link to="/tools" className="headerButton"><Translate content="navigation.tools"/></Link>
          </nav>
    );
  }
}