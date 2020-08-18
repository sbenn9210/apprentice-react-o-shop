import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';
import registerReducer from './register/reducers';

const store = createStore(
  combineReducers({
    login: loginReducer,
    register: registerReducer,
  }),

  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
