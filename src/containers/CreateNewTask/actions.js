import * as actionTypes from './constants';

export const getProjectMembers = (project_id) => ({
  type: actionTypes.GET_PROJECT_MEMBERS,
  payload: {
    project_id
  }
});

export const saveProjectMembers = (data) => ({
  type: actionTypes.SAVE_PROJECT_MEMBERS,
  payload: {
    data
  }
});

export const createNewTask = (data) => ({
  type: actionTypes.CREATE_NEW_TASK,
  payload: {
    data
  }
});