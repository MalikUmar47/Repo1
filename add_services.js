import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,SafeAreaView,ImageBackground,TextInput,View,TouchableOpacity,Text,Picker,AsyncStorage} from 'react-native';
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
import styles from './styles';
import {  Content, Card, CardItem, Thumbnail, Icon,Form,Container,Header } from 'native-base';
// import ImagePicker from 'react-native-image-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// import CountryPicker from 'react-native-country-picker-modal'
// import ImagePlaceholder from 'react-native-img-placeholder';

import Connection from "../connection" ;

// import Swiper from 'react-native-swiper';


import { Actions } from 'react-native-router-flux';
// import icons from '../Constants/icons';

class add_Salon extends React.Component {


  constructor() {
 
    super();
 
    this.state = {

      data:[],
      data1:[],
      time:'',
      detail:'',
      id:'',
      price:'',
      service:''
    }
  }





  componentDidMount = async () => {

    let user = await AsyncStorage.getItem('customer');
    console.log(user);
    let parsed = JSON.parse(user);
    let id = parsed[0].id;
    let salon_id = parsed[0].salon_id;

  

    this.setState({
      id:id, 
      salon_id:salon_id  
    });


   

  };
 













  
Add_new_service=()=>{
         

  let uploaddata = new FormData();
  




 

  uploaddata.append('service',this.state.service);
  uploaddata.append('detail',this.state.detail);
  uploaddata.append('price',this.state.price);
  uploaddata.append('time',this.state.time);
  uploaddata.append('salon_id',this.state.salon_id);




  
    



  let api = Connection+'salon_App.php?action=Add_new_service';
  console.log("pass => ", api)
  fetch(api, { 
          method: 'POST',
          headers: {
            "Content-Type": "multipart/form-data",
            "otherHeader": "foo",
          },
          body: uploaddata, 
       
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("response",response)
        this.props.navigation.navigate("services_list")
   
     
      })
      .catch((error) => {
          console.error(error);
      
      });
    
    
    
}
  

  render() {
  
    return (




<View style={{flex:1,backgroundColor:'white'}}>

<View style={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 25, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#ee2b7a' }}>
                   
                   {/* <Icon onPress={() => Actions.Patient_Wallet()} name="wallet-outline" type="Ionicons" style={{ color: "black", fontSize: 19 }} /> */}
                  
                   <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>Add Services</Text>
                   {/* <Icon onPress={() => Actions.Patient_Wallet()} name="wallet-outline" type="Ionicons" style={{ color: "black", fontSize: 19 }} /> */}
               </View>


               <ScrollView >
<View style={{position:'absolute'}}>
<TouchableOpacity onPress={() =>  Actions.pop()} >
  <View style={{flexDirection:'row',marginTop:15}}>
<Ionicons name="arrow-back-circle" size={40} color='white' style={{marginLeft:6,marginTop:-5}}/>
<AntDesign name="sharealt" size={30} color='white' style={{marginLeft:216,marginTop:1}}/>
<AntDesign name="hearto" size={30} color='white' style={{marginLeft:26,marginTop:1,}}/>
</View>
</TouchableOpacity>
</View>


<Text  style={{fontSize:18,fontWeight:'bold',color:'black',marginLeft:25,marginTop:20,}}>Detail about your service</Text>

<View style={styles.inputContainer_7}>
        <TextInput
        placeholder="Title"
        style={styles.input7_1}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={service => this.setState({service})}
        // autoCorrect={false}
        autoCompleteType="email"
        placeholderTextColor='black'
        />
      <Icon name="circle-with-cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:24 }}/>
       </View>



       <View style={styles.inputContainer_7}>
        <TextInput
        placeholder="Detail"
        style={styles.input7_2}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={detail => this.setState({detail})}
        // autoCorrect={false}
        autoCompleteType="email"
        placeholderTextColor='black'
        />
       </View>












<View style={styles.inputContainer_7}>
        <TextInput
        placeholder="Price"
        style={styles.input7_1}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={price => this.setState({price})}
        // autoCorrect={false}
        autoCompleteType="email"
        placeholderTextColor='black'
        />
      <Icon name="circle-with-cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:24 }}/>
       </View>



       <View style={styles.inputContainer_7}>
        <TextInput
        placeholder="Time"
        style={styles.input7_1}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={time => this.setState({time})}
        // autoCorrect={false}
        autoCompleteType="email"
        placeholderTextColor='black'
        />
      <Icon name="circle-with-cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:24 }}/>
       </View>






     
       <TouchableOpacity onPress={() =>  Actions.add_schedule()}  >
<View   style={{width: wp('90%'), marginTop: 30,  marginBottom:20, paddingVertical:10,  alignSelf: 'center', borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center'}}>
<Text style={{fontSize:14,fontWeight:'bold',color:'white'}}>SUBMIT NOW</Text>
</View>
</TouchableOpacity>





</ScrollView>   

 </View>


      
    );
  }
}






export default add_Salon;
