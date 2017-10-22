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

    it('should create SIGN_UP_SUCCESS action', () => {
      const expectedAction = {
        type: SIGN_UP_SUCCESS,
      };
      expect(signupSuccess()).toEqual(expectedAction);
    });

    it('should create SIGN_UP_ERROR action', () => {
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
        loading: false,
      };
      expect(signupReducer(stateBefore, undefined)).toEqual(stateAfter);
    });

    it('should handle SIGN_UP_REQUEST', () => {
      const stateBefore = {
        isLoggedIn: false,
        error: null,
        loading: false,
      };

      const stateAfter = {
        isLoggedIn: false,
        error: null,
        loading: true,
      };
      expect(signupReducer(stateBefore, signupRequest())).toEqual(stateAfter);
    });

    it('should handle SIGN_UP_SUCCESS', () => {
      const stateBefore = {
        isLoggedIn: false,
        loading: true,
        error: null,
      };
      const stateAfter = {
        isLoggedIn: true,
        loading: false,
        error: null,
      };

      expect(signupReducer(stateBefore, signupSuccess())).toEqual(stateAfter);
    });

    it('should handle SIGN_UP_ERROR', () => {
      const error = new Error('Some Error');
      const stateBefore = {
        isLoggedIn: false,
        loading: true,
        error: null,
      };
      const stateAfter = {
        isLoggedIn: false,
        loading: false,
        error,
      };
      expect(signupReducer(stateBefore, signupError(error))).toEqual(stateAfter);
    });
  });
  describe('epics', () => {
    describe('signupRequestEpic', () => {
      xit('should handle SIGN_UP_SUCCESS action', async () => {
        const email = 'test@email.com';
        const password = 'test@password.com';
        const epicMiddleware = createEpicMiddleware(signUpEpic);
        const mockStore = configureMockStore([epicMiddleware]);
        const store = mockStore();

        nock('http://localhost:4000')
          .post('/users', { email, password })
          .reply(200, { _id: '1234' });

        store.dispatch(signupRequest(email, password));
        expect(store.getActions()).toEqual([
          signupRequest(email, password),
          signupSuccess(),
        ]);
      });
    });
  });
});
