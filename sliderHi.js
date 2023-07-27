import React from 'react';
import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity, } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 import {Icon} from 'native-base'
 
// import { NavigationContainer } from '@react-navigation/native';
// import LocalNavigator from './navigation/LocalNavigator';
// import FirstScreen from './Screens/FirstScreen';
import { Actions } from 'react-native-router-flux';

// const Stack = createStackNavigator();
 
const slides = [
  {
    key: 1,
    image: require('../assets/OB1.png'),
    title: 'Welcome to hiCure',
    text1: 'We will help you to provide high quality hijama cupping services',
    
    
     backgroundColor:'#F05B83', 
  },
  {
    image: require('../assets/OB2.png'),
    key: 2,
    title: 'Choose best doctor ',
 
    text1: 'We will help you to provide high quality hijama cupping services',
    
    backgroundColor: '#0F3F3A',
  },
  {
    image: require('../assets/OB3.png'),
    key: 3,
    title: 'Easy Appointments ',
    text1: 'We will help you to provide high quality hijama cupping services',
    backgroundColor: '#F05B83',
  },
  
];
 

 
export default class OnBoarding extends React.Component {
    constructor(props) {
       
        super(props)
     
        this.state = {
    
            showRealApp: false
          
         
      }
     
      }

      onDone = () => {
        this.setState({
      
      
          showRealApp: true
       
          
      })
      };
    
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={{width:350,height:350,backgroundColor:item.backgroundColor, borderRadius:340,position:'absolute',top:-20,right:-150}}></View>
      
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.text1}>{item.text1}</Text>
      

      < TouchableOpacity    onPress={()=> Actions.MainHome()} style={{width:'70%',borderRadius:24,marginTop:120, backgroundColor:'#0F3F3A',alignItems:'center',justifyContent:'center',paddingVertical:15}}>
        <Text style={{fontWeight:'bold',fontSize:16,color:'white'}}>Let's Start</Text>
      </TouchableOpacity>
  
      < TouchableOpacity    onPress={()=> Actions.MainHome()} >

      <View style={{width:'70%',borderRadius:24,marginTop:10, backgroundColor:'white',alignItems:'center',justifyContent:'center',paddingVertical:15}}>
        <Text style={{fontWeight:'bold',fontSize:16,color:'black'}}>Skip</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  _renderNextButton = () => {
    return (
        <View></View>
        // <Icon onPress={() => Actions.pop()} name="arrow-back" type="MaterialIcons" style={{ color: "white", fontSize: 24 }} />
        // <AntDesign name="arrowright" size={24} color="white" style={{marginTop:10,marginLeft:-20}} />

    );
  };

  _renderDoneButton = () => {
    return (
        <View></View>
 
    );
  };

  

  render() {

   
    if (this.state.showRealApp==true) {
      return <NavigationContainer>
        <LocalNavigator />
      </NavigationContainer>;

      

    } else {
      return <AppIntroSlider 
      dotStyle={{backgroundColor: 'black',marginBottom:400}} 
      renderItem={this._renderItem}
       data={slides} onDone={this._onDone} 
      renderNextButton={this._renderNextButton}  
       renderDoneButton={this._renderDoneButton}
       showPrevButton
                showNextButton
                showSkipButton
                showDoneButton
        />;
    }
  }
}

const styles = StyleSheet.create({
    slide :{
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
      
      
      },
      image: {
         
           alignSelf: 'center',
           width: 320,
           height: 320,
           marginLeft: 5,
         
           marginBottom: 30,
      },
      title: {
          color: '#001A67',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          textAlignVertical: 'center',
         
          width: '95%',
          alignSelf: 'center'
      },
    
      text1: {
        color: '#001A67',
        fontSize: 16,
        width: '95%',
        alignSelf: 'center',
        
        textAlignVertical: 'center',
        justifyContent: 'center',
       textAlign: 'center'
           
      },
      buttonCircle: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
  
  
  });

