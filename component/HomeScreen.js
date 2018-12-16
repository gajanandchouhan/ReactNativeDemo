import React, { Component } from 'react';
import { View, Text, Button,Alert } from 'react-native';
export default class HomeScreen extends Component {
  static navigationOptions={
      header:null
  }

  componentDidMount(){
      setTimeout(()=>{
        this.props.navigation.replace('Detail')
      },3000)
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome to Sample App</Text>
      </View>
    );
  }
}