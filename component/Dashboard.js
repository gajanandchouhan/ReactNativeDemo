import React, {Component} from 'react';
import { View, Text, FlatList, Image} from 'react-native';
import { createBottomTabNavigator,createAppContainer, createDrawerNavigator} from 'react-navigation';
import First from './First';
import Second from './Second';
import Third from './Third';


const TabNavigator = createBottomTabNavigator({
    first: First,
    second: Second,
    third: Third
  });


const TabContainer=createAppContainer(TabNavigator);

export default class Dashboard extends Component{
    render() {
        return <TabContainer />;
      }
}
