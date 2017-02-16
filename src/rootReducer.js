import { combineReducers } from 'redux';
import gameList from './containers/gameList/reducer';

const appReducers = combineReducers({
  gameList
});

export default appReducers;