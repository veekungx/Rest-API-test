import {
  // CONST
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  // action creators
  loginRequest,
  loginSuccess,
  loginFail,
  // reducer
  loginReducer,
} from './loginReducer';

describe('Login Reducer', () => {
  describe('action creators', () => {
    it('should create LOGIN_REQUEST action', () => {
      const expectedAction = {
        type: LOGIN_REQUEST,
      };
      expect(loginRequest()).toEqual(expectedAction);
    });
    it('should create LOGIN_SUCCESS action', () => {
      const expectedAction = {
        type: LOGIN_SUCCESS,
      };
      expect(loginSuccess()).toEqual(expectedAction);
    });
    it('should create LOGIN_FAIL action', () => {
      const expectedAction = {
        type: LOGIN_FAIL,
      };
      expect(loginFail()).toEqual(expectedAction);
    });
  });
  describe('reducer', () => {
    it('should return initial state', () => {
      expect(loginReducer(undefined)).toEqual({});
    });
  });
});
