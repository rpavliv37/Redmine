import { combineReducers } from 'redux';
import signIn from './SignIn/reducer';
import main from './Main/reducer';
import addNotification from './NotificationGenerator/reducer';
import createNewTask from './CreateNewTask/reducer';
import { reducer as reduxReducer } from 'redux-form';

export default combineReducers({
    form: reduxReducer,
    signIn,
    main,
    addNotification,
    createNewTask
});