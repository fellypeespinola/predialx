import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Orders from './pages/Orders';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Orders
  }),
);

export default Routes;
