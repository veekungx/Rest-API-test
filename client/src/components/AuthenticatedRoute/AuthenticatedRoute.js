import React from 'react';
import { object, bool, func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './AuthenticatedRoute.scss';

const AuthenticatedRoute =
  ({
    // HOC connect props
    isLoggedIn,

    // HOC react-router-dom props
    location,

    // props
    component: Component,
    ...rest
  }) =>
    (
      <Route
        {...rest}
        render={props =>
          (isLoggedIn
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: location } }} />
          )}
      />
    );

AuthenticatedRoute.propTypes = {
  isLoggedIn: bool,
  location: object,
  component: func,
};
AuthenticatedRoute.defaultProps = {
  isLoggedIn: false,
  location: '',
  component: undefined,
};

const mapState = state => ({ isLoggedIn: state.auth.isLoggedIn });
export default connect(mapState)(AuthenticatedRoute);
