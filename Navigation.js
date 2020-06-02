import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { Splash } from './Screens/Splash';
import {PhoneVerfied} from './Screens/PhoneVerfied';
const HomeTab = createSwitchNavigator(
  {
    Splash: {
      screen: Splash,
    },
    PhoneVerfied: {
      screen: PhoneVerfied,
    }
  },
);

export default createAppContainer(HomeTab);
