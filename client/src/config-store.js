import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { authReducer } from './reducers/authReducer';
import { preferenceEpic, preferenceReducer } from './features/preference/preferenceReducer';

const epics = combineEpics(preferenceEpic);
const epicMiddleware = createEpicMiddleware(epics);

const initialState = {};
const middlewares = compose(
  applyMiddleware(epicMiddleware),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    preference: preferenceReducer,
  }),
  initialState,
  middlewares,
);

export default store;
