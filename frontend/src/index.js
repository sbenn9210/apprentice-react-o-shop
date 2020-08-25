import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/bootstrap.min.css';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';
import store from './store/store';
import configureFakeBackend from './utils/fake-backend';
import history from './utils/history';

import { productsActions } from './store/products/action';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query books {
        books {
          title
          author
          url
        }
      }
    `,
  })
  .then((books) =>
    store.dispatch(productsActions.getProducts(books.data.books))
  );

configureFakeBackend();

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
