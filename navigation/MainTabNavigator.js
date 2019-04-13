import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MainMap from '../components/find-spots/MainMap.js';
import ReservationForm from '../components/find-spots/ReservationForm.js';
import ReserveDetails from '../components/reserved-spots/ReserveDetails.js'

const HomeStack = createStackNavigator({
  Map: {
    screen: MainMap,
    path: "../components/find-spots/MainMap.js",
    navigationOptions: ({ navigation }) => ({
      title: `Where to?`,
    })
  },
  Reserved: {
    screen: ReservationForm,
    path: "../components/find-spots/ReservationForm.js",
    navigationOptions: ({ navigation }) => ({
      title: `Lot Reservation`,
    })
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Find Spots',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  ReserveDetails: ReserveDetails,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Reserved Spots',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
