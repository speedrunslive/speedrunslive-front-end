import {FETCH_STREAMS, SET_FEATURED_STREAM} from './constants';

const INITIAL_STATE = {all: [], featuredStream:{}};

const streams = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_STREAMS:{
      var streams = action.payload._source.channels;
      var featuredStream = state.featuredStream;
      if (!featuredStream || Object.keys(featuredStream).length === 0){
        featuredStream = pickFeaturedStream(streams);
        streams =  setFeaturedStream(streams, featuredStream);
      }
      return {all: streams, featuredStream};
    }
    case SET_FEATURED_STREAM:{
      const newStreamList = setFeaturedStream(state.all, action.payload);
      return {all: newStreamList, featuredStream:action.payload};
    }
    default:
      return state;
  }
};

const pickFeaturedStream = (streams) =>{
  var randomStreamIdx = Math.floor(Math.random() * streams.length);
  return streams[randomStreamIdx];
}

const setFeaturedStream = (all, stream) => {
  var streamList = JSON.parse(JSON.stringify(all)); //clone list because you shouldn't modify state directly.
  for (var i=0; i<streamList.length; i++){
    if (stream.user_name === streamList[i].user_name){
      streamList[i].featured = true;
    }
    else{
      streamList[i].featured = false;
    }
  }
  return streamList; 
}

export default streams;