import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { signupReducer, signUpEpic } from './features/sign-up/signUpReducer';


const epics = combineEpics(signUpEpic);
const epicMiddleware = createEpicMiddleware(epics);

const initialState = {};
const middlewares = compose(
  applyMiddleware(epicMiddleware),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const store = createStore(
  combineReducers({
    form: formReducer,
    signup: signupReducer,
  }),
  initialState,
  middlewares,
);

export default store;
