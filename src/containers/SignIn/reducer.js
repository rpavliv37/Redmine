import * as actionTypes from './constants';

const initialState = {
    verifyingJWT: true
  };
  
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.USER_LOGOUT: {
      return {};
    }
    case actionTypes.SIGN_IN:
    return {
      ...state,
      user_cred: action.payload.data
    };
    case actionTypes.SIGN_IN_RECEIVED:
    return {
      ...state,
      data: action.payload.data
    };
    default:
      return state;
  }
};