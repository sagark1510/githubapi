import {createStackNavigator} from 'react-navigation';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import SearchUser from './containers/searchuser';

const router = createStackNavigator(
  {
    Login,
    Dashboard,
    SearchUser,
  },
  {
    cardStyle: {
      backgroundColor: 'white',
    },
    navigationOptions: {
      headerBackTitle: null,
    },
  },
);

export default router;
