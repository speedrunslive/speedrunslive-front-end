// Redux action creators

import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../../../config'
import { jsonToQueryString } from '../../../../utils'
import { RECEIVE_POPULARLIST } from './constants'

export function receivePopularList(json) {
  return {
    type: RECEIVE_POPULARLIST,
    games: json.rows
  };
}

export function fetchPopularList(params) {
  return (dispatch) => {
    return fetch(`${apiUrl}/games${jsonToQueryString(params)}`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receivePopularList(json));
        }
    );
  }
};