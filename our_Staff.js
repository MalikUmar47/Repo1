import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,Button ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';


import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Connection from "../connection" ;
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import icons from '../Constants/icons';
import { Actions } from 'react-native-router-flux';




export default class our_Staff extends Component {
    render() {
        return (
            <ScrollView>
               
               <View style={{height:80,backgroundColor:'#ee2b7a',width:"100%"}}>

<View style={{flexDirection:'row',marginVertical:22,justifyContent: 'space-between',alignItems:'center', paddingHorizontal: 20}}>
    

<Ionicons name="chevron-back" size={30} color='white' style={{marginHorizontal:-4}} />
<Text  style={{fontSize:22,color:'white',marginHorizontal:40}}>Walk-In Trim</Text>



       <AntDesign name="sharealt" size={26} color="white" />
       <AntDesign name="hearto" size={26} color="white" />
     </View>

     </View>

     <Text
          style={{
            fontSize: 16,
      
            fontWeight: 'bold',
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 10
            
          }}>
          OUR STAFF
        </Text>


        <View>
          <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
            <TouchableOpacity
              style={{
                width: 110,
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}>
              <Image source={icons.z8} style={styles.storyImage} />
              <Text style={{marginTop: 10, fontSize: 16}}>Jacob</Text>
            
            </TouchableOpacity>
            <TouchableOpacity
              style={{
           
                
              
                
                width: 110,
                height: 150,
                
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Image source={icons.z7} style={styles.storyImage} />
              <Text style={{marginTop: 10, fontSize: 16}}>Julie</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={{
                
                
             
                width: 110,
                height: 150,

                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Image source={icons.z5} style={styles.storyImage} />
              <Text style={{marginTop: 10, fontSize: 16}}>Thomas</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={{
               
                
            
                width: 110,
                height: 150,

                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Image source={icons.z6} style={styles.storyImage} />
              <Text style={{marginTop: 10, fontSize: 16}}>Saniya</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={{
              
                
                
                width: 110,
                height: 150,

                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Image source={icons.z2} style={styles.storyImage} />
              <Text style={{marginTop: 10, fontSize: 16}}>William</Text>

            </TouchableOpacity>
            <TouchableOpacity
              style={{
           
                
             
                width: 110,
                height: 150,

                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 5,
              }}>
              <Image source={icons.z4} style={styles.storyImage} />
              <Text style={{marginTop: 10, fontSize: 16}}>Lily</Text>

            </TouchableOpacity>
          </ScrollView>
        </View>



        <Text
          style={{
            fontSize: 16,
      
            fontWeight: 'bold',
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 10
            
          }}>
          TOP SERVICES
        </Text>


        <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
            <View>

            <Text style={{fontSize: 18,}}>Haircut with Blow Dry</Text>
            <Text style={{fontSize: 14, color: 'gray'}}>Hot Towel and cold Towel included</Text>

            </View>

            <View>

            <Text style={{fontSize: 18,}}>$ 70.00</Text>
            <Text style={{fontSize: 14, color: 'gray', textAlign: 'center', marginLeft:10}}>75 mint</Text>

            </View>
        </View>

        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: 'gray',
            marginTop: 20,
            alignSelf: 'center'
          }}></View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
            <View>

            <Text style={{fontSize: 18,}}>Formal Hair Design </Text>
            <Text style={{fontSize: 14, color: 'gray'}}>A good look with movement</Text>

            </View>

            <View>

            <Text style={{fontSize: 18,}}>$ 50.00</Text>
            <Text style={{fontSize: 14, color: 'gray', textAlign: 'center', marginLeft:10}}>40 mint</Text>

            </View>
        </View>

        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: 'gray',
            marginTop: 20,
            alignSelf: 'center'
          }}></View>
          <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
            <View>

            <Text style={{fontSize: 18,}}>Clarifying</Text>
            <Text style={{fontSize: 14, color: 'gray'}}>Intensive welness clarifying</Text>

            </View>

            <View>

            <Text style={{fontSize: 18,}}>$ 30.00</Text>
            <Text style={{fontSize: 14, color: 'gray', textAlign: 'center', marginLeft:10}}>45 mint</Text>

            </View>
        </View>

        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: 'gray',
            marginTop: 20,
            alignSelf: 'center'
          }}></View>



<Text
          style={{
            fontSize: 16,
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 10,
            color: '#ee2b7a'
            
          }}>
          See all services
        </Text>

        <Text
          style={{
            fontSize: 16,
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 10,
    fontWeight: 'bold'
            
          }}>
          REVIEWS
        </Text>
        <View
          style={{
            width: '90%',
            height: 1,
            backgroundColor: 'gray',
            marginTop: 20,
            alignSelf: 'center'
          }}></View>

        <View style={{width: '85%', shadowOpacity: 0.5, shadowOffset: 10, marginTop: 10,   flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', paddingVertical: 20,   }}>

<View>
  <Text style={{ fontSize: 16}}>12 services available</Text>
  <Text style={{fontSize: 18, fontWeight: 'bold'}}>Instant Confirmation</Text>
</View>
<TouchableOpacity  onPress={() =>  Actions.select_Service()}  style={{width: 100, height: 55, borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center'}}>
  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>BOOK</Text>
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
  });
  
