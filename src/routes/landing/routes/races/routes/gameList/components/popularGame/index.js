import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import {getCssClassForRank} from '../../../../../../../../utils';
import './popularGame.scss';

export default class PopularGame extends Component {

  render(){
    const rankColor = getCssClassForRank(this.props.rank);
    return (
      <li className="popular-game">
        <Link to={"/races/game/" + this.props.short} >
          <img className = "game-thumbnail" src="http://placehold.it/74x38" />
          <div className='panel-contents'>
            <div className="game-name pull-left">{this.props.name}</div>
            <span className={`pull-right ${rankColor}`}>{this.props.rank}</span>
            <div className="rank-percent" style={{ width: (this.props.rankPercent)* 100 + '%'}}/>
          </div>
        </Link>
      </li>
    );
  }
}

PopularGame.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  short: PropTypes.string.isRequired
};
