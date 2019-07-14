import {createStackNavigator, createAppContainer} from 'react-navigation';
import SignIn from './src/containers/SignIn';
import ForgotPass from './src/containers/ForgotPass';
import Main from './src/containers/Main';
import TaskDetails from './src/containers/TaskDetails';
import CreateNewTask from './src/containers/CreateNewTask';

const MainNavigator = createStackNavigator({
  Home: {screen: SignIn},
  SignIn: { screen: SignIn},
  ForgotPass: {screen: ForgotPass},
  TaskDetails: {screen: TaskDetails},
  CreateNewTask: {screen: CreateNewTask}
  
});

const App = createAppContainer(MainNavigator);

export default App;