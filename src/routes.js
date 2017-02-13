import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore'

// Pages
import Landing from './routes/landing';
import Races from './routes/races';

// Components
import Gamelist from './components/gamelist';


const store = configureStore()

export default (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Landing}>
          <Route path="races" component={Races}>
            <IndexRoute component={Gamelist} />
            <Route path="gamelist" component={Gamelist} />
          </Route>
        </Route>
      </Router>
    </Provider>
);