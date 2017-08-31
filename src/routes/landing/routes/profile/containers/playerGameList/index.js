import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPlayerGameList} from './actions';

import PlayerGameList from '../../components/playerGameList';

class PlayerGameListContainer extends Component {
  componentDidMount(){
    this.props.fetchPlayerGameList(this.props.player);
  }
  render() {
    return (
      <PlayerGameList playerGameList={this.props.playerGameList} player={this.props.player} />
    );
  }
}

function mapStateToProps(state) {
  return {
    playerGameList: state.playerGameList
  }
}

export default connect(mapStateToProps,{fetchPlayerGameList})(PlayerGameListContainer);