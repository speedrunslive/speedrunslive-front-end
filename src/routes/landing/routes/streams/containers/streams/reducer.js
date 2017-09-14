import {FETCH_STREAMS, SET_FEATURED_STREAM, FILTER_STREAMS} from './constants';

const INITIAL_STATE = {all: [], featuredStream:{}, filterText:''};

const streams = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_STREAMS:{
      var sortedStream = action.payload._source.channels.sort((streamA, streamB)=>{
        return (streamA.current_viewers < streamB.current_viewers) ? 1 : -1
      });
      var featuredStream = state.featuredStream;
      if (!featuredStream || Object.keys(featuredStream).length === 0){
        featuredStream = pickRandomStream(sortedStream);
        sortedStream =  setFeaturedStream(sortedStream, featuredStream);
      }
      return {...state, all: sortedStream, featuredStream};
    }
    case SET_FEATURED_STREAM:{
      const newStreamList = setFeaturedStream(state.all, action.payload);
      return {...state, all: newStreamList, featuredStream:action.payload};
    }
    case FILTER_STREAMS:{
      return {...state, filterText:action.payload}
    }
    default:
      return state;
  }
};

const pickRandomStream = (streams) =>{
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