import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text,TouchableOpacity,Image,StatusBar,ScrollView,ImageBackground,AsyncStorage} from 'react-native';

import { Actions } from 'react-native-router-flux';
// import styles from './styles';
import {  Content, Card, CardItem, Thumbnail, Icon,Form,Container,Header } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Drawer_Screen extends Component { 

  render() {
  
    return (
 
  
       
  <View style={{flex:1,backgroundColor:'white'}}>
   <ScrollView>

<View style={{  flex:1,}}>


<TouchableOpacity onPress={() => this.RBSheet.close()} >

</TouchableOpacity>
<View style={{flexDirection:'column',alignItems:'center',marginTop:42}}>
<TouchableOpacity onPress={() =>  Actions.Setting()} >



<Image source={require('../assets/pic5.jpg')}
style={{  width:90,
  height:90,
  borderRadius:50}}
/>
</TouchableOpacity>

<Text  style={{fontSize:18,fontWeight:'bold',color:'black',marginTop:12}}>Hamza Nawaz</Text>
<Text  style={{fontSize:12,color:'gray',}}>Bahria Town</Text>




</View>

{/* <TouchableOpacity onPress={() =>  Actions.Home()} > */}

<View style={{flexDirection:'row',marginLeft:12,marginTop:32,alignItems:'center'}}>
<Ionicons name="home-outline" size={25} color='#ee2b7a' style={{marginLeft:2}}/>
<Text  style={{fontSize:16,color:'black',marginLeft:12}}>Home</Text>

</View>  
{/* </TouchableOpacity> */}




<TouchableOpacity onPress={() =>  Actions.PropertyScreen()} >

<View style={{flexDirection:'row',marginLeft:12,marginTop:28,alignItems:'center'}}>
<FontAwesome name="group" size={25} color='#ee2b7a' style={{marginLeft:2}}/>
<Text  style={{fontSize:16,color:'black',marginLeft:12}}>Staff</Text>
</View> 
</TouchableOpacity>

<TouchableOpacity onPress={() =>  Actions.SavedSearch()} >

<View style={{flexDirection:'row',marginLeft:12,marginTop:28,alignItems:'center'}}>
<MaterialCommunityIcons name="hair-dryer-outline" size={25} color='#ee2b7a' style={{marginLeft:2}}/>
<Text  style={{fontSize:16,color:'black',marginLeft:12}}>Services</Text>
</View> 
</TouchableOpacity>

<TouchableOpacity onPress={() =>  Actions.Agents()} >

<View style={{flexDirection:'row',marginLeft:12,marginTop:28,alignItems:'center'}}>
<MaterialCommunityIcons name="account-group-outline" size={25} color='#ee2b7a' style={{marginLeft:2}}/>
<Text  style={{fontSize:16,color:'black',marginLeft:12}}>Appointments</Text>
</View> 
</TouchableOpacity>

<TouchableOpacity onPress={() =>  Actions.AddProperty()} >

<View style={{flexDirection:'row',marginLeft:12,marginTop:28,alignItems:'center'}}>
<MaterialCommunityIcons name="star-circle" size={25} color='#ee2b7a' style={{marginLeft:2}}/>
<Text  style={{fontSize:16,color:'black',marginLeft:12}}>Reviews</Text>
</View> 
</TouchableOpacity>



<TouchableOpacity onPress={() =>  Actions.PropertyScreen()} >

<View style={{flexDirection:'row',marginLeft:12,marginTop:28,alignItems:'center'}}>
<MaterialCommunityIcons name="logout" size={25} color='#ee2b7a' style={{marginLeft:2}}/>
<Text  style={{fontSize:16,color:'black',marginLeft:12}}>Logout</Text>
</View> 
</TouchableOpacity>













</View>
</ScrollView>

</View>

           
    );
  }
}






