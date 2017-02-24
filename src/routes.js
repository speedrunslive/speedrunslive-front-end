import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore'

// Pages
import Landing from './routes/landing';
import Races from './routes/races';
import FAQ from './routes/faq';
import About from './routes/about';
import Channel from './routes/channel';

// Components
import GameList from './routes/races/components/gameList';
import PastResults from './routes/races/components/pastResults';
import AlphaList from './routes/races/containers/AlphaList';
import PopularList from './routes/races/containers/PopularList';
import Rules from './routes/faq/components/rules';
import CommandList from './routes/faq/components/commandList';
import Glossary from './routes/faq/components/glossary';
import FAQBody from './routes/faq/components/faq';

const store = configureStore()

export default (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Landing}>
          <Route path="races" component={Races}>
            <Route path="gamelist" component={GameList}>
              <IndexRedirect to="/races/gamelist/popular" />
              <Route path="alphabetical" component={AlphaList} />
              <Route path="popular" component={PopularList} />
            </Route>
            <Route path="pastresults" component={PastResults} />
          </Route>
		      <Route path="faq" component={FAQ}>
            <IndexRoute component={FAQBody}/>
            <Route path="rules" component={Rules}/>
            <Route path="commandlist" component={CommandList}/>
            <Route path="glossary" component={Glossary}/>
          </Route>
          <Route path="about" component={About} />
          <Route path="channel" component={Channel} />
        </Route>
      </Router>
    </Provider>
);