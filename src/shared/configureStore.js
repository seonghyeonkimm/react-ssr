import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'Reducers';
import logger from 'redux-logger'
import { apiMiddleware } from 'redux-api-middleware';


export default (preloadedState) => (
  createStore(
    reducer,
    preloadedState,
    applyMiddleware(thunk, apiMiddleware, logger),
  )
);
