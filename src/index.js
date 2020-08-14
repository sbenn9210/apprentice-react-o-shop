import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import configureFakeBackend from './utils/fake-backend';

configureFakeBackend();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
