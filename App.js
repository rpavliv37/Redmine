import {createStackNavigator, createAppContainer} from 'react-navigation';
import SignIn from './src/containers/SignIn';
import ForgotPass from './src/containers/ForgotPass';

const MainNavigator = createStackNavigator({
  Home: {screen: SignIn},
  ForgotPass: {screen: ForgotPass},
});

const App = createAppContainer(MainNavigator);

export default App;