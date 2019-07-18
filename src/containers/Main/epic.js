import { Observable } from 'rxjs';
import _ from 'lodash';
import { combineEpics } from 'redux-observable';
import { handleErrorDetailed } from '../../api_helper';
import strapi from '../../strapi';
import * as MainTypes from './constants';
import {
  receiveUserInfo, cancelUserInfo, changePrioritySuccess, cancelChangePriority, devicesSaveTypesAndNames, getListOfIP, saveIP
} from './actions';
import { addNotification } from '../NotificationGenerator/actions';

function getListOfTasksEpic($action, $state) {
  return action$.ofType(MainTypes.SIGN_IN)
    .map((action) => action.payload)
    .switchMap(({
      rememberMe, username, password
    }) => {
      const { modals: { searchIP: { opened } } } = $state.getState();
      return Observable.fromPromise(axiosInstance.post(`/login`, {
        params: {
          rememberMe,
          username,
          password
        }
      }))
        .catch(handleError)
    })
    .map((result) => (
      result && result.data ? receiveSignIn(result.data, remember) : cancelSignIn(result)
    ));
}

export default combineEpics(
  getUserInfoEpic, changePriorityEpic, changePrioritySuccessEpic, devicesGetTNEpic, scanIPEpic, getListOfIPEpic
);