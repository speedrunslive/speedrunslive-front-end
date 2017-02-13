import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { fetchGamelist } from '../../actions/gamelist';

class Gamelist extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGamelist());
  }

  render() {
    return (
        <div id="gamelist">
          <ul>
            {this.props.games.map((game, i) =>
            <li key={i}>{game.name}</li>
            )}
          </ul>
        </div>
    );
  }
}

Gamelist.propTypes = {
    games: React.PropTypes.array.isRequired
}

export function mapStateToProps(state) {
  return {
      games: state.gamelist.items || []
  }
}

// react-redux connect binding
export default connect(mapStateToProps)(Gamelist);