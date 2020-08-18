import actions from './actionTypes';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ? { registered: true, user } : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER_REQUEST:
      return {
        user: action.user,
      };
    case actions.REGISTER_SUCCESS:
      return {
        user: action.user,
      };
    case actions.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
