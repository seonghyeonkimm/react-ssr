import 'Shared/style';
import App from 'Shared/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'Shared/configureStore';


const initialState = window.__APP_INITIAL_STATE__;
delete window.__APP_INITIAL_STATE__;
const store = configureStore(initialState);
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
