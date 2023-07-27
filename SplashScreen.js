import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Button, Text,TouchableOpacity,Image,StatusBar,ScrollView,ImageBackground,AsyncStorage} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';

class SplashScreen extends React.Component {



  componentDidMount=async()=>{
   
    setTimeout(()=>{


      Actions.Slider();


   
       

    },3000)


   
  
   

   }

  render() {
  
    return (
 
  
       
  
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:'#ee2b7a' }}>
        <Image
          source={require("../assets/l2.png")}
          style={styles.textage}
          resizeMode='cover'
        />
      </View>








   
 
 

            
    );
  }
}





const styles = StyleSheet.create({
     Container :{
flex:1,


},
image:{

  justifyContent: "center",
  alignItems:'center',
  width: '100%',
  height: '100%',

},
textage:{
  height: 300,
  width:  200,
  tintColor:'white'
  // resizeMode: "center",
},




});

export default SplashScreen;
