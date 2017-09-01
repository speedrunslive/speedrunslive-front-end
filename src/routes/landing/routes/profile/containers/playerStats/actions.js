import {FETCH_PLAYER_STATS} from './constants';
import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../../../../../config';

export function fetchPlayerStats(player, game) {
  game = (game) ? `&game=${game}` : '';
  //const url = `${apiUrl}/stat?player=${player}${game}`;
  const url = `http://api.speedrunslive.com/stat?player=${player}${game}`;

  const playerStats = fetch(url).then(response => response.json());

  return {
    type: FETCH_PLAYER_STATS, 
    payload: playerStats
  }

}