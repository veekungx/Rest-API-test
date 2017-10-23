import React from 'react';
import axios from 'axios';
import { bool, any, func } from 'prop-types';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';

import { loginSuccess } from '../../loginReducer';
import './Login.scss';

const Login =
  ({
    // HOC redux-form props
    submitting,
    error,
    // HOC redux-form event
    handleSubmit,
  }) =>
    (
      <form
        onSubmit={handleSubmit}
        className="Login"
      >
        <div className="Login__title">LOGIN</div>
        <Field
          name="email"
          component="input"
          className="Login__emailField"
          placeholder="email"
        />
        <Field
          name="password"
          component="input"
          type="password"
          className="Login__passwordField"
          placeholder="password"
        />
        <button
          className="Login__loginButton"
          type="submit"
          disabled={submitting}
        >
          {submitting
            ? 'LOGGING IN'
            : 'LOGIN'
          }
        </button>

        {error &&
          <div className="Login__error">Login failed, please try again</div>
        }

        <div className="Login__signup">
          {"Don't have account. "}  <Link className="Login__signupLink" href to="/sign-up">Sign up</Link>
        </div>

      </form>
    );

Login.propTypes = {
  submitting: bool,
  error: any,
  handleSubmit: func,
};
Login.defaultProps = {
  submitting: false,
  error: undefined,
  handleSubmit: undefined,
};

export default Login;

export const LoginForm = reduxForm({
  form: 'login',
  onSubmit: (values) => {
    const { email, password } = values;
    return axios.post('http://localhost:4000/users/login', { email, password })
      .catch(() => {
        throw new SubmissionError({ _error: 'login fail' });
      });
  },
  onSubmitSuccess: (result, dispatch, props) => {
    const { token } = result.data;
    dispatch(loginSuccess());
    localStorage.setItem('token', token);
    props.history.push('/user/preference');
  },
  onSubmitFail: () => {

  },
})(Login);
