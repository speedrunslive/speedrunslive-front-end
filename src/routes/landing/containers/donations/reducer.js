import {REQUEST_DONATIONS,RECEIVE_DONATIONS} from './constants';

const donations = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DONATIONS:
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
    case RECEIVE_DONATIONS:
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.donations
        });
    default:
      return state
  }
}

export default donations
