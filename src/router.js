import {createStackNavigator} from 'react-navigation';
import Login from './containers/login';
import Dashboard from './containers/dashboard';

const router = createStackNavigator(
  {
    Login,
    Dashboard,
  },
  {
    cardStyle: {
      backgroundColor: 'white',
    },
  },
);

export default router;
