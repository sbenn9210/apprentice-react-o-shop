import actions from './actionTypes';

const products = JSON.parse(localStorage.getItem('products'));

const initialState = products ? { isLoading: false, products } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.PRODUCTS_REQUEST:
      return {
        isLoading: true,
      };
    case actions.PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.products,
      };
    case actions.PRODUCTS_FAILURE:
      return {
        isLoading: false,
      };
    case actions.PRODUCTS_UPDATE_REQUEST:
      return {
        isLoading: true,
      };
    case actions.PRODUCT_UPDATE_SUCCESS:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.product.id ? action.product : product
        ),
      };
    case actions.PRODUCT_UPDATE_FAILURE:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
