import { StackNavigator } from 'react-navigation';
import Home from '../../containers/Home';
import Auth from '../../containers/Auth';

const Router = StackNavigator(
  {
    Home: { screen: Home },
    Auth: { screen: Auth },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default Router;
