import * as actionTypes from './constants';

export const signIn = (data, navigate) => ({
  type: actionTypes.SIGN_IN,
  payload: {
    data,
    navigate
  }
});

export const receiveSignIn = (data) => ({
  type: actionTypes.SIGN_IN_RECEIVED,
  payload: {
    data
  }
});

export const cancelSignIn = (message) => ({
  type: actionTypes.SIGN_IN_CANCELED,
  payload: {
    message
  }
});

export const logOut = () => ({
  type: actionTypes.USER_LOGOUT
});

export const signInCheckJWT = () => ({
  type: actionTypes.SIGN_IN_CHECK_JWT
});

export const signInValidJWT = (user) => ({
  type: actionTypes.SIGN_IN_VALID_JWT,
  payload: {
    user
  }
});

export const signInInvalidJWT = () => ({
  type: actionTypes.SIGN_IN_INVALID_JWT
});

export const signInUpdateUser = (user) => ({
  type: actionTypes.SIGN_IN_UPDATE_USER,
  payload: {
    user
  }
});