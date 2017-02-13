import { combineReducers } from 'redux';
import gameList from './gameList';

const appReducers = combineReducers({
  gameList
});

export default appReducers;