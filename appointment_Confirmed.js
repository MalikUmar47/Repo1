import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,Button ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Connection from "../connection" ;
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
// import icons from '../Constants/icons';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import { Actions } from 'react-native-router-flux';


export default class appointment_Confirmed extends Component {

    constructor(props) {
        super(props);
        this.state = {
          checked: false,
      
        };
      }



    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
               
          <TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.HomeScreen()} >
            

               <Entypo name="calendar" size={144} color="#ee2b7a" style={{alignSelf:'center'}} />
               <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20,alignSelf:'center'}}>APPOINTMENT CONFIRMED</Text>
               <Text style={{fontSize: 16, color: 'gray', marginTop: 20, textAlign: 'center', paddingHorizontal: 20}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonl</Text>

</TouchableOpacity>
      







          
          

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFAFA',
    },
    tinyImage: {
      width: 45,
      height: 45,
      borderRadius: 24,
    },
    storyImage: {
      width: 100,
      height: 100,
      borderRadius: 54,
    },
    concert: {
      height: 300,
      width: '100%',
      alignSelf: 'center',
    },
    notiImage: {
      width: 35,
      height: 35,
      borderRadius: 54,
    },
    input3: {
      borderRadius: 12,
      height: 45,
      width: '85%',
      paddingHorizontal: 45,
      backgroundColor: '#D1D1D1',
    },
    icon: {
      position: 'absolute',
      right: 10,
    },
    icon2: {
      position: 'absolute',
      right: 45,
    },
    icon3: {
      position: 'absolute',
      right: 80,
    },
    logo1:{
        width:60,
        height:60,
        borderRadius:50
    },
    logo3:{
    
        width:90,
        height:90,
       borderRadius:12,
       marginLeft:8,
       marginTop:8
         },
  });
  
