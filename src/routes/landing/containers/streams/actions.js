import fetch from 'isomorphic-fetch';
import { apiUrl } from '../../../../config'
import {FETCH_STREAMS, SET_FEATURED_STREAM} from './constants';

export function fetchStreams() {
  const request = fetch(`http://api.speedrunslive.com/frontend/streams`).then(response => response.json());
  //const request = fetch(`${apiUrl}/frontend/streams`).then(response => response.json());

  return {
    type: FETCH_STREAMS,
    payload: request
  }
};

export function setFeaturedStream(stream) {
  return {
    type: SET_FEATURED_STREAM,
    payload: stream
  }
};