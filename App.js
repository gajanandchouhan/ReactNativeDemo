import React, {Component} from 'react';
import HomeScreen from './component/HomeScreen';
import DetailScreen from './component/DetailScreen';
import Dashboard from './component/Dashboard';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingScreen from './component/LandingScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Dashboard:LandingScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
