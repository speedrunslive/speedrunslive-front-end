import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../../../../../config';
import {FETCH_GAME_RULES} from './constants';

export function fetchGameRules(game) {
  //const url = `${apiUrl}/rules/${game}`;
  const url = `http://api.speedrunslive.com/rules/${game}`;
  const rules = fetch(url).then(response => response.json());

  return {
    type: FETCH_GAME_RULES,
    payload: rules
  }
}