import React, { Component } from 'react';
import { View, Text,Alert,ActivityIndicator,FlatList, TouchableOpacity } from 'react-native';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading:true
    };
  }
  _renderItem = ({item}) => (
    <ListItem
      onPressItem={this._onPressItem}
      title={item.title}
    />
  );
componentDidMount(){
  return fetch('https://facebook.github.io/react-native/movies.json').then((response)=> response.json())
  .then((responseJson)=>{
    this.setState({
      isLoading:false,
      dataSource:responseJson.movies
    })
  }).catch((error)=>{
    this.setState({
      isLoading:false
    })
  })
}
  render() {
    if(this.state.isLoading){
      return (
        <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator />
      </View>
      );
    }
    return (
      <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

class ListItem extends React.PureComponent{
  render(){
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={{paddingTop:10, paddingBottom:10, marginLeft:10}}>
            {this.props.title}
          </Text>
          <View style={{height:1, backgroundColor:'gray'}} />
        </View>
      </TouchableOpacity>
    );
  }
}
