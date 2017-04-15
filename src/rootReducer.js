import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import alphaList from './routes/landing/routes/races/routes/gameList/containers/alphaList/reducer';
import popularList from './routes/landing/routes/races/routes/gameList/containers/popularList/reducer';
import donations from './routes/landing/containers/donations/reducer';
import streams from './routes/landing/routes/streams/containers/streams/reducer';

const appReducers = combineReducers({
  alphaList,
  popularList,
  donations,
  streams,
  routing: routerReducer
});

export default appReducers;