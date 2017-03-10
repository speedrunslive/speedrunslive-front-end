import {FETCH_DONATIONS} from './constants';

const donations = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DONATIONS:
      return action.payload;
    default:
      return state
  }
}
export default donations;
