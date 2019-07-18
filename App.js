import React from 'react';
import logger from 'redux-logger'
import { createLogger } from 'redux-logger';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootEpic from './src/containers/epics';
import SignIn from './src/containers/SignIn';
import ForgotPass from './src/containers/ForgotPass';
import Main from './src/containers/Main';
import TaskDetails from './src/containers/TaskDetails';
import CreateNewTask from './src/containers/CreateNewTask';
import reducers from './src/containers/reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {};
const middlewares = [
  createLogger(),
  epicMiddleware
];
const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));

const MainNavigator = createStackNavigator({
  Home: {screen: SignIn},
  Main: {screen: Main},
  SignIn: { screen: SignIn},
  ForgotPass: {screen: ForgotPass},
  TaskDetails: {screen: TaskDetails},
  CreateNewTask: {screen: CreateNewTask}
});

const AppNavigator = createAppContainer(MainNavigator);

class App extends React.Component{
  render() {
    return (
      <Provider store={ store } >
        <AppNavigator />
      </Provider>
    )
  }
}

export default App;