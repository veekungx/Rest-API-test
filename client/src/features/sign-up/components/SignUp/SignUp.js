import React from 'react';
import axios from 'axios';
import { bool, func, any } from 'prop-types';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import { Link } from 'react-router-dom';

import './SignUp.scss';
import { signupSuccess } from '../../signUpReducer';

const SignUp =
  ({
    // HOC reduxForm props
    submitting,
    error,
    // HOC reduxForm events
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
          disabled={submitting}
        >
          {submitting
            ? 'SIGNING UP...'
            : 'SIGN UP'
          }
        </button>
        {error &&
          <div className="SignUp__error">FAIL, Please try again</div>
        }
        <div className="SignUp__login">
          Already have account? <Link href to="/login">Login</Link>
        </div>
      </form>
    );

SignUp.propTypes = {
  submitting: bool,
  error: any,
  handleSubmit: func,
};
SignUp.defaultProps = {
  submitting: false,
  error: undefined,
  handleSubmit: undefined,
};

export default SignUp;

export const SignUpForm = reduxForm({
  form: 'signup',
  onSubmit: (values) => {
    const { email, password } = values;
    return axios.post('http://localhost:4000/users', { email, password })
      .catch(() => {
        throw new SubmissionError({ _error: true });
      });
  },
  onSubmitSuccess: (result, dispatch, props) => {
    dispatch(signupSuccess());
    const { token } = result.data;
    localStorage.setItem('token', token);
    props.history.push('/user/preference');
  },
  onSubmitFail: () => {

  },
})(SignUp);
