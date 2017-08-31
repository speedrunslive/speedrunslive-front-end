import {FETCH_PLAYER_DATA} from './constants';

const INITIAL_STATE = {srl:{}, external:{}};

export default function playerData(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PLAYER_DATA:
      return {srl: action.srlData, external: action.externalData};
    default:
      return state;
  }
}