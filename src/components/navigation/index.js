import React from 'react';
import { Link, IndexLink } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './navigation.scss';

counterpart.registerTranslations('en', require('./translations/en'));

const Navigation = () => {
  return (
    <nav>
      <div className="primary">
        <IndexLink to="/" activeClassName="active-blue" className="btn blue-hover"><Translate content="navigation.streams"/></IndexLink>
        <Link to="/races" activeClassName="active-red" className="btn red-hover"><Translate content="navigation.races"/></Link>
        <Link to="/channel" activeClassName="active-yellow" className="btn yellow-hover"><Translate content="navigation.channel"/></Link>
        <Link to="/faq" activeClassName="active-green" className="btn green-hover"><Translate content="navigation.rules"/></Link>
        <Link to="/tools" activeClassName="active-grey" className="btn grey-hover"><Translate content="navigation.tools"/></Link>
      </div>
    </nav>
  );
}

export default Navigation;