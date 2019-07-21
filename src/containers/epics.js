import { combineEpics } from 'redux-observable';
import signInEpic from './SignIn/epic';
import addNotification from './NotificationGenerator/epic';
import mainEpic from './Main/epic';
import createTaskEpic from './CreateNewTask/epic';


export default combineEpics(
  signInEpic,
  addNotification,
  mainEpic,
  createTaskEpic
);
