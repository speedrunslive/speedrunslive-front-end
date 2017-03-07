import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Routes from './routes';

const initialState = window.__REDUX_STATE__;
const store = configureStore(initialState);

syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
  <Provider store={store}>
    <Routes/>
  </Provider>
), document.getElementById('root'));