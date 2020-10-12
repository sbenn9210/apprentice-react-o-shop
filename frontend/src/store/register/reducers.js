import actions from './actionTypes';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { registered: true, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        isLoading: true,
      };
    case actions.REGISTER_SUCCESS:
      return {
        isLoading: false,
        user: action.user,
      };
    case actions.REGISTER_FAILURE:
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};
