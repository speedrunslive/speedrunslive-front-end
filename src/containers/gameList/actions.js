// Redux action creators

import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../config'
import { RECEIVE_GAMELIST } from './constants'

export function receiveGameList(json) {
  return {
    type: RECEIVE_GAMELIST,
    games: json.rows
  };
}

export function fetchGameList() {
  return (dispatch) => {
    return fetch(`${apiUrl}/games?sort=name&order=ASC`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveGameList(json));
        }
    );
  }
};