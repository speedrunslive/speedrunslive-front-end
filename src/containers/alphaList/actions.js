// Redux action creators

import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../config'
import { jsonToQueryString } from '../../utils'
import { RECEIVE_ALPHALIST } from './constants'

export function receiveAlphaList(json) {
  return {
    type: RECEIVE_ALPHALIST,
    games: json.rows
  };
}

export function fetchAlphaList(params) {
  return (dispatch) => {
    return fetch(`${apiUrl}/games${jsonToQueryString(params)}`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveAlphaList(json));
        }
    );
  }
};