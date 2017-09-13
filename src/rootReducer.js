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
import gameRules from './routes/landing/routes/game/containers/gameRules/reducer';
import gameStats from './routes/landing/routes/game/containers/gameStats/reducer';
import trackedGoals from './routes/landing/routes/game/containers/trackedGoals/reducer';
import gameLeaderboard from './routes/landing/routes/game/containers/gameLeaderboard/reducer';
import playerData from './routes/landing/routes/profile/containers/playerData/reducer';
import playerGameList from './routes/landing/routes/profile/containers/playerGameList/reducer'; 
import playerStats from './routes/landing/routes/profile/containers/playerStats/reducer'; 
import liveRaces from './routes/landing/routes/races/routes/live/containers/liveRacePanelList/reducer';
import liveRaceSelected from './routes/landing/routes/races/routes/live/containers/liveRaceViewer/reducer';

const appReducers = combineReducers({
  alphaList,
  popularList,
  donations,
  streams,
  topRacers,
  globalStats,
  monthlyStats,
  raceResultList,
  gameRules,
  gameStats,
  trackedGoals,
  gameLeaderboard,
  playerData,
  playerGameList,
  playerStats,
  liveRaces,
  liveRaceSelected,
  routing: routerReducer
});

export default appReducers;