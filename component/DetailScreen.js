import React, { Component } from 'react';
import { View, Text, Button, TextInput,StyleSheet,TouchableOpacity,Alert } from 'react-native';
export default class DetailScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
       this._onPressLogin=this._onPressLogin.bind(this);
    }

_onPressLogin(){
    
    if(this.state.username==''){
        Alert.alert('Enter user name')
        return
    }
    
    if(this.state.password==''){
        Alert.alert('Enter Password')
        return
    }
   
   this.props.navigation.replace('Dashboard')
}
    static navigationOptions={
        title:'Login',
        headerTitleStyle:{
        alignItems: 'center'
        }
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding:20 }}>
      
       <TextInput placeholder={'User Name'}
        style={styles.textinput}
        onChangeText={(text)=>this.setState({username:text})} />

        <TextInput placeholder={'Password'}
        style={styles.textinput}
        secureTextEntry={true}
        onChangeText={(text)=>this.setState({password:text})} />
        <TouchableOpacity style={{height:50, backgroundColor:'blue', marginTop:20, alignItems:'center',justifyContent:'center', width:'100%'}}
        onPress={this._onPressLogin}>
             <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>

      </View>
    );
  }
}



const styles=StyleSheet.create({
textinput:{
      borderColor:'blue', 
      borderWidth:1,
      width:'100%',
      marginTop:10
       }
});