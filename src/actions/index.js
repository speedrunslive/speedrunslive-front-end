// Redux action creators

import fetch from 'isomorphic-fetch';
import { apiUrl } from '../config'
import { RECEIVE_GAMELIST } from './constants'

function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

export function receiveGameList(json) {
  return {
    type: RECEIVE_GAMELIST,
    games: json.rows
  };
}

export function fetchGameList(params) {
  return (dispatch) => {
    return fetch(`${apiUrl}/games${jsonToQueryString(params)}`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveGameList(json));
        }
    );
  }
};