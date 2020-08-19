import actions from './actionTypes';

const product = {};

const initialState = product ? { isLoading: false, product } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.PRODUCT_REQUEST:
      return {
        isLoading: true,
      };
    case actions.PRODUCT_SUCCESS:
      return {
        isLoading: false,
        product: action.product,
      };
    case actions.PRODUCT_FAILURE:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
