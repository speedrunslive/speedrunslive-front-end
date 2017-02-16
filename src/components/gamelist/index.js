import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './gameList.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

const alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');;
counterpart.registerTranslations('en', require('./translations/en'));

export default class GameList extends React.Component {
  renderLetterPicker() {
    return (
      <div className="letterPicker">
        <a href="/races/gamelist/alphabetical/number">#</a>
        {alphabet.map((letter, i) => {
          return <a href={"/races/gamelist/alphabetical/" + letter} key={i}>{letter}</a>
        })}
      </div>
    );
  };

  renderAlphaList() {
    var newLetter = '';
    var currentLetter = '';

    return (
      <div className="alphaList">
        <ul>
          {this.props.games.map((game, i) => {
            newLetter = game.name.charAt(0);
            if (newLetter !== currentLetter) {
              currentLetter = newLetter;
              return [<h1>{newLetter}</h1>,<li key={i}>{game.name}</li>]
            }
            return <li key={i}>{game.name}</li>
          })}
        </ul>
      </div>
    );
  };

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
              {this.renderLetterPicker()}
              {this.renderAlphaList()}
            </div>
        </div>
    );
  }
}

GameList.propTypes = {
    games: PropTypes.array.isRequired
};