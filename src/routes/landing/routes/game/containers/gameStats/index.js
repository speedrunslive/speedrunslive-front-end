import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGameStats} from './actions';

import GameStats from '../../components/gameStats';

class GameStatsContainer extends Component {
  componentDidMount() {
    this.props.fetchGameStats(this.props.game);
  }
  render() {
    return <GameStats game={this.props.gameStats.game} stats={this.props.gameStats.stats} />;
  }
}
function mapStateToProps(state) {
  return {
    gameStats: state.gameStats
  }
}

export default connect(mapStateToProps, {fetchGameStats})(GameStatsContainer);