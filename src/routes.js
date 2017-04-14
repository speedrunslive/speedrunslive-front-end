import React from 'react';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux'  

// Pages
import Landing from './routes/landing';
import Races from './routes/races';
import FAQ from './routes/faq';
import About from './routes/landing/routes/about';
import Channel from './routes/landing/routes/channel';
import Tools from './routes/tools';
import Promotion from './routes/promotion';

// Components
import NotFound from './routes/error/components/notFound';
import GameList from './routes/races/components/gameList';
import PastResults from './routes/races/components/pastResults';
import AlphaList from './routes/races/containers/AlphaList';
import PopularList from './routes/races/containers/PopularList';
import Rules from './routes/faq/components/rules';
import CommandList from './routes/faq/components/commandList';
import Glossary from './routes/faq/components/glossary';
import FAQBody from './routes/faq/components/faqBody';
import ChannelBody from './routes/landing/routes/channel/components/channelBody';
import ToolsBody from './routes/tools/components/toolsBody';
import AboutBody from './routes/landing/routes/about/components/aboutBody';
import Registration from './routes/faq/components/registration';
import PromoBody from './routes/promotion/components/promoBody';
import StreamsContainer from './routes/landing/containers/streams';

export default function (props = {}) {
  let history = browserHistory;

  if (props.store) {
    history = syncHistoryWithStore(browserHistory, props.store)
  }

  return (
    <Router history={history}>
      <Route path="/" component={Landing}>
        <IndexRoute component={StreamsContainer}/>
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
          <Route path="registration" component={Registration}/>
        </Route>
        <Route path="about" component={About} >
          <IndexRoute component={AboutBody}/>
        </Route>
        <Route path="channel" component={Channel}>
          <IndexRoute component={ChannelBody}/>
        </Route>
        <Route path="tools" component={ToolsBody}/>
        <Route path="promotion" component={PromoBody}/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
};