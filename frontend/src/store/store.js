import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import loginReducer from './login/reducers';
import registerReducer from './register/reducers';
import productReducer from './product/reducer';
import productsReducer from './products/reducer';

const store = createStore(
  combineReducers({
    login: loginReducer,
    register: registerReducer,
    product: productReducer,
    products: productsReducer,
  }),

  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
