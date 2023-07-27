import React, { Component } from 'react';
import { StyleSheet,ScrollView,BackHandler,SafeAreaView,ImageBackground,TextInput,View,TouchableOpacity,Text,AsyncStorage } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import icons from '../Constants/icons';
import Ionicons from "react-native-vector-icons/Ionicons";
import {  Content, Card, CardItem, Thumbnail, Icon,Form,Container,Header } from 'native-base';
import Connection from "../connection" ;
// import styles from './styles';


class LoginScreen extends React.Component {





  constructor(props) {
 
    super(props)
 
    this.state = {
 
      email: '',
      password: ''
 
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  
  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
   onButtonPress = () => {
     BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
     // then navigate
     navigate('NewScreen');
   }
   handleBackButtonClick() {
      Actions.Roll_Screen()
      return true;
  }

  





  

  render() {
  
    return (
      <View style={styles.Container}>

  <ImageBackground source={icons.hair} resizeMode="cover"  style={{flex: 1, flexDirection: 'column'}}>
  <View style={{ height: hp('80%') ,  flexDirection: 'column', backgroundColor:'white', width: wp('100%') ,  borderTopRightRadius:28, borderTopLeftRadius: 28,marginTop:130}}>


  <Text style={{fontWeight: 'bold', fontSize: 26, marginTop: 40, textAlign:'center'}}>Welcome Back</Text>




  <View style={styles.inputContainer}>
        <TextInput
        placeholder="Enter email"
        style={styles.input7}
        keyboardType="email-address"
        autoCapitalize="none"
        // onChangeText={email => this.setState({email})}
        // autoCorrect={false}
        autoCompleteType="email"
        placeholderTextColor="black"
        />
      <Icon name="cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:25 }}/>
       </View>







       <View style={styles.inputContainer}>
        <TextInput
        placeholder="Enter password"
        style={styles.input7}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={password => this.setState({password})}
        // autoCorrect={false}
        autoCompleteType="email"
        placeholderTextColor="black"
        />
      <Icon name="eye-off" type="Ionicons"  color="black" style={{position:'absolute',right:15,fontSize:25 }}/>
       </View>












<TouchableOpacity onPress={() =>  Actions.HomeScreen() }    style={{width: wp('90%'), marginTop: 30, height: hp('7%'),   alignSelf: 'center', borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center'}}   >
         
  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>LOGIN</Text>

</TouchableOpacity>

<TouchableOpacity   style={{width: wp('90%'), marginTop: 20, height: hp('7%'),   alignSelf: 'center', borderRadius: 8,  alignItems: 'center', justifyContent: 'center'}}   >
         
  <Text style={{color: '#ee2b7a', fontWeight: 'bold', fontSize: 16}}>Forgot your password??</Text>

</TouchableOpacity>
<View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 30}}>
<Text style={{  fontSize: 16, textAlign: 'center'}}>Dont have an account yet??</Text>
<TouchableOpacity onPress={() =>  Actions.SignUpScreen()} style={{width: wp('90%'), marginTop: 10, height: hp('7%'),   alignSelf: 'center', borderRadius: 8,  alignItems: 'center', justifyContent: 'center'}}   >
         
  <Text style={{color: '#ee2b7a', fontWeight: 'bold', fontSize: 16,}}>Sign up Now</Text>

</TouchableOpacity>
</View>

</View>


        
 </ImageBackground>



































     </View>
 
            
    );
  }
}





const styles = StyleSheet.create({
  Container :{

    flex:1
    
    },
    input2: {

      fontSize: 16,
    
     
      width:'95%',
     
      borderRadius:50,
      backgroundColor:'white',
      borderWidth:1,
      paddingHorizontal:22,
      marginHorizontal:8,
      marginTop:4,
      borderColor:'#154987',
      height:50,
      color:'black'
    },
  
    image:{
    
    
      width: '100%',
      height: '100%',
    
    },
    textage:{
      height: '30%',
      width: '84%',
      resizeMode: "center",
    },
    button:{
      width:'95%',
      height:50,
      backgroundColor:'#154987',
    borderRadius:62,
    justifyContent:'center',alignItems:'center',
    marginTop:24,

    marginLeft:8
     
    },
    inputContainer: {
      flexDirection:'row',
      alignItems:'center',
      alignSelf:'center',
   
       },
       input7: {
        width:'88%',
        height:55,
      backgroundColor:'#FFFAFA',
  
        borderRadius:8,
 
        fontSize:16,
       paddingHorizontal:20,
        marginTop:10,
        color:'black'
       
      },
    
    
    

});

export default LoginScreen;
