import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import alphaList from './routes/landing/routes/races/routes/gameList/containers/alphaList/reducer';
import popularList from './routes/landing/routes/races/routes/gameList/containers/popularList/reducer';
import donations from './routes/landing/containers/donations/reducer';
import streams from './routes/landing/routes/streams/containers/streams/reducer';
import topRacers from './routes/landing/routes/races/routes/raceStats/containers/topRacers/reducer';
import globalStats from './routes/landing/routes/races/routes/raceStats/containers/globalStats/reducer';
import monthlyStats from './routes/landing/routes/races/routes/raceStats/containers/monthlyStats/reducer';
import raceResultList from './shared/containers/raceResultList/reducer';

const appReducers = combineReducers({
  alphaList,
  popularList,
  donations,
  streams,
  topRacers,
  globalStats,
  monthlyStats,
  raceResultList,
  routing: routerReducer
});

export default appReducers;