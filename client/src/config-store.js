import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {};
const middlewares = compose(
  applyMiddleware(),
  (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
);

const store = createStore(
  combineReducers({
    form: formReducer,
  }),
  initialState,
  middlewares,
);

export default store;
