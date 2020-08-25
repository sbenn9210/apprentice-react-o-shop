import handleResponse from './handle-response';

export const productService = {
  addProduct,
  updateProduct,
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
