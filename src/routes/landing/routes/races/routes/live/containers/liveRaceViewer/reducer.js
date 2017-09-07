import {FETCH_LIVE_RACE_ENTRANTS, ADD_ENTRANT_TO_STREAM_LIST, REMOVE_ENTRANT_FROM_STREAM_LIST} from './constants';

const INITIAL_STATE = {srlData:{}, twitchStreams:{}, selectedStreams:[]};

function liveRaceSelected (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LIVE_RACE_ENTRANTS:
      return {...state, srlData:action.srlData, twitchStreams:action.twitchStreams};
    case ADD_ENTRANT_TO_STREAM_LIST:
      return {...state, selectedStreams: [...state.selectedStreams, action.payload]}
    case REMOVE_ENTRANT_FROM_STREAM_LIST:
      return {...state, selectedStreams: state.selectedStreams.filter(e => e !== action.payload)}
    default:
      return state;
  }
}

export default liveRaceSelected;