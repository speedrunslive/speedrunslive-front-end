import fetch from 'isomorphic-fetch';
import {FETCH_GAME_LEADERBOARD} from './constants';
import {apiUrl} from '../../../../../../config';

export function fetchGameLeaderboard(game, season) {
  //const url = `${apiUrl}/leaderboard/${game}?season=${season}`;
  const url = `http://api.speedrunslive.com/leaderboard/${game}?season=${season}`;

  const gameLeaderboard = fetch(url).then(response => response.json());

  return {
    type: FETCH_GAME_LEADERBOARD,
    payload: gameLeaderboard
  }

}