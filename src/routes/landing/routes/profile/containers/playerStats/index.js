import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPlayerStats} from './actions';

import PlayerStats from '../../components/playerStats';

class PlayerStatsContainer extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.game != this.props.game || newProps.player != this.props.player) {
      this.props.fetchPlayerStats(newProps.player, newProps.game);
    }
  }

  componentDidMount() {
    this.props.fetchPlayerStats(this.props.player, this.props.game);
  }

  render() {
    return (
      <PlayerStats playerStats={this.props.playerStats} />
    );
  }
}

function mapStateToProps(state) {
  return {
    playerStats: state.playerStats
  }
}

export default connect(mapStateToProps, {fetchPlayerStats})(PlayerStatsContainer);