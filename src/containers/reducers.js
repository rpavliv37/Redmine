import { combineReducers } from 'redux';
import signIn from './SignIn/reducer';
import { reducer as reduxReducer } from 'redux-form';

export default combineReducers({
    form: reduxReducer,
    signIn
});