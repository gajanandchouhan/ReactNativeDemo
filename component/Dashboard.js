import React, {Component} from 'react';
import { View, Text, FlatList, Image} from 'react-native';

export default class Dashboard extends Component{
    
render(){
    return(
    <View style={{ flex:1, backgroundColor:'skyblue'}}>
    <FlatList data={[{key: 'First', image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}, {key: 'Second',image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}, {key: 'Third',image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}, {key: 'Fouth', image:'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}]}
     renderItem={({item}) => 
     <View style={{flex:1, flexDirection:'row', padding:10}}>
     <Image source={{uri:item.image}} style={{width:100, height:100}} />
     <Text style={{fontSize:20, padding:20,color:'black'}}>{item.key}</Text>
     </View>
     } />
    </View>)
    ;
}
}
