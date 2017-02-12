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
            <div className="primary">
              <Link to="/" className="btn"><Translate content="navigation.streams"/></Link>
              <Link to="/races" className="btn red-hover"><Translate content="navigation.races"/></Link>
              <Link to="/channel" className="btn"><Translate content="navigation.channel"/></Link>
              <Link to="/faq/rules" className="btn"><Translate content="navigation.rules"/></Link>
              <Link to="/tools" className="btn"><Translate content="navigation.tools"/></Link>
            </div>
          </nav>
    );
  }
}