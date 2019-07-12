import {createStackNavigator, createAppContainer} from 'react-navigation';
import SignIn from './src/containers/SignIn';
import ForgotPass from './src/containers/ForgotPass';
import Main from './src/containers/Main';

const MainNavigator = createStackNavigator({
  Home: {screen: SignIn},
  SignIn: { screen: SignIn},
  ForgotPass: {screen: ForgotPass},
});

const App = createAppContainer(MainNavigator);

export default App;