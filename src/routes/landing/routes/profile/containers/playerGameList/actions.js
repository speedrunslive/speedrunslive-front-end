import {FETCH_PLAYER_GAME_LIST} from './constants';
import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../../../../../config';

export function fetchPlayerGameList(player) {
  //const url = `${apiUrl}/ratings/${player}`;
  const url = `http://api.speedrunslive.com/ratings/${player}`;

  const playerGameList = fetch(url).then(response => response.json());

  return {
    type: FETCH_PLAYER_GAME_LIST,
    payload: playerGameList
  }

}