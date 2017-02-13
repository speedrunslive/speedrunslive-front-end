// Redux action creators

import fetch from 'isomorphic-fetch';
import { apiUrl } from '../config'

export const RECEIVE_GAMELIST = 'RECEIVE_GAMELIST';

export function receiveGameList(json) {
  return {
    type: RECEIVE_GAMELIST,
    games: json.games
  };
}

export function fetchGameList() {
  return (dispatch) => {
    return fetch(`${apiUrl}/games`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveGameList(json));
        }
    );
  }
};