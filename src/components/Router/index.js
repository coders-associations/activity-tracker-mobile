import { StackNavigator } from 'react-navigation';
import Loader from '../../containers/Loader';
import Home from '../../containers/Home';
import AuthSignIn from '../../containers/Auth/SignIn';
import AuthSignUp from '../../containers/Auth/SignUp';

const Router = StackNavigator(
  {
    Loader: { screen: Loader },
    Home: { screen: Home },
    AuthSignIn: { screen: AuthSignIn },
    AuthSignUp: { screen: AuthSignUp },
  },
  {
    initialRouteName: 'Loader',
  },
);

export default Router;
