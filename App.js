import React from 'react';
import logger from 'redux-logger'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import SignIn from './src/containers/SignIn';
import ForgotPass from './src/containers/ForgotPass';
import Main from './src/containers/Main';
import TaskDetails from './src/containers/TaskDetails';
import CreateNewTask from './src/containers/CreateNewTask';
import reducers from './src/containers/reducers';

const initialState = {};
const store = createStore(reducers, initialState, applyMiddleware(logger));

const MainNavigator = createStackNavigator({
  Home: {screen: SignIn},
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