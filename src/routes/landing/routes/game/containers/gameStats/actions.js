import {apiUrl} from '../../../../../../config';
import fetch from 'isomorphic-fetch';
import {FETCH_GAME_STATS} from './constants';

export function fetchGameStats(game,season) {
  //const url = `${apiUrl}/?game=${game}`;
  const url = `http://api.speedrunslive.com/stat?game=${game}`;

  const stats = fetch(url).then(response => response.json());

  return {
    type: FETCH_GAME_STATS,
    payload: stats
  }
}