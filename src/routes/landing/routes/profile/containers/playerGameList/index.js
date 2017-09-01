import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPlayerGameList} from './actions';

import PlayerGameList from '../../components/playerGameList';

class PlayerGameListContainer extends Component {
  componentDidMount(){
    this.props.fetchPlayerGameList(this.props.player);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.player != this.props.player) {
      this.props.fetchPlayerGameList(newProps.player);
    }
  }
  
  render() {
    return (
      <PlayerGameList playerGameList={this.props.playerGameList} player={this.props.player} game={this.props.game} />
    );
  }
}

function mapStateToProps(state) {
  return {
    playerGameList: state.playerGameList
  }
}

export default connect(mapStateToProps,{fetchPlayerGameList})(PlayerGameListContainer);