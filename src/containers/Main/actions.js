import * as actionTypes from './constants';

export const getListOfTasks = (data) => ({
  type: actionTypes.GET_LIST_OF_TASKS,
  payload: {
    data
  }
});

export const getTodaySpentTime = (data) => ({
  type: actionTypes.GET_TODAY_SPENT_TIME,
  payload: {
    data
  }
});