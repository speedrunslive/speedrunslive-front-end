import {FETCH_GAME_STATS} from './constants';

const gameStats = (state = {}, action) => {
  switch(action.type) {
    case FETCH_GAME_STATS:
      return action.payload;
    default:
      return state;
  }
}

export default gameStats;