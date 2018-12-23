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
  headerLeft:<Image source={require('../img/drawers.png')} style={{width:30, height:30, marginLeft:10}} onPress={()=>this.props.navigation.toggleDrawer()}/>
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
  class HamburgerIcon extends Component {

    toggleDrawer = () => {
  
      console.log(this.props.navigationProps);
  
      this.props.navigationProps.toggleDrawer();
  
    }
  
    render() {
  
      return (
  
        <View style={{ flexDirection: 'row' }}>
  
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
  
            <Image
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }}
              style={{ width: 25, height: 25, marginLeft: 5 }}
            />
  
          </TouchableOpacity>
  
        </View>
  
      );
  
  
    }
  }