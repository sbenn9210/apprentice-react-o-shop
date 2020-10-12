import actionTypes from './actionTypes';
import { userService } from '../../services/user-service';
import history from '../../utils/history';

export const registerActions = {
  register,
};

function register(firstName, lastName, username, password) {
  return (dispatch) => {
    dispatch({ type: actionTypes.REGISTER_REQUEST, user: { username } });

    userService.register(firstName, lastName, username, password).then(
      (user) => {
        dispatch({ type: actionTypes.REGISTER_SUCCESS, user });
        history.push('/login');
      },
      (error) => {
        alert(error);
        dispatch({ type: actionTypes.REGISTER_FAILURE, error });
      }
    );
  };
}
