import {FETCH_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS, SEARCHING} from './constants';

const INITIAL_STATE = {isSearching: false, game: [], player: []};

function searchResults(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_SEARCH_RESULTS:
      return {isSearching: false, game: action.game, player: action.player}
    case SEARCHING:
      return {...state, isSearching:true}
    case CLEAR_SEARCH_RESULTS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default searchResults;