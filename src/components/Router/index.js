import { StackNavigator } from 'react-navigation';
import Home from '../../containers/Home';

const Router = StackNavigator({
  Home: {
    screen: Home,
  },
});

export default Router;
