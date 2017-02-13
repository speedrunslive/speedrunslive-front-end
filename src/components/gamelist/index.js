import React from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import { Link } from 'react-router';
import { fetchGameList } from '../../actions/gameList';
import './gameList.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./translations/en'));

class GameList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGameList());
  }

  render() {
    return (
        <div className="gameList">
            <div className="col-md-2 col-md-push-7">
              <div className="gameSort">
                <h1><Translate content="gameList.sort"/></h1>
                <Link to="/races/gamelist/popular" className="btn red-hover"><Translate content="gameList.popular"/></Link>
                <Link to="/races/gamelist/alphabetical" className="btn red-hover"><Translate content="gameList.alphabetical"/></Link>
              </div>
            </div>
            <div className="col-md-7 col-md-pull-2 padding-md">
              <h1><Translate content="gameList.alphabetical"/></h1>
              <div className="letterPicker">
              </div>
              <div className="alphaList">
                <ul>
                  {this.props.games.map((game, i) =>
                  <li key={i}>{game.name}</li>
                  )}
                </ul>
              </div>
            </div>
        </div>
    );
  }
}

GameList.propTypes = {
    games: React.PropTypes.array.isRequired
}

export function mapStateToProps(state) {
  return {
      games: state.gameList.items || []
  }
}

// react-redux connect binding
export default connect(mapStateToProps)(GameList);