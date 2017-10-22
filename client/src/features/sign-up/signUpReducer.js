import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import axios from 'axios';
import { combineEpics } from 'redux-observable';

const initialState = {
  isLoggedIn: false,
  error: null,
  loading: false,
};

// actions
export const SIGN_UP_REQUEST = 'signup/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'signup/SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'signup/SIGN_UP_ERROR';

// action creators
export const signupRequest = (email, password) => ({ type: SIGN_UP_REQUEST, email, password });
export const signupSuccess = () => ({ type: SIGN_UP_SUCCESS });
export const signupError = error => ({ type: SIGN_UP_ERROR, error });

// epics action streams
export const signUpRequestEpic = action$ =>
  action$
    .ofType(SIGN_UP_REQUEST)
    .switchMap(({ email, password }) =>
      Observable.fromPromise(axios.post('http://localhost:4000/users', { email, password }))
        .map(() => signupSuccess())
        .catch(error => Observable.of(signupError(error))));

// epic
export const signUpEpic = combineEpics(signUpRequestEpic);

// reducer
export const signupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
        loading: false,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
