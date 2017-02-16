import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore'

// Pages
import Landing from './routes/landing';
import Races from './routes/races';
import FAQ from './routes/faq';

// Components
import GameList from './components/gameList';
import PastResults from './components/pastResults';
import AlphaList from './containers/AlphaList';

const store = configureStore()

export default (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Landing}>
          <Route path="races" component={Races}>
            <Route path="gamelist" component={GameList}>
              <IndexRoute component={AlphaList} />
              <Route path="alphabetical" component={AlphaList} />
            </Route>
            <Route path="pastresults" component={PastResults} />
          </Route>
		      <Route path="faq" component={FAQ} />
        </Route>
      </Router>
    </Provider>
);