import {FETCH_STREAMS} from './constants';

const streams = (state = {}, action) => {
  switch(action.type){
    case FETCH_STREAMS:
      return action.payload;
    default:
      return state;
  }
};

export default streams;