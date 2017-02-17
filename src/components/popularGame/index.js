import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './popularGame.scss';

export default class PopularGame extends React.Component {
  render() {
    return (
      <li className="popularGame">
        <Link to={"/races/game/" + this.props.short + "/1"}>
            <span className="gameName">{this.props.name}</span>
            <span className="gameRank pull-right">{this.props.rank}</span>
        </Link>
      </li>
    );
  }
}

PopularGame.propTypes = {
    name: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
};