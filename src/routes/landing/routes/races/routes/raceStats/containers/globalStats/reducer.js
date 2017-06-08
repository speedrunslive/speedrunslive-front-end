import {FETCH_GLOBAL_STATS} from './constants';

const globalStats = function(state = {}, action){
  switch(action.type){
    case FETCH_GLOBAL_STATS:
      return action.payload.stats;
    default:
      return state;
  }
}

export default globalStats;