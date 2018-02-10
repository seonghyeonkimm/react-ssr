import 'isomorphic-fetch';
import path from 'path';
import serialize from 'serialize-javascript';
import App from 'Shared/App.jsx';
import React from 'react';
import express from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import configureStore from 'Shared/configureStore';
import routes from 'Shared/routes';
import fs from 'fs';


const app = express();
app.use('/', express.static(path.resolve(__dirname, 'assets')));
app.get('*', (req, res, next) => {
  const context = {};
  const store = configureStore();
  // when component, getInitialData static method exsits, first prepare initialState
  const promises = routes.reduce((actions, route) => {
    const requestInfo = matchPath(req.url, route);
    if (requestInfo && route.component && route.component.getInitialData) {
      const { params } = requestInfo;
      actions.push(Promise.resolve(store.dispatch(route.component.getInitialData(params))));
    }
    return actions;
  }, []);

  // when preparation is done, start to rendering
  Promise.all(promises)
    .then(() => {
      const application = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );
      const finalState = store.getState();

      // don't need to know when this functions ends cause this is the last one
      fs.readFile(path.resolve(__dirname, 'assets/page.html'), 'utf-8', (err, html) => {
        const finalHtml = html
          .replace('<!--application-->', application)
          .replace('<!--initialState-->', `window.__APP_INITIAL_STATE__ = ${serialize(finalState)};`)
        res.status(200).send(finalHtml);
      });
    })
    .catch(next)
});


const PORT = process.env.port || '3000';
app.listen(PORT, () => console.log(`server is listening to the port ${PORT}`))
