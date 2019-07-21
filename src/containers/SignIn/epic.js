import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { serialize, handleError } from './../../api_helper';
import * as SignInTypes from './constants';

import {
  receiveSignIn,
  cancelSignIn,
  logOut
} from './actions';
import { addNotification } from '../NotificationGenerator/actions';
import axiosInstance from '../../axios';
import {decode as atob, encode as btoa} from 'base-64'


function signInEpic($action, $state) {
  return $action.ofType(SignInTypes.SIGN_IN)
    .map((action) => action.payload)
    .switchMap(({ navigate }) => {
      const { signIn: { user_cred } } = $state.getState();
      return Observable.fromPromise(axiosInstance.get(`/users/current.json`, {
        headers: {
          'Authorization': 'Basic ' + btoa(user_cred.username + ':' + user_cred.password)
        }
      }))
        .catch(handleError)
        .map((result) => {
          result && result.data && navigate('Main')
          return result && result.data ? receiveSignIn(result.data) : cancelSignIn(result)
        })
    })
    // .map((result) => (

    //   result && result.data ? receiveSignIn(result.data) : cancelSignIn(result)
    // ));
}


// function receiveSignIpEpic(action$) {
//   return (
//     action$
//       .ofType(SignInTypes.SIGN_IN_RECEIVED)
//       .map((action) => action.payload)
//       .mergeMap(({ user, needGoBack }) => Observable.of(
//         signInCheckJWT(),
//         needGoBack
//           ? goBack()
//           : push(user.role.type === 'end_user' ? '/' : '/users/'),
//         addNotification({
//           type: 'success',
//           text: i18n.t('youAreIn')
//         })
//       )
//       )
//   );
// }

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
  cancelSignInEpic,
  logoutEpic,
  signInUpdateUserEpic
  // getListOfTasksEpic
);
