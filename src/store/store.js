import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loginReducer from './login/reducer';

const store = createStore(
  combineReducers({
    login: loginReducer,
  }),
  composeWithDevTools()
);

export default store;
