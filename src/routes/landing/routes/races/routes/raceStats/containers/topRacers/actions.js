import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../../../../../../../config';
import {FETCH_TOP_RACERS} from './constants';

export function fetchTopRacers(sortField){
  //const url = `${apiUrl}/leaderboard?sortField=${sortField}`;
  const url = `http://api.speedrunslive.com/leaderboard?sortField=${sortField}`;

  return function(dispatch){
    fetch(url)
      .then(response => {
        response.json()
          .then(racers => dispatch({
          type:FETCH_TOP_RACERS,
          sort: sortField,
          payload: racers
        }))
      });
  }
}