import path from 'path';
import express from 'express';
import React from 'react'
import { DEV, port } from './src/config'
import routes from './src/routes';
import { useRouterHistory, RouterContext, match } from 'react-router'
import { createPage } from './src/utils'
import { renderToString } from 'react-dom/server'
import configureStore from './src/configureStore'
import { Provider } from 'react-redux'

const initialState = {};
const store = configureStore()
const app = express();

function renderApp(props) {
  const components = props.components;

  const Comp = components[components.length - 1].WrappedComponent;
  const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve());

  const initialState = {};
  const store = configureStore(initialState);
  const { location, params, history } = props;

  fetchData({ store })
    .then(() => {
      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...props}/>
        </Provider>
      );

      const state = store.getState();

      return createPage(markup, state);
    })
    .catch((err) => next(err));
}

if (DEV) {
  let webpack = require('webpack');
  let webpackMiddleware = require('webpack-dev-middleware');
  let webpackHotMiddleware = require('webpack-hot-middleware');
  let config = require('./webpack.config.js');

  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true,
    quiet: false,
    lazy: false,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      colors: true,
      errorDetails: true
    }
  });

  const bundlePath = path.join(__dirname, './public/build/index.html');

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

  app.get('*', function response(req, res) {
    match({ routes: routes(), location: req.url }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      } else if (error) {
        res.status(500).send(error.message);
      } else if (renderProps == null) {
        res.status(404).send('Not found');
      } else {
        const components = renderProps.components;

        const Comp = components[components.length - 1].WrappedComponent;
        const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve());

        const initialState = {};
        const store = configureStore(initialState);
        const { location, params, history } = renderProps;

        fetchData({ store })
          .then(() => {
            const markup = renderToString(
              <Provider store={store}>
                <RouterContext {...renderProps}/>
              </Provider>
            );

            const state = store.getState();
            res.write(createPage(markup, state));
            res.end();
          })
          .catch((err) => next(err));
      }
    });
  })
} else {
  const staticPath = path.join(__dirname, 'public/build')
  app.use(express.static(staticPath));
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s.', port);
});