import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'  

// Route Handlers
import Landing from     './routes/landing';
import Races from       './routes/landing/routes/races';
import FAQ from         './routes/landing/routes/faq';
import About from       './routes/landing/routes/about';
import Channel from     './routes/landing/routes/channel';
import Tools from       './routes/landing/routes/tools';
import Promotion from   './routes/landing/routes/promotion';
import Streams from     './routes/landing/routes/streams';
import GameList from    './routes/landing/routes/races/routes/gameList'
import PastResults from './routes/landing/routes/races/routes/pastResults';
import RaceStats from   './routes/landing/routes/races/routes/raceStats';


// Display Components
import NotFound from      './routes/error/components/notFound';

import AlphaList from     './routes/landing/routes/races/routes/gameList/containers/AlphaList';
import PopularList from   './routes/landing/routes/races/routes/gameList/containers/PopularList';
import RaceStatsBody from './routes/landing/routes/races/routes/raceStats/components/raceStatsBody';

import FAQBody from       './routes/landing/routes/faq/components/faqBody';
import Rules from         './routes/landing/routes/faq/routes/rules/components/rules';
import CommandList from   './routes/landing/routes/faq/routes/commandList/components/commandList';
import Glossary from      './routes/landing/routes/faq/routes/glossary/components/glossary';
import Registration from  './routes/landing/routes/faq/routes/registration/components/registration';

import ChannelBody from   './routes/landing/routes/channel/components/channelBody';
import ToolsBody from     './routes/landing/routes/tools/components/toolsBody';
import AboutBody from     './routes/landing/routes/about/components/aboutBody';
import PromoBody from     './routes/landing/routes/promotion/components/promoBody';
import StreamsContainer from './routes/landing/routes/streams/containers/streams';


export default function (props = {}) {
  let history = browserHistory;

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store)
  }

  return ( 
    <Router history={history}>
      <Route path="/" component={Landing}>
        <IndexRoute component={StreamsContainer}/>
        <Route path="streams" component={Streams}>
          <IndexRedirect to="/"/>
        </Route>
        <Route path="races" component={Races}>
          <Route path="gamelist" component={GameList}>
            <IndexRedirect to="popular" />
            <Route path="popular" component={PopularList} />
            <Route path="alphabetical" component={AlphaList} />
          </Route>
         <Route path="pastresults" component={PastResults} />
         <Route path="racestats" component={RaceStats}>
           <IndexRoute component={RaceStatsBody} />
         </Route>
        </Route>
        <Route path="faq" component={FAQ}>
          <IndexRoute component={FAQBody}/>
          <Route path="rules" component={Rules}/>
          <Route path="commandlist" component={CommandList}/>
          <Route path="glossary" component={Glossary}/>
          <Route path="registration" component={Registration}/>
        </Route>
        <Route path="about" component={About} >
          <IndexRoute component={AboutBody}/>
        </Route>
        <Route path="channel" component={Channel}>
          <IndexRoute component={ChannelBody}/>
        </Route>
        <Route path="tools" component={Tools}>
          <IndexRoute component={ToolsBody} />
        </Route>
        <Route path="promotion" component={Promotion}>
          <IndexRoute component={PromoBody} /> 
        </Route>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
};