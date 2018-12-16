import React, {Component} from 'react';
import HomeScreen from './component/HomeScreen';
import DetailScreen from './component/DetailScreen';
import Dashboard from './component/Dashboard';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
    Dashboard:Dashboard,
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
