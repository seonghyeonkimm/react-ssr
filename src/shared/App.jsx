import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'Shared/routes';


const App = () => (
  <div className="app-container">
    <Switch>
      {
        routes.map((route, i) => (
          <Route key={i} {...route} />
        ))
      }
    </Switch>
  </div>
);

export default App;
