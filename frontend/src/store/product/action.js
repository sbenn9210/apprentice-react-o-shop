import actionTypes from './actionTypes';
import { productService } from '../../services/product-service';
import { productsActions } from '../../store/products/action';

export const productActions = {
  createProduct,
};

function createProduct(title, price, category, image) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.PRODUCT_REQUEST,
    });

    productService
      .addProduct({ title, price, category, image })
      .then(
        (product) => {
          dispatch({
            type: actionTypes.PRODUCT_SUCCESS,
            product,
          });
        },
        (error) => {
          alert(error);
          dispatch({ type: actionTypes.PRODUCT_FAILURE, error });
        }
      )
      .then(() => {
        //TODO: {This needs to be refactored to add a product using the product-form}
         productService.getProducts()
      }).then(books => dispatch(productsActions.getProducts(books))
      )
  };
}
