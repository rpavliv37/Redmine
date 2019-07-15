import * as actionTypes from './constants';

const initialState = {
    verifyingJWT: true
  };
  
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case actionTypes.USER_LOGOUT: {
        return {};
      }
      case actionTypes.SIGN_IN_GO_BACK_IF_SUCC:
        return state.userDevices
          ? state
          : {
            needGoBackAfterLogin: action.payload.needGoBackAfterLogin
          };
      case actionTypes.SIGN_IN_UPDATE_USER:
      case actionTypes.SIGN_IN_VALID_JWT:
      case actionTypes.SIGN_IN_RECEIVED:
        return {
          user: action.payload.user
        };
      case actionTypes.SIGN_IN_INVALID_JWT:
        return {
          needGoBackAfterLogin: state.needGoBackAfterLogin
        };
      default:
        return state;
    }
  };