import React from 'react';
import { Route, Switch } from 'react-router';

import PrivateRoute from './components/shared/private-route';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import routes from './utils/routes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={routes.login} component={Login} />
        <Route path={routes.register} component={Register} />
        <PrivateRoute path={routes.home} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
