import { Observable } from 'rxjs';
import _ from 'lodash';
import moment from 'moment';
import { combineEpics } from 'redux-observable';
import { handleError } from '../../api_helper';
import * as MainTypes from './constants';
import {
  saveProjectMembers, createNewTask
} from './actions';
import { addNotification } from '../NotificationGenerator/actions';
import axiosInstance from '../../axios';
import {decode as atob, encode as btoa} from 'base-64';

function getProjectMembersEpic($action, $state) {
  return $action.ofType(MainTypes.GET_PROJECT_MEMBERS)
    .map((action) => action.payload)
    .switchMap((project_id) => {
      const { signIn: { user_cred } } = $state.getState();
      const objResponse = {
        headers: {
          'Authorization': 'Basic ' + btoa(user_cred.username + ':' + user_cred.password)
        }
      };
      console.log('objResponse!!!', objResponse);

      return Observable.fromPromise(axiosInstance.get(`/projects/${project_id.project_id}/memberships.json`, objResponse))
        .catch(handleError)
    })
    .map((result) => (
      result && result.data ? saveProjectMembers(result.data) : saveProjectMembers(result.data)
    ));
}

function createNewTaskEpic($action, $state) {
  return $action.ofType(MainTypes.CREATE_NEW_TASK)
    .map((action) => action.payload)
    .switchMap((data) => {
      const { signIn: { user_cred } } = $state.getState();
      const objResponse = {
        headers: {
          'Authorization': 'Basic ' + btoa(user_cred.username + ':' + user_cred.password)
        },
        params: {
          issue: {
            ...data.data
          }
        }
      };
      console.log('objResponse', objResponse);

      return Observable.fromPromise(axiosInstance.post(`/issues.json`, objResponse))
        .catch(handleError)
    })
    .map((result) => (
      result && result.data ? console.log(result) : console.log(result)
    ));
}

export default combineEpics(
  getProjectMembersEpic,
  createNewTaskEpic
);