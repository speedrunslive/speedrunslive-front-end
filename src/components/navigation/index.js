import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './navigation.scss';

counterpart.registerTranslations('en', require('./translations/en'));

const Navigation = () => {
  return (
    <nav>
      <div className="primary">
        <Link to="/" className="btn blue-hover"><Translate content="navigation.streams"/></Link>
        <Link to="/races" className="btn red-hover"><Translate content="navigation.races"/></Link>
        <Link to="/channel" className="btn yellow-hover"><Translate content="navigation.channel"/></Link>
        <Link to="/faq" className="btn green-hover"><Translate content="navigation.rules"/></Link>
        <Link to="/tools" className="btn grey-hover"><Translate content="navigation.tools"/></Link>
      </div>
    </nav>
  );
}

export default Navigation;