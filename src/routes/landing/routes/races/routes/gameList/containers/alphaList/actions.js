import fetch from 'isomorphic-fetch';
import { apiUrl } from 'config'
import { jsonToQueryString } from '../../../../../../../../utils'
import { RECEIVE_ALPHALIST, REQUEST_ALPHALIST } from './constants'

export function requestAlphaList() {
  return { type: REQUEST_ALPHALIST };
}

export function receiveAlphaList(json) {
  return {
    type: RECEIVE_ALPHALIST,
    games: json.rows
  };
}

export function fetchAlphaList(params) {
  return (dispatch, getState) => {
    dispatch(requestAlphaList());
    return fetch(`${apiUrl}/games${jsonToQueryString(params)}`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveAlphaList(json));
        }
    );
  }
};