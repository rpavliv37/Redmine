import * as actionTypes from './constants';

const initialState = {};
  
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.USER_LOGOUT: {
      return {};
    }
    case actionTypes.SAVE_ALL_LIST_OF_TASKS:
      return {
        ...state,
        all_tasks_list: action.payload.data
      };
    case actionTypes.SAVE_TODAY_SPENT_TIME:
    return {
      ...state,
      spent_time: action.payload.data.time_entries
    };
    default:
      return state;
  }
};