import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../../config';
import {jsonToQueryString} from '../../../utils';
import {FETCH_RACE_RESULTS} from './constants';

export function fetchRaceResults(raceId, page, pageSize, player, game) {
  raceId = (raceId) ? '/' + raceId : '';

  let queryObject = createQueryObject(page, pageSize, player, game);
  let queryString = jsonToQueryString(queryObject);

  //let url = `${apiUrl}${raceId}${queryString}`;
  let url = `http://api.speedrunslive.com/pastraces${raceId}${queryString}`;

  return function (dispatch) {
    fetch(url)
      .then(response => {
        response.json()
          .then(raceResultList => dispatch({
            type: FETCH_RACE_RESULTS,
            payload: raceResultList
          }))
      });
  }
}

// Get rid of null or undefined parameters
function createQueryObject(page, pageSize, player, game) {
  let queryObject = {};
  if (page) {queryObject.page = page;}
  if (pageSize) {queryObject.pageSize = pageSize;}
  if (player) {queryObject.player = player;}
  if (game) {queryObject.game = game;}
  return queryObject;
}