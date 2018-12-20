import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import Home from './Home';
import Dashboard from './Dashboard';

const DrawerStack=createDrawerNavigator({
    Home:Home,
    Dashboard:Dashboard
});

const DrawerContainer=createAppContainer(DrawerStack);
export default class LandingScreen extends Component {

    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('./drawers.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
  render(){
      return <DrawerContainer />;
  }
}

const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
