import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore'

// Pages
import Landing from './routes/landing';
import Races from './routes/races';

// Components
import GameList from './components/gameList';
import PastResults from './components/pastResults';


const store = configureStore()

export default (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Landing}>
          <Route path="races" component={Races}>
            <IndexRoute component={GameList} />
            <Route path="gamelist" component={GameList} />
            <Route path="pastresults" component={PastResults} />
          </Route>
        </Route>
      </Router>
    </Provider>
);