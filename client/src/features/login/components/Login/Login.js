import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import './Login.scss';

const Login =
  ({
    // HOC redux-form props
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
        />
        <Field
          name="password"
          component="input"
          type="password"
          className="Login__passwordField"
        />
        <button
          className="Login__loginButton"
          type="submit"
        >
          LOGIN
        </button>
      </form>
    );

Login.propTypes = {
  handleSubmit: func,
};
Login.defaultProps = {
  handleSubmit: undefined,
};

export default Login;

export const LoginForm = reduxForm({ form: 'login' })(Login);
