import * as actionTypes from './constants';

const initialState = {};
  
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.SAVE_PROJECT_MEMBERS:
      return {
        ...state,
        project_members: action.payload.data
      };
    default:
      return state;
  }
};