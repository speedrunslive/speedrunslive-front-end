import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './gameListNav.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./translations/en'));

const GameListNav = (props) => {
  return (
    <div className="gameListNav">
      <div className="col-md-2 col-md-push-7">
        <div className="gameSort">
          <h1><Translate content="gameList.sort"/></h1>
          <Link to="/races/gamelist/popular" activeClassName="active-red" className="btn red-hover"><Translate content="gameList.popular"/></Link>
          <Link to="/races/gamelist/alphabetical" activeClassName="active-red" className="btn red-hover"><Translate content="gameList.alphabetical"/></Link>
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

GameListNav.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GameListNav;