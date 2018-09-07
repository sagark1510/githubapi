import {createStackNavigator} from 'react-navigation';
import Login from './containers/login';
import Dashboard from './containers/dashboard';
import SearchUser from './containers/searchuser';
import UserDetail from './containers/userdetail';
import Repositories from './containers/repositories';

const router = createStackNavigator(
  {
    Login,
    Dashboard,
    SearchUser,
    UserDetail,
    Repositories,
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
