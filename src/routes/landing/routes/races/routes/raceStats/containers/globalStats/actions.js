import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../../../../../../../config';
import {FETCH_GLOBAL_STATS} from './constants';

export function fetchGlobalStats(){
  //const url = `${apiUrl}/stat`;
  const url = `http://api.speedrunslive.com/stat`;
  const stats = fetch(url).then(response => response.json());
  return {
    type: FETCH_GLOBAL_STATS,
    payload: stats
  }
}