import {FETCH_STREAMS} from './constants';

const INITIAL_STATE = {all: [], featuredStream:{}};

const streams = (state = [], action) => {
  switch(action.type){
    case FETCH_STREAMS:
      return action.payload._source.channels;
    default:
      return state;
  }
};

export default streams;