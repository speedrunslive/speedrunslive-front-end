import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import GameListNav from './components/gameListNav';

const GameList = (props) => {
  return (
    <div>
        <GameListNav />
        <div className="col-md-7 col-md-pull-2">
          {props.children}
        </div>
    </div>
  );
}

GameList.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GameList;