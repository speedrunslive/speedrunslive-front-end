import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGameLeaderboard} from './actions';

import GameLeaderboardTable from '../../components/gameLeaderboardTable';
import ToggleUnrankedLeaderboard from '../../components/toggleUnrankedLeaderboard';

class GameLeaderboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {showUnranked: false};
  }

  componentDidMount() {
    this.props.fetchGameLeaderboard(this.props.game);
  }

  renderLeaderboard(leaderboard) {
    return <GameLeaderboardTable leaders={leaderboard.leaders} percentile={leaderboard.percentile} />
  }

  toggleShowUnranked() {
    this.setState({showUnranked: !this.state.showUnranked});
  }

  renderUnrankedLeaderboard(unranked) {
    return (
      <div>
      <div onClick={()=>this.toggleShowUnranked()}>
        <ToggleUnrankedLeaderboard status={this.state.showUnranked ? 'Hide' : 'Show'} count={unranked.length}/> 
      </div>
        {this.state.showUnranked ? <GameLeaderboardTable leaders={unranked} percentile='unranked' /> : null}
      </div>
    );
  }

  render() {
    const {leaders, unranked} = this.props.gameLeaderboard;
    if (!leaders || !unranked) return null;

    return (
      <div> 
        <h1>Game Leaderboard</h1>
        {leaders.map(this.renderLeaderboard.bind(this))}
        {this.renderUnrankedLeaderboard(unranked)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameLeaderboard:state.gameLeaderboard
  }
}

export default connect(mapStateToProps, {fetchGameLeaderboard})(GameLeaderboardContainer);