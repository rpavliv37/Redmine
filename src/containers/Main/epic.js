import { Observable } from 'rxjs';
import _ from 'lodash';
import moment from 'moment';
import { combineEpics } from 'redux-observable';
import { handleError } from '../../api_helper';
import * as MainTypes from './constants';
import {
  saveListOfTasks, saveTodaySpentTime, saveMyProjects, saveAllListOfTasks
} from './actions';
import { addNotification } from '../NotificationGenerator/actions';
import axiosInstance from '../../axios';
import {decode as atob, encode as btoa} from 'base-64'


function getAllListOfTasksEpic($action, $state) {
  return $action.ofType(MainTypes.GET_ALL_LIST_OF_TASKS)
    .map((action) => action.payload)
    .switchMap(() => {
      const { signIn: { user_cred } } = $state.getState();
      const objResponse = {
        headers: {
          'Authorization': 'Basic ' + btoa(user_cred.username + ':' + user_cred.password)
        }
      };

      return Observable.fromPromise(axiosInstance.get(`/issues.json?assigned_to_id=me`, objResponse))
        .catch(handleError)
    })
    .map((result) => (
      result && result.data ? saveAllListOfTasks(result.data) : saveMyProjects(result.data)
    ));
}

function getTodaySpentTimeEpic($action, $state) {
  return $action.ofType(MainTypes.GET_TODAY_SPENT_TIME)
    .map((action) => action.payload)
    .switchMap(() => {
      const { signIn: { user_cred } } = $state.getState(); 
      return Observable.fromPromise(axiosInstance.get(`/time_entries.json?user_id=me&spent_on=t&limit=1000`, {
        headers: {
          'Authorization': 'Basic ' + btoa(user_cred.username + ':' + user_cred.password)
        }
      }))
        .catch(handleError)
    })
    .map((result) => (
      result && result.data ? saveTodaySpentTime(result.data) : saveMyProjects(result.data)
    ));
}

export default combineEpics(
  getTodaySpentTimeEpic,
  getAllListOfTasksEpic
);