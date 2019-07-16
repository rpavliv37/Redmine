import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import moment from 'moment';
import { serialize, handleError } from './../../api_helper';
import * as SignInTypes from './constants';
import {
  receiveSignIn,
  cancelSignIn,
  signInCheckJWT,
  logOut
} from './actions';
import axiosInstance from '../../axios';

function signInEpic(action$) {
  return action$.ofType(SignInTypes.SIGN_IN)
    .map((action) => action.payload)
    .switchMap(({
      remember, username, password
    }) => (
      Observable.fromPromise(axiosInstance.post(`https://redmine.indeema.com/my/account.json`, {
        params: {
          remember,
          username,
          password
        }
      }))
        .catch(handleError)
    ))
    .map((result) => (
      result && result.data ? receiveSignIn(result.data, remember) : cancelSignIn(result)
    ));
}

function receiveSignIpEpic(action$) {
  return (
    action$
      .ofType(SignInTypes.SIGN_IN_RECEIVED)
      .map((action) => action.payload)
      .mergeMap(({ user, needGoBack }) => Observable.of(
        signInCheckJWT(),
        needGoBack
          ? goBack()
          : push(user.role.type === 'end_user' ? '/' : '/users/'),
        addNotification({
          type: 'success',
          text: i18n.t('youAreIn')
        })
      )
      )
  );
}

function cancelSignInEpic(action$) {
  return action$
    .ofType(SignInTypes.SIGN_IN_CANCELED)
    .map((action) => action.payload.message)
    .switchMap((message) => Observable.of(
      addNotification({
        type: 'error',
        text: message
      })
    ));
}

function logoutEpic(action$) {
  return action$.ofType(SignInTypes.USER_LOGOUT).switchMap(() => Observable.of(
    strapi.clearToken(),
    push('/login'),
    addNotification({
      type: 'success',
      text: i18n.t('youAreOut')
    })
  ));
}

function signInUpdateUserEpic(action$) {
  return action$
    .ofType(SignInTypes.SIGN_IN_UPDATE_USER)
    .map((action) => action.payload.user)
    .do((user) => {
      const language = user.language.toLowerCase();
      changeLanguageTo(language, true);
    })
    .ignoreElements();
}

export default combineEpics(
  signInEpic,
  receiveSignIpEpic,
  cancelSignInEpic,
  logoutEpic,
  signInUpdateUserEpic
);
