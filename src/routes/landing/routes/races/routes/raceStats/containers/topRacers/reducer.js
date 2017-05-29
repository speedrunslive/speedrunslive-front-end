import {FETCH_TOP_RACERS} from './constants';

const INITIAL_STATE = {racers: [], sort: null};

const topRacers = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_TOP_RACERS:
      return {sort: action.sort, racers: action.payload};
      default:
        return state;
  }
}
export default topRacers;