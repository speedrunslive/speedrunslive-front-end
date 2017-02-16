import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchGameList } from './actions';
import GameList from '../../components/gameList';

class GameListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGameList());
  };

  render() {
    return (
        <GameList games={this.props.games}/>
    );
  }
}

GameList.propTypes = {
    games: PropTypes.array.isRequired
};

export function mapStateToProps(state) {
  return {
      games: state.gameList.items || []
  }
}

export default connect(mapStateToProps)(GameListContainer);