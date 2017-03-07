import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../../../config';
import { jsonToQueryString } from '../../../../utils';
import { RECEIVE_POPULARLIST, REQUEST_POPULARLIST } from './constants';

export function requestPopularList() {
  return { type: REQUEST_POPULARLIST };
}

export function receivePopularList(json) {
  return {
    type: RECEIVE_POPULARLIST,
    games: json.rows
  };
}

export function fetchPopularList(params) {
  return (dispatch, getState) => {
    dispatch(requestPopularList());
    return fetch(`${apiUrl}/games${jsonToQueryString(params)}`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receivePopularList(json));
        }
    );
  }
};