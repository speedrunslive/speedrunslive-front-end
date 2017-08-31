import {FETCH_PLAYER_GAME_LIST} from './constants';

function playerGameList(state = [], action) {
  switch (action.type) {
    case FETCH_PLAYER_GAME_LIST:
      return action.payload;
    default:
      return state;
  }
}

export default playerGameList;