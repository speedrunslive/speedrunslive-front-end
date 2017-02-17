import React, { PropTypes } from 'react';
import './letterPicker.scss';

const alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');;

const LetterPicker = () => {
  return (
    <div className="letterPicker">
      <a href="/races/gamelist/alphabetical/number">#</a>
      {alphabet.map((letter, i) =>
        <a href={"/races/gamelist/alphabetical/" + letter} key={i}>{letter}</a>
      )}
    </div>
  );
}

export default LetterPicker;