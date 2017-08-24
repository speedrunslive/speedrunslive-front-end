import {FETCH_GAME_RULES} from './constants';

const gameRules = function(state = "", action) {
  switch(action.type) {
    case FETCH_GAME_RULES: 
      return action.payload;
    default:
      return state;
  }
}

export default gameRules;