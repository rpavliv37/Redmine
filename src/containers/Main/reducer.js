import * as actionTypes from './constants';

const initialState = {};
  
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.USER_LOGOUT: {
      return {};
    }
    case actionTypes.GET_LIST_OF_TASKS:
    return {
      ...state,
      tasks_list: action.payload.data
    };
    default:
      return state;
  }
};