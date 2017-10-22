import { SIGN_UP_SUCCESS } from '../features/sign-up/signUpReducer';
import { LOGIN_SUCCESS } from '../features/login/loginReducer';

const initialState = {
  isLoggedIn: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

