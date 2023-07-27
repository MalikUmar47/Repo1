import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, SafeAreaView, ImageBackground, TextInput, View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CountryPicker from 'react-native-country-picker-modal'
import ImagePlaceholder from 'react-native-img-placeholder';

import Connection from "../connection";
import styles from './styles';
// import Swiper from 'react-native-swiper';


import { Actions } from 'react-native-router-flux';
import icons from '../Constants/icons';

class add_Salon extends React.Component {


  constructor(props) {

    super(props)

    this.state = {

      salon_name: '',
      desc: '',
      address: '',
      web: false,
      phone: '',
      city: '',
      image_1: null,
      image_2: null,
      image_3: null,


      placeholder: "+92",


    }

  }




  componentDidMount = async () => {

    let user = await AsyncStorage.getItem('customer');
    console.log(user);
    let parsed = JSON.parse(user);
    let id = parsed[0].id;


    this.setState({
      id: id,
    });

  };




























  selectcountry = (value) => {
    let value1 = value
    let placeholder = "+" + value1.callingCode[0]

    console.log("11111111", value1)
    // console.log("11111111",codeCountry)

    this.setState({
      helo: false,
      placeholder: placeholder
    })

  }


  render() {

    return (




      <View style={{ flex: 1, backgroundColor: 'white' }}>


        <View style={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 25, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#ee2b7a' }}>

          <Icon onPress={() => Actions.pop()} name="arrowleft" type="AntDesign" style={{ color: "", fontSize: 19 }} />


          <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>Add Saloon</Text>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>         </Text>

          {/* <Icon onPress={() => Actions.Patient_Wallet()} name="wallet-outline" type="Ionicons" style={{ color: "black", fontSize: 19 }} /> */}
        </View>
        <ScrollView >






          <View style={{ position: 'absolute' }}>
            <TouchableOpacity onPress={() => Actions.pop()} >
              <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <Ionicons name="arrow-back-circle" size={40} color='white' style={{ marginLeft: 6, marginTop: -5 }} />
                <AntDesign name="sharealt" size={30} color='white' style={{ marginLeft: 216, marginTop: 1 }} />
                <AntDesign name="hearto" size={30} color='white' style={{ marginLeft: 26, marginTop: 1, }} />
              </View>
            </TouchableOpacity>
          </View>





          <View style={styles.inputContainer_7}>
            <TextInput
              placeholder="Salon name"
              style={styles.input7_1}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={salon_name => this.setState({ salon_name })}
              // autoCorrect={false}
              autoCompleteType="email"
              placeholderTextColor='black'
            />
            <Icon name="circle-with-cross" type="Entypo" color="black" style={{ position: 'absolute', right: 15, fontSize: 24 }} />
          </View>

          <View style={styles.inputContainer_7}>
            <TextInput
              placeholder="Salon email"
              style={styles.input7_1}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={salon_name => this.setState({ salon_name })}
              // autoCorrect={false}
              autoCompleteType="email"
              placeholderTextColor='black'
            />
            <Icon name="circle-with-cross" type="Entypo" color="black" style={{ position: 'absolute', right: 15, fontSize: 24 }} />
          </View>

          <View style={styles.inputContainer_7}>
            <TextInput
              placeholder="Password"
              style={styles.input7_1}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={salon_name => this.setState({ salon_name })}
              // autoCorrect={false}
              autoCompleteType="email"
              placeholderTextColor='black'
            />
            <Icon name="circle-with-cross" type="Entypo" color="black" style={{ position: 'absolute', color: 'black', right: 15, fontSize: 24 }} />
          </View>

          <View style={styles.inputContainer_7}>
            <TextInput
              placeholder="About Us"
              style={styles.input7_2}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={desc => this.setState({ desc })}
              // autoCorrect={false}
              autoCompleteType="email"
              placeholderTextColor='black'
            />
          </View>




          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', marginTop: 22, marginLeft: 12 }}> Select Images</Text>


          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 2 }}>









            <TouchableOpacity     >
              {this.state.image_1 == null ?

                <View style={{ width: 90, height: 90, borderRadius: 10, marginTop: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: 'lightgray', }}>
                  <MaterialCommunityIcons name="plus" size={30} color="gray" />
                </View>
                :

                <ImagePlaceholder
                  style={{ width: 90, height: 90, borderRadius: 10, marginTop: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: 'lightgray', }}
                  loadingStyle={{ size: 'large', color: 'blue' }}
                  source={{ uri: this.state.image_1 }}
                  borderRadius={10}
                />}
            </TouchableOpacity>



            <TouchableOpacity     >
              {this.state.image_2 == null ?

                <View style={{ width: 90, height: 90, borderRadius: 10, marginTop: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: 'lightgray', }}>
                  <MaterialCommunityIcons name="plus" size={30} color="gray" />
                </View>
                :

                <ImagePlaceholder
                  style={{ width: 90, height: 90, borderRadius: 10, marginTop: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: 'lightgray', }}
                  loadingStyle={{ size: 'large', color: 'blue' }}
                  source={{ uri: this.state.image_2 }}
                  borderRadius={10}
                />}
            </TouchableOpacity>





            <TouchableOpacity     >
              {this.state.image_3 == null ?

                <View style={{ width: 90, height: 90, borderRadius: 10, marginTop: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: 'lightgray', }}>
                  <MaterialCommunityIcons name="plus" size={30} color="gray" />
                </View>
                :

                <ImagePlaceholder
                  style={{ width: 90, height: 90, borderRadius: 10, marginTop: 13, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F2F2F2', borderWidth: 1, borderColor: 'lightgray', }}
                  loadingStyle={{ size: 'large', color: 'blue' }}
                  source={{ uri: this.state.image_3 }}
                  borderRadius={10}
                />}
            </TouchableOpacity>






          </View>

          <View style={{ flexDirection: 'row', marginTop: 44, alignSelf: 'center' }}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>Country</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ee2b7a' }}> (PK)</Text>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ee2b7a', marginLeft: 144 }}>Change Country</Text>
          </View>




          <View style={styles.inputContainer_7}>
            <TextInput
              placeholder="Address"
              style={styles.input7_1}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={address => this.setState({ address })}
              // autoCorrect={false}
              autoCompleteType="email"
              placeholderTextColor='black'
            />
            <Icon name="circle-with-cross" type="Entypo" color="black" style={{ position: 'absolute', right: 15, fontSize: 24 }} />
          </View>



          <View style={styles.inputContainer_7}>
            <TextInput
              placeholder="Website"
              style={styles.input7_1}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={web => this.setState({ web })}
              // autoCorrect={false}
              autoCompleteType="email"
              placeholderTextColor='black'
            />
            <Icon name="circle-with-cross" type="Entypo" color="black" style={{ position: 'absolute', right: 15, fontSize: 24 }} />
          </View>






          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '90%', alignSelf: 'center' }}>

            <View style={styles.phoneinput2}>
              <CountryPicker
                onSelect={(value) => this.selectcountry(value)}
                cca2={this.state.cca2}
                translation='eng'
                placeholder={this.state.placeholder}
              // style={styles.phoneinput2}
              />
              <Icon name="arrow-drop-down" type="MaterialIcons" color="#275983" style={{ fontSize: 20 }} />
            </View>
            <TextInput
              placeholder="Phone Number"
              style={styles.phoneinput}
              onChangeText={phone => this.setState({ phone })}
              keyboardType="email-address"
              autoCapitalize="none"
              // autoCorrect={false}
              autoCompleteType="email"

            />
          </View>


          <View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 20 }}>
            <View style={styles.containe}>
              <TextInput
                placeholder="Country"
                style={styles.pickk}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={address => this.setState({ address })}
                // autoCorrect={false}
                autoCompleteType="email"
                placeholderTextColor='black'

              />
            </View>


            <View style={styles.containe_1}>
              <TextInput
                placeholder="City"
                style={styles.pickk}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={address => this.setState({ address })}
                // autoCorrect={false}
                autoCompleteType="email"
                placeholderTextColor='black'
              />
            </View>
          </View>



          <TouchableOpacity onPress={() => Actions.add_services()}  >
            <View style={{ width: wp('90%'), marginTop: 30, marginBottom: 20, paddingVertical: 10, alignSelf: 'center', borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white' }}>SUBMIT NOW</Text>
            </View>
          </TouchableOpacity>





        </ScrollView>

      </View>



    );
  }
}






export default add_Salon;
