import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,SafeAreaView,ImageBackground,TextInput,View,TouchableOpacity,Text} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Swiper from 'react-native-swiper';
import styles from './styles';


import { Actions } from 'react-native-router-flux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import icons from '../Constants/icons';


class SocialScreen extends React.Component {

  render() {
  
    return (



<ScrollView>
        <View style={styles.container}>


        <TouchableOpacity activeOpacity={0.8}    >
<View style={{width: wp('90%') ,height: hp('32%'),backgroundColor:'white',borderRadius:8,marginTop:8,alignSelf:'center',
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
marginBottom:12
}}>
<Image source={require('../assets/a1.jpg')}
style={styles.Salon_logo}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>The Hair Saloon</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Civic Commercial Area DHA, Lahore</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>3.9</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(54 reviews)</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity activeOpacity={0.8}    >
<View style={{width: wp('90%') ,height: hp('32%'),backgroundColor:'white',borderRadius:8,marginTop:8,alignSelf:'center',
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
marginBottom:12
}}>
<Image source={require('../assets/a3.jpg')}
style={styles.Salon_logo}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Filed Away</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Phase 1 Citi Housing, Gujranwala</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.1</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(87 reviews)</Text>
</View>
</View>
</TouchableOpacity>


          </View>  
          </ScrollView>
    );
  }
}





export default SocialScreen;
