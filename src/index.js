import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import store from './store/store';
import configureFakeBackend from './utils/fake-backend';
import history from './utils/history';

configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
