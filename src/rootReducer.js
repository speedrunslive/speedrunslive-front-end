import { combineReducers } from 'redux';
import gameList from './reducers';

const appReducers = combineReducers({
  gameList
});

export default appReducers;