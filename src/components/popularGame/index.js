import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './popularGame.scss';

const PopularGame = (props) => {
  return (
    <li className="popularGame">
      <Link to={"/races/game/" + props.short + "/1"}>
        <span className="gameName">{props.name}</span>
        <span className="gameRank pull-right">{props.rank}</span>
      </Link>
    </li>
  );
}

PopularGame.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  short: PropTypes.string.isRequired
};

export default PopularGame;