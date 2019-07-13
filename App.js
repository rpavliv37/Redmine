import {createStackNavigator, createAppContainer} from 'react-navigation';
import SignIn from './src/containers/SignIn';
import ForgotPass from './src/containers/ForgotPass';
import Main from './src/containers/Main';
import TaskDetails from './src/containers/TaskDetails';

const MainNavigator = createStackNavigator({
  Home: {screen: TaskDetails},
  SignIn: { screen: SignIn},
  ForgotPass: {screen: ForgotPass},
  TaskDetails: {screen: TaskDetails}
  
});

const App = createAppContainer(MainNavigator);

export default App;