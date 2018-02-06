import 'Shared/style';
import App from 'Shared/App';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
