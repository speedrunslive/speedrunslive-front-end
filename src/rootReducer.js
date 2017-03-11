import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import alphaList from './routes/races/containers/alphaList/reducer';
import popularList from './routes/races/containers/popularList/reducer';
import donations from './routes/landing/containers/donations/reducer';
import streams from './routes/landing/containers/streams/reducer';

const appReducers = combineReducers({
  alphaList,
  popularList,
  donations,
  streams,
  routing: routerReducer
});

export default appReducers;