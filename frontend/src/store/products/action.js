import actionTypes from './actionTypes';
import { productService } from '../../services/product-service';

export const productsActions = {
  getProducts,
  updateProduct,
};

function getProducts(products) {
  return (dispatch) => {
    Promise.resolve(dispatch({ type: actionTypes.PRODUCTS_REQUEST })).then(
      () => {
        dispatch({ type: actionTypes.PRODUCTS_SUCCESS, products });
      },
      (error) => {
        alert(error);
        dispatch({ type: actionTypes.PRODUCTS_FAILURE, error });
      }
    );
  };
}

function updateProduct(product) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PRODUCT_UPDATE_REQUEST,
    });

    productService.updateProduct(product).then(
      (product) => {
        dispatch({ type: actionTypes.PRODUCT_UPDATE_SUCCESS, product });
      },
      (error) => {
        alert(error);
        dispatch({ type: actionTypes.PRODUCT_UPDATE_FAILURE, error });
      }
    );
  };
}
