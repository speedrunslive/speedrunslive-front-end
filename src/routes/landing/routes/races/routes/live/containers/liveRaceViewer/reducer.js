import {FETCH_LIVE_RACE_ENTRANTS, ADD_ENTRANT_TO_STREAM_LIST, REMOVE_ENTRANT_FROM_STREAM_LIST, RESET_SELECTED_RACE_STATE} from './constants';

const INITIAL_STATE = {race:{}, twitchStreams:{}, selectedStreams:[]};

function liveRaceSelected (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LIVE_RACE_ENTRANTS:
      return {...state, race:action.race, twitchStreams:action.twitchStreams};
    case ADD_ENTRANT_TO_STREAM_LIST:
      return {...state, selectedStreams: [...state.selectedStreams, action.payload]}
    case REMOVE_ENTRANT_FROM_STREAM_LIST:
      return {...state, selectedStreams: state.selectedStreams.filter(e => e !== action.payload)}
    case RESET_SELECTED_RACE_STATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default liveRaceSelected;