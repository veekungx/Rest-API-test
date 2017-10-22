import { LOGOUT, logout, authReducer } from './authReducer';
import { signupSuccess } from '../features/sign-up/signUpReducer';
import { loginSuccess } from '../features/login/loginReducer';

describe('Auth Reducer', () => {
  describe('action creators', () => {
    it('should return LOGOUT action', () => {
      const expectedAction = {
        type: LOGOUT,
      };
      expect(logout()).toEqual(expectedAction);
    });
  });
  describe('reducer', () => {
    it('should return initial state', () => {
      const stateAfter = {
        isLoggedIn: false,
      };

      expect(authReducer(undefined)).toEqual(stateAfter);
    });

    it('should handle SIGN_UP_SUCCESS', () => {
      const stateBefore = {
        isLoggedIn: false,
      };
      const stateAfter = {
        isLoggedIn: true,
      };

      expect(authReducer(stateBefore, signupSuccess())).toEqual(stateAfter);
    });

    it('should handle LOGIN_SUCCESS', () => {
      const stateBefore = {
        isLoggedIn: false,
      };
      const stateAfter = {
        isLoggedIn: true,
      };

      expect(authReducer(stateBefore, loginSuccess())).toEqual(stateAfter);
    });
  });
});
