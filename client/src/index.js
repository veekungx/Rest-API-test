import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import store from './config-store';
import { loginSuccess } from './features/login/loginReducer';

const token = localStorage.getItem('token');
// automatic signin user
if (token) {
  store.dispatch(loginSuccess());
}
console.log(process.env.REACT_APP_API_URI);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
