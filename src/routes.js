import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Pages
import Landing from './routes/landing';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Landing} />
    </Router>
);