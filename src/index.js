import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from './Screens/Home';
import Details from './Screens/Details';
import Profile from './Screens/Profile';
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
  Settings: Home,
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  }
);

export default createAppContainer(TabNavigator);