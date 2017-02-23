import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore'

// Pages
import Landing from './routes/landing';
import Races from './routes/races';
import FAQ from './routes/faq';
import About from './routes/about';
import Channel from './routes/channel';

// Components
import GameList from './components/gameList';
import PastResults from './components/pastResults';
import AlphaList from './containers/AlphaList';
import PopularList from './containers/PopularList';
import Rules from './components/rules';
import CommandList from './components/commandList';
import Glossary from './components/glossary';
import FAQBody from './components/faq';

const store = configureStore()

export default (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Landing}>
          <Route path="races" component={Races}>
            <Route path="gamelist" component={GameList}>
              <IndexRoute component={PopularList} />
              <Route path="alphabetical" component={AlphaList} />
              <Route path="popular" component={PopularList} />
            </Route>
            <Route path="pastresults" component={PastResults} />
          </Route>
		      <Route path="faq" component={FAQ}>
            <IndexRoute component={FAQBody}/>
            <Route path = "rules" component={Rules}/>
            <Route path = "commandlist" component={CommandList}/>
            <Route path = "glossary" component={Glossary}/>
          </Route>
          <Route path="about" component={About} />
          <Route path="channel" component={Channel} />
        </Route>
      </Router>
    </Provider>
);