import {FETCH_TRACKED_GOALS} from './constants';

const trackedGoals = (state = [], action) => {
  switch(action.type) {
    case FETCH_TRACKED_GOALS:
      return action.payload.goals;
    default:
      return state;
  }
}

export default trackedGoals;