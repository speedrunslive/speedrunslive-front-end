import { combineReducers } from 'redux';
import alphaList from './routes/races/containers/alphaList/reducer';
import popularList from './routes/races/containers/popularList/reducer';

const appReducers = combineReducers({
  alphaList,
  popularList
});

export default appReducers;