import reducer from './authReducer';
import { signupSuccess } from '../features/sign-up/signUpReducer';
import { loginSuccess } from '../features/login/loginReducer';

describe('Auth Reducer', () => {
  it('should return initial state', () => {
    const stateAfter = {
      isLoggedIn: false,
    };

    expect(reducer(undefined)).toEqual(stateAfter);
  });

  it('should handle SIGN_UP_SUCCESS', () => {
    const stateBefore = {
      isLoggedIn: false,
    };
    const stateAfter = {
      isLoggedIn: true,
    };

    expect(reducer(stateBefore, signupSuccess())).toEqual(stateAfter);
  });

  it('should handle LOGIN_SUCCESS', () => {
    const stateBefore = {
      isLoggedIn: false,
    };
    const stateAfter = {
      isLoggedIn: true,
    };

    expect(reducer(stateBefore, loginSuccess())).toEqual(stateAfter);
  });
});
