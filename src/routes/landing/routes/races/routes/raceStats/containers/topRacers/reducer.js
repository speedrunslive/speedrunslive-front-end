import {FETCH_TOP_RACERS} from './constants';

const INITIAL_STATE = [];

const topRacers = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_TOP_RACERS:
      return action.payload;
      default:
        return state;
  }
}
export default topRacers;