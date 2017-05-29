import {apiUrl} from '../../../../../../../../config';
import {FETCH_TOP_RACERS} from './constants';

export function fetchTopRacers(sortField){
  //const url = `${apiUrl}/leaderboard?sortField=${sortField}`;
  const url = `http://api.speedrunslive.com/leaderboard?sortField=${sortField}`;
  const request = fetch(url).then(response => response.json());
  return { 
    type: FETCH_TOP_RACERS,
    payload: request
  }
}