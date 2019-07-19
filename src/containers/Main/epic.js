import { Observable } from 'rxjs';
import _ from 'lodash';
import moment from 'moment';
import { combineEpics } from 'redux-observable';
import { handleError } from '../../api_helper';
import * as MainTypes from './constants';
import {
  saveListOfTasks, saveTodaySpentTime
} from './actions';
import { addNotification } from '../NotificationGenerator/actions';
import axiosInstance from '../../axios';

function getListOfTasksEpic($action, $state) {
  return $action.ofType(MainTypes.GET_LIST_OF_TASKS)
    .map((action) => action.payload)
    .switchMap(({...project_id}) => {
      const { signIn: { user_cred } } = $state.getState();
      const objResponse = {
        headers: {
          'Authorization': 'Basic ' + btoa(user_cred.username + ':' + user_cred.password)
        }
      };
      if(project_id.project_id !== undefined) {
        objResponse.params = project_id
      }
      return Observable.fromPromise(axiosInstance.get(`/issues.json?assigned_to_id=me`, objResponse))
        .catch(handleError)
    })
    .map((result) => (
      result && result.data ? saveListOfTasks(result.data) : console.log('result', result)
    ));
}

function getTodaySpentTimeEpic($action, $state) {
  return $action.ofType(MainTypes.GET_TODAY_SPENT_TIME)
    .map((action) => action.payload)
    .switchMap(() => {
      const { signIn: { user_cred } } = $state.getState(); 
      return Observable.fromPromise(axiosInstance.get(`time_entries.json?user_id=me&spent_on=t&limit=1000`, {
        headers: {
          'Authorization': 'Basic ' + btoa(user_cred.username + ':' + user_cred.password)
        }
      }))
        .catch(handleError)
    })
    .map((result) => (
      result && result.data ? saveTodaySpentTime(result.data) : console.log('result', result)
    ));
}

export default combineEpics(
  getListOfTasksEpic,
  getTodaySpentTimeEpic
);