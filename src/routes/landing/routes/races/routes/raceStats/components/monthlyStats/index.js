import React, {Component} from 'react';
import {Link} from 'react-router';
import {convertSecondsToTimeString, numberToMonth} from '../../../../../../../../utils';

import './monthlyStats.scss';

class MonthlyStats extends Component {
  constructor(props){
    super(props);
    this.state = {displayMoreStats:'none'}
  }
  handleClick(){
    if(this.state.displayMoreStats==='') this.setState({displayMoreStats:'none'});
    else this.setState({displayMoreStats:''});
  }
  render(){
  const stats = this.props.stats;
    return (
      <div className="monthly-stats">
        <div onClick={this.handleClick.bind(this)} className="panel">
          <div className="panel-content pull-right total-races">{stats.totalRaces} race(s)</div>
          <div className="progress-bar" style={{width:`${stats.percentRaces}%`}}>
            <div className="panel-content month">{numberToMonth(stats.month)}</div>
          </div>
        </div>
        <ul className="more-stats" style={{display:`${this.state.displayMoreStats}`}}>
          <li>Players: <strong>{stats.totalPlayers}</strong></li>
          <li>Games: <strong>{stats.totalGames}</strong></li>
          <li><Link to={`/races/result/${stats.largestRace}`}>Largest race: <strong>{stats.largestRaceSize}</strong></Link></li>
          <li>Time played: <strong>{convertSecondsToTimeString(stats.totalTimePlayed)}</strong></li>
        </ul>
      </div>
    );
  }
}

export default MonthlyStats;