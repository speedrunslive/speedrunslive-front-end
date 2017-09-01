import {FETCH_PLAYER_STATS} from './constants';

function playerStats(state = {}, action) {
  switch(action.type) {
    case FETCH_PLAYER_STATS:
      return action.payload;
    default:
      return state;
  }
}

export default playerStats;