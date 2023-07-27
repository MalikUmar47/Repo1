import React from 'react';
import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
 
import Entypo from 'react-native-vector-icons/Entypo';
 
// import { NavigationContainer } from '@react-navigation/native';
// import LocalNavigator from './navigation/LocalNavigator';
// import FirstScreen from './Screens/FirstScreen';
import { Actions } from 'react-native-router-flux';


// const Stack = createStackNavigator();
 
const slides = [
  {
    key: 1,
    image: require('../assets/l2.png'),
    title: 'Welcome to Saloon',
    text1: 'Saloon lets you easily book appointments with local health and beauty professionals.',
    
    backgroundColor: '#ee2b7a',
  },
  {
    image: require('../assets/qq1.jpg'),
    key: 2,
    title: 'Find Busineses',
 
    text1: 'Find the perfect health and beauty sevice by name, location and availability',
    
    backgroundColor: '#ee2b7a',
  },
  {
    image: require('../assets/qq2.jpg'),
    key: 3,
    title: 'Make an appointment',
    text1: 'Pick the service you want and get an instant approaval. No more waiting in line.',
    backgroundColor: '#ee2b7a',
  },
  
];
 

 
export default class Slider extends React.Component {
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
      
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.text1}>{item.text1}</Text>
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
        <AntDesign name="arrowright" size={24} color="white" style={{marginTop:10,marginLeft:-20}} />

    );
  };

  _renderDoneButton = () => {
    return (
<TouchableOpacity onPress={() =>  Actions.Roll_Screen()} style={{width:50,height:50}} >
  
    <Entypo name="check" size={24} color="white" style={{marginTop:10,marginLeft:20}}  />
      </TouchableOpacity>
    );
  };



  render() {

   
    if (this.state.showRealApp==true) {
      return <NavigationContainer>
        <LocalNavigator />
      </NavigationContainer>;

      

    } else {
      return <AppIntroSlider 
      dotStyle={{backgroundColor: 'white'}} 
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
      backgroundColor: '#ee2b7a',
      alignItems: 'center',
      justifyContent: 'center'
      
      
      },
      image: {
         
           alignSelf: 'center',
           width: '100%',
           height:'40%',
          marginTop:-100,
      },
      title: {
          color: 'white',
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          textAlignVertical: 'center',
          marginTop: 30,
          width: '95%',
          alignSelf: 'center'
      },
    
      text1: {
        color: 'white',
        fontSize: 16,
        width: '95%',
        alignSelf: 'center',
        marginTop: 10,
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