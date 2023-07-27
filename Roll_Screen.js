

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  AsyncStorage,
  ImageBackground,
  Dimensions,
  BackHandler

} from 'react-native';
import { Actions } from 'react-native-router-flux';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


export default class Roll_Screen extends Component {




  constructor(props) {

    super(props)

    this.state = {

      text1: 2,
      text2: 1,
      text3: 1,
      check_design: 'User',
      
      location:'',
      lat:0,
      lng:0,
    }
  }

  // backAction = () => {
  //   BackHandler.exitApp()
  //   return true;
  // };


  // componentWillUnmount() {
  //   this.backHandler.remove();
  // }









  changebtn(value, val) {


    if (this.state[value] == 2) {



      this.setState({
        text1: 1,
        text2: 1,


        [value]: 2,


      })
    }
    else {
      this.setState({
        text1: 1,
        text2: 1,

        [value]: 2,


      })

    }
    this.setState({
      check_design: val
    })
  }




  render() {


    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>Which one are you?</Text>
        <View style={{ width: width, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 50 }}>
          <TouchableOpacity style={(this.state.text1 == 1 ? styles.in_active_button : styles.active_button)} onPress={() => this.changebtn("text1", 'User')}>
            <Image style={{ borderRadius: 10, width: 100, height: 100 }} resizeMode='contain'  source={require('../assets/user.png')} />
            <Text style={(this.state.text1 == 1 ? styles.in_active_text : styles.active_text)}>User</Text>
          </TouchableOpacity>

          <TouchableOpacity style={(this.state.text2 == 1 ? styles.in_active_button : styles.active_button)} onPress={() => this.changebtn("text2", 'Barbar')}>
            <Image style={{ borderRadius: 10, width: 110, height: 110 }} resizeMode='contain'  source={require('../assets/barber.png')} />
         
        
        <Text style={(this.state.text2 == 1 ? styles.in_active_text : styles.active_text)}>Barber</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ color: 'gray', textAlign: 'center', maxWidth: '70%', alignSelf: 'center', marginTop: 50 }}>To give you a customize experience we need to know you</Text>

        <View style={{ width: width, height: height / 6 }}></View>



        {this.state.check_design == 'User' ?
          <TouchableOpacity activeOpacity={0.8} onPress={() => { Actions.LoginScreen({ role: 'user' }) }}>
            <View style={{ width: width / 1.5, borderRadius: 15, justifyContent: 'center', alignItems: 'center', paddingVertical: 17, marginTop: 10, backgroundColor: '#ee2b7a', alignSelf: 'center' }}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Continue</Text>
            </View>
          </TouchableOpacity>
          :

          <TouchableOpacity activeOpacity={0.8} onPress={() => { Actions.LoginScreen({ role: 'barber' }) }}>
          <View style={{ width: width / 1.5, borderRadius: 15, justifyContent: 'center', alignItems: 'center', paddingVertical: 17, marginTop: 10, backgroundColor: '#ee2b7a', alignSelf: 'center' }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Continue</Text>
          </View>
        </TouchableOpacity>
  }
      </View>

    )
  }
}

const styles = StyleSheet.create({

  active_button: {
    justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: '#ee2b7a', width: '47%', height: height / 4, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 3
  },
  in_active_button: {
    justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: 'white', width: '47%', height: height / 4
  },


  active_text: {
    color: 'white', fontWeight: 'bold', marginTop: 10, fontSize: 16
  },
  in_active_text: {
    color: 'gray', fontWeight: 'bold', marginTop: 10, fontSize: 16
  },


})


