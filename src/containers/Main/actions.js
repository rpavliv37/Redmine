import * as actionTypes from './constants';

export const getAllListOfTasks = () => ({
  type: actionTypes.GET_ALL_LIST_OF_TASKS,
  payload: {}
});

export const saveAllListOfTasks = (data) => ({
  type: actionTypes.SAVE_ALL_LIST_OF_TASKS,
  payload: {
    data
  }
});

export const getTodaySpentTime = () => ({
  type: actionTypes.GET_TODAY_SPENT_TIME,
  payload: {}
});

export const saveTodaySpentTime = (data) => ({
  type: actionTypes.SAVE_TODAY_SPENT_TIME,
  payload: {
    data
  }
});


export const getSelectedTask = (data) => ({
  type: actionTypes.GET_SELECTED_TASK,
  payload: {
    data
  }
});
