import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPlayerData} from './actions';

import PlayerData from '../../components/playerData';

class PlayerDataContainer extends Component {
  componentDidMount() {
    this.props.fetchPlayerData(this.props.player);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.player != this.props.player) {
      this.props.fetchPlayerData(newProps.player);
    }
  }

  render() {
    if (Object.keys(this.props.playerData).length === 0) return null;

     return (
      <PlayerData playerData={this.props.playerData} />
     );
   }
}

function mapStateToProps(state) {
  return {
    playerData: state.playerData
  }
}

export default connect(mapStateToProps,{fetchPlayerData})(PlayerDataContainer);