import { ApolloClient, InMemoryCache, gql} from '@apollo/client'

import handleResponse from './handle-response';


const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL;

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export const productService = {
  addProduct,
  updateProduct,
  getProducts
};

function addProduct(product) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  };

  return fetch(`http://localhost:4000/products/add`, requestOptions).then(
    handleResponse
  );
}

function updateProduct(product) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  };

  return fetch(`http://localhost:4000/products/edit`, requestOptions).then(
    handleResponse
  );
}


async function getProducts() {
  const products = await client
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

  console.log(products)
  return products.data.books
}
