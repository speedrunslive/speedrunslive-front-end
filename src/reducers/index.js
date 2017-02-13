import { combineReducers } from 'redux';
import gamelist from './gamelist';

const appReducers = combineReducers({
  gamelist
});

export default appReducers;