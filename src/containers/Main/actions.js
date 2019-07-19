import * as actionTypes from './constants';

export const getListOfTasks = (project_id) => ({
  type: actionTypes.GET_LIST_OF_TASKS,
  payload: {
    project_id
  }
});

export const saveListOfTasks = (data) => ({
  type: actionTypes.SAVE_LIST_OF_TASKS,
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

export const saveTodaySpentTime = (data) => ({
  type: actionTypes.SAVE_TODAY_SPENT_TIME,
  payload: {
    data
  }
});
