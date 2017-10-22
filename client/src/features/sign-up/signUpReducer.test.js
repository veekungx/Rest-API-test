import nock from 'nock';
import { createEpicMiddleware } from 'redux-observable';
import configureMockStore from 'redux-mock-store';
import {
  // CONST
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  // actions
  signupRequest,
  signupSuccess,
  signupError,
  // epic
  signUpEpic,
  // reducer
  signupReducer,

} from './signUpReducer';

describe('signUpReducer', () => {
  describe('actions', () => {
    it('should create SIGN_UP action', () => {
      const email = 'test@email.com';
      const password = '123456';
      const expectedAction = {
        type: SIGN_UP_REQUEST,
        email,
        password,
      };
      expect(signupRequest(email, password)).toEqual(expectedAction);
    });

    it('should create SIGN_UP_SUCCESS', () => {
      const expectedAction = {
        type: SIGN_UP_SUCCESS,
      };
      expect(signupSuccess()).toEqual(expectedAction);
    });

    it('should create SIGN_UP_ERROR', () => {
      const error = new Error('Something');
      const expectedAction = {
        type: SIGN_UP_ERROR,
        error,
      };
      expect(signupError(error)).toEqual(expectedAction);
    });
  });
  describe('reducer', () => {
    it('should return initial state', () => {
      const stateBefore = undefined;
      const stateAfter = {
        isLoggedIn: false,
        error: null,
      };
      expect(signupReducer(stateBefore, undefined)).toEqual(stateAfter);
    });

    it('should handle SIGN_UP_SUCCESS', () => {
      const stateBefore = {
        isLoggedIn: false,
        error: null,
      };
      const stateAfter = {
        isLoggedIn: true,
        error: null,
      };

      expect(signupReducer(stateBefore, signupSuccess())).toEqual(stateAfter);
    });

    it('should handle SIGN_UP_ERROR', () => {
      const error = new Error('Some Error');
      const stateBefore = {
        isLoggedIn: false,
        error: null,
      };
      const stateAfter = {
        isLoggedIn: false,
        error,
      };
      expect(signupReducer(stateBefore, signupError(error))).toEqual(stateAfter);
    });
  });
  describe('epics', () => {
    describe('signupRequestEpic', () => {
      it('should handle SIGN_UP_SUCCESS action', () => {
        const payload = { _id: '1234' };
        nock('http://localhost:4000')
          .post('/users')
          .reply(200, payload);

        const email = 'test@email.com';
        const password = 'test@password.com';
        const epicMiddleware = createEpicMiddleware(signUpEpic);
        const mockStore = configureMockStore([epicMiddleware]);
        const store = mockStore();

        store.dispatch(signupRequest(email, password));
        expect(store.getActions()).toEqual([
          signupRequest(email, password),
          signupSuccess(),
        ]);
      });
    });
  });
});
