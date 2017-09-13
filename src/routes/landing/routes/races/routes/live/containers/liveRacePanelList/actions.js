import {FETCH_LIVE_RACES} from './constants';
import fetch from 'isomorphic-fetch';
import {apiUrl} from '../../../../../../../../config';

export function fetchLiveRaces() {
  //const url = `${apiUrl}/races`;
  const url = `http://api.speedrunslive.com/races`;

  const liveRaces = fetch(url).then(response => response.json());

  return {
    type: FETCH_LIVE_RACES,
    payload: liveRaces
  }

}