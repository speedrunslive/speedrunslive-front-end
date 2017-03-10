import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../../../config'
import { RECEIVE_DONATIONS, REQUEST_DONATIONS} from './constants'

export function requestDonations() {
  return { type: REQUEST_DONATIONS };
}

export function receiveDonations(json) {
  console.log(json);
  return {
    type: RECEIVE_DONATIONS,
    donations: json._source
  };
}

export function fetchDonations() {
  return (dispatch, getState) => {
    dispatch(requestDonations());
    return fetch(`${apiUrl}/frontend/donate`)
        .then(response => response.json())
        .then((json) => {
            dispatch(receiveDonations(json));
        }
    );
  }
};