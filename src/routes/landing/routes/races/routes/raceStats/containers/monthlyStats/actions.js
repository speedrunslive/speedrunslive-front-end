import {FETCH_MONTHLY_STATS} from './constants';
import {apiUrl} from '../../../../../../../../config';
import fetch from 'isomorphic-fetch';

export function fetchMonthlyStats() {
  //const url = `${apiUrl}/monthly`;
  const url = 'http://api.speedrunslive.com/stat/monthly';
  const stats = fetch(url).then(response => response.json());
  return {
    payload: stats,
    type: FETCH_MONTHLY_STATS
  }
}