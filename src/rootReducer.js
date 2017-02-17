import { combineReducers } from 'redux';
import alphaList from './containers/alphaList/reducer';
import popularList from './containers/popularList/reducer';

const appReducers = combineReducers({
  alphaList,
  popularList
});

export default appReducers;