import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './pages/Home/index';
import CartScreen from './pages/Cart/index';
import Header from './components/Header';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: HomeScreen,
      Cart: CartScreen,
    },
    {
      // initialRouteName: 'Cart',
      defaultNavigationOptions: navigation => ({
        header: () => <Header {...navigation} />,
        cardStyle: {
          backgroundColor: '#000',
        },
      }),
    }
  )
);

export default Routes;
