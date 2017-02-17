import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import './alphaList.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./translations/en'));

import LetterPicker from '../letterPicker';

const AlphaList = (props) => {
  var newLetter = '';
  var currentLetter = '';

  return (
    <div>
      <h1><Translate content="alphaList.heading"/></h1>
      <LetterPicker />
      <div className="alphaList">
        <ul>
        {props.games.map((game, i) => {
          newLetter = game.name.charAt(0);
          if (newLetter !== currentLetter) {
            currentLetter = newLetter;
            return [<h1>{newLetter}</h1>,<li key={i}>{game.name}</li>]
          }
          return <li key={i}>{game.name}</li>
        })}
        </ul>
      </div>
    </div>
  );
}

AlphaList.propTypes = {
    games: PropTypes.array.isRequired
};

export default AlphaList;