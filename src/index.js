import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from './Screens/Home';
import Details from './Screens/Details';
import Profile from './Screens/Profile';
import reactScreensExample from './ReactNativeScreens/App'
const AppNavigator = createStackNavigator(
  {
    Home,
    Details,
    Profile
  },
  {
    initialRouteName: "Home"
  }
)
const HomeStack = createStackNavigator({
  Home,
  Details,
});

const SettingsStack = createStackNavigator({
  Profile,
  ReactScreens: reactScreensExample,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  }
);

export default createAppContainer(TabNavigator);