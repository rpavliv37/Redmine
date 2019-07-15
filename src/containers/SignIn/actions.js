import * as actionTypes from './constants';

export const signIn = (data) => ({
  type: actionTypes.SIGN_IN,
  payload: {
    data
  }
});

export const receiveSignIn = (user, jwt, remember, needGoBack) => ({
  type: actionTypes.SIGN_IN_RECEIVED,
  payload: {
    user,
    jwt,
    remember,
    needGoBack
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