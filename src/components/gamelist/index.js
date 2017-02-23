import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './gameList.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./translations/en'));

const GameList = (props) => {
  return (
    <div className="gameList">
      <div className="col-md-2 col-md-push-7">
        <div className="gameSort">
          <h1><Translate content="gameList.sort"/></h1>
          <Link to="/races/gamelist/popular" activeClassName="active-red" className="btn red-hover"><Translate content="gameList.popular"/></Link>
          <Link to="/races/gamelist/alphabetical" activeClassName="active-red" className="btn red-hover"><Translate content="gameList.alphabetical"/></Link>
        </div>
      </div>
      <div className="col-md-7 col-md-pull-2 padding-md">
        {props.children}
      </div>
    </div>
  );
}

GameList.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GameList;