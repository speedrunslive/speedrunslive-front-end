import {FETCH_RACE_RESULTS} from './constants';

const INITIAL_STATE = {};

export default function raceResultList(state = INITIAL_STATE, action){
  switch(action.type) {
    case (FETCH_RACE_RESULTS):
      return {races: action.payload.pastraces, count: action.payload.count};
    default:
      return state;
  }
}