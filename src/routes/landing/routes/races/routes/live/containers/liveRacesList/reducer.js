import {FETCH_LIVE_RACES} from './constants';

function liveRaces(state = [], action) {
  switch(action.type) {
    case FETCH_LIVE_RACES:
      return action.payload;
    default:
      return state;
  }
}

export default liveRaces;