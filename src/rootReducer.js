import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import alphaList from './routes/races/containers/alphaList/reducer';
import popularList from './routes/races/containers/popularList/reducer';
import donations from './routes/landing/containers/donations/reducer';

const appReducers = combineReducers({
  alphaList,
  popularList,
  donations,
  routing: routerReducer
});

export default appReducers;