import React from 'react';
import { func } from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { compose, withHandlers } from 'recompose';

import './SignUp.scss';

const SignUp =
  ({
    // HOC redux-form events
    handleSubmit,
  }) =>
    (
      <form
        className="SignUp"
        onSubmit={handleSubmit}
      >
        <div className="SignUp__title">SIGN UP</div>
        <Field
          name="email"
          component="input"
          className="SignUp__emailField"
        />
        <Field
          name="password"
          component="input"
          type="password"
          className="SignUp__passwordField"
        />
        <button
          type="submit"
          className="SignUp__signupButton"
        >
          SIGN UP
        </button>
      </form>
    );

SignUp.propTypes = {
  handleSubmit: func,
};
SignUp.defaultProps = {
  handleSubmit: undefined,
};

export default SignUp;

export const SignUpForm = compose(
  withHandlers({
    onSubmit: props => (event) => {
      console.log(props);
      console.log(event);
    },
  }),
  reduxForm({ form: 'signup' }),
)(SignUp);
