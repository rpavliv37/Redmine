import { combineEpics } from 'redux-observable';
import signInEpic from './SignIn/epic';
import addNotification from './NotificationGenerator/epic';


export default combineEpics(
  signInEpic,
  addNotification
);
