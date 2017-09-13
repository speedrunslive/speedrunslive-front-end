import React from 'react';
import {Link} from 'react-router';
import {getCssClassForRank, addOrdinalIndicator, convertSecondsToRaceTime} from '../utils';

//constants used by SRL API in entrant[i].place prop
const READY = 9994;
const ENTERED = 9995;
const FORFEIT = 9998;
const DISQUALIFIED = 9999;

export function renderRaceTime(seconds, place) {
  let timeString, quitterColor = '';
  if (place == FORFEIT) {timeString = 'Forfeit', quitterColor = 'red';}
  else if (place == DISQUALIFIED) {timeString = 'DQ', quitterColor = 'red';}
  else if (place >= READY) {timeString = ' ';}
  else {timeString = convertSecondsToRaceTime(seconds);}

  return (<td className={`left ${quitterColor}`}>{timeString}</td>);
}

export function renderPlayer(player) {
  return (
    <td className="left">
      <div className="player">
        <Link to={`/profile/${player}`}>{player}</Link>
      </div>
    </td>
  );
}

export function renderPlace(place) {
  let placeColor = getCssClassForRank(place);

  return (
  <td className={`left ${placeColor}`}>{(place >= READY) ? '' : addOrdinalIndicator(place)}</td>
  );
}
