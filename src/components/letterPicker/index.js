import React, { PropTypes } from 'react';
import './letterPicker.scss';

const alphabet = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');;

export default class LetterPicker extends React.Component {
  render() {
    return (
      <div className="letterPicker">
        <a href="/races/gamelist/alphabetical/number">#</a>
        {alphabet.map((letter, i) => {
          return <a href={"/races/gamelist/alphabetical/" + letter} key={i}>{letter}</a>
        })}
      </div>
    );
  }
}