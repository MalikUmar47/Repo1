import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,Button ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Connection from "../connection" ;
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import icons from '../Constants/icons';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import { Actions } from 'react-native-router-flux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';




export default class forgot_Password extends Component {

    constructor(props) {
        super(props);
        this.state = {
          checked: false,
      
        };
      }



    render() {
        return (
            <ScrollView>
               
              
              
               <View style={{ height: hp('10%') , flexDirection: 'row', paddingHorizontal: 20, backgroundColor:'#ee2b7a', width: wp('100%') , justifyContent: 'space-between', alignItems: 'center'}}>
<TouchableOpacity  onPress={() =>  Actions.LoginScreen()}>

<Ionicons name="chevron-back" size={30} color='white'  />
</TouchableOpacity>
               
               <Text  style={{fontSize:22,color:'white', width: wp('65%') , }}>Forgot Password?</Text>



     </View>
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', height: hp('90%'), width: wp('100%') ,}}>

     <Text style={{fontWeight: 'bold', fontSize: 26,  }}>Forgot Password?</Text>
<Text style={{  fontSize: 16, textAlign: 'justify', paddingHorizontal: 20, paddingTop: 20}}>Entered your registered email address so that we will reset your password</Text>

<View style={{flexDirection: 'row',  width: wp('90%'), backgroundColor: '#FFFAFA',height: hp('8%'), marginTop: 10, borderRadius: 8, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center'}}>

<Text style={{fontSize: 16, color: 'gray'}}>Your email address</Text>
<Entypo name="circle-with-cross" size={24} color="gray" />
</View>

<TouchableOpacity  style={{width: wp('90%'), marginTop: 30, height: hp('7%'),   alignSelf: 'center', borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center'}}   >
         
  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>RESET PASSWORD</Text>

</TouchableOpacity>

<TouchableOpacity onPress={() =>  Actions.LoginScreen()} style={{width: wp('90%'), marginTop: 10, height: hp('7%'),   alignSelf: 'center', borderRadius: 8,  alignItems: 'center', justifyContent: 'center'}}   >
         
  <Text style={{color: '#ee2b7a', fontWeight: 'bold', fontSize: 16,}}>Back to Login</Text>

</TouchableOpacity>
     </View>


            </ScrollView>
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
  
