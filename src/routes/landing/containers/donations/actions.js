import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../../../config'
import { FETCH_DONATIONS} from './constants'

export function fetchDonations() {
  //const request = fetch(`http://api.speedrunslive.com/frontend/donate`).then(response => response.json());
  const request = fetch(`${apiUrl}/frontend/donate`).then(response => response.json());
  return { 
    type: FETCH_DONATIONS,
    payload:request
  }
};