import fetch from 'isomorphic-fetch';
//import { apiUrl } from '../../../../config';
const apiUrl = 'http://api.speedrunslive.com';
import {FETCH_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, SEARCHING} from './constants';

export function fetchSearchResults(searchTerm, size = 5) {
  return function(dispatch) {
    if (searchTerm.length <= 1) {
      dispatch({type: CLEAR_SEARCH_RESULTS});
    } else {
      fetchGameSearch(searchTerm,size).then(gameResults => {
        fetchPlayerSearch(searchTerm, size).then(playerResults => {
          dispatch({type: FETCH_SEARCH_RESULTS, searchTerm:searchTerm, game:gameResults.hits.hits, player: playerResults.hits.hits})
        });
      });
    }
  }
}

function fetchGameSearch(searchTerm, size = 5) {
  const gameUrl = `${apiUrl}/search/games/${searchTerm}?size=${size}`;
  return fetch(gameUrl).then(response => response.json());
}

function fetchPlayerSearch(searchTerm, size = 5) {
  const playerUrl = `${apiUrl}/search/players/${searchTerm}?size=${size}`;
  return fetch(playerUrl).then(response => response.json());
}

export function clearSearchResults() {
  return {
    type: CLEAR_SEARCH_RESULTS
  }
}

export function initiateSearch() {
  return {
    type: SEARCHING
  }
}