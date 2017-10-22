// CONST
export const LOGIN_REQUEST = 'login/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAIL = 'login/LOGIN_SUCCESS';

// action creators

export const loginRequest = () => ({ type: LOGIN_REQUEST });
export const loginSuccess = () => ({ type: LOGIN_SUCCESS });
export const loginFail = () => ({ type: LOGIN_FAIL });

// reducers
export const loginReducer = (state = {}, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
