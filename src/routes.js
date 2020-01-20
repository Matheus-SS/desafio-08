import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import React from 'react';
import { Image } from 'react-native';
import logo from './assets/images/logo.png';

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
      defaultNavigationOptions: navigation => ({
        header: () => <Header {...navigation} />,
      }),
    }
  )
);

export default Routes;
