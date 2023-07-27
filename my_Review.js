import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,BackHandler ,TouchableOpacity,AsyncStorage,ScrollView} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { Actions } from 'react-native-router-flux';


import icons from '../Constants/icons';




export default class my_Review extends Component { 








    constructor(props) {
 
        super(props)
     
        this.state = {
     
       
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
          Actions.pop()
           return true;
      }
    
  render() {

    const { navigation } = this.props;






  return(
  
<ScrollView>
    
    <View style={styles.container}>

      <View style={{backgroundColor: '#ee2b7a', height: 80, }}>
        <View style={{flexDirection: 'row', padding: 20, justifyContent: 'space-between', alignItems: 'center'}}>
        <AntDesign name="arrowleft" size={28} color="white" />
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginRight: 130}}>My Reviews</Text>
    


        </View>

        
      </View>


      
      <View  style={{backgroundColor: 'white', margin: 20, borderRadius: 10, height: 300, shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,}}>
<Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray', marginTop: 20, marginLeft: 20}}>Aug 16, 2019</Text>



     <View style={{flexDirection: 'row', paddingTop: 20, marginLeft: 10,   alignItems: 'center' }}>
     <Image source={icons.b2}
      style={styles.logo3}/>
      
<View style={{marginLeft: 10, width: '40%'}}>
      <Text style={{fontSize: 20}}>Hair Castle</Text>
      <Text style={{color: 'gray', fontSize: 16}}>Chander Lok, Delhi, 1034, India</Text>

      


   </View>




  


     </View>
     <View style={{flexDirection:'row',alignItems:'center', marginTop: 30, paddingHorizontal: 20, justifyContent: 'space-between', alignSelf: 'center' }}>
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />

       
</View> 

<Text style={{fontSize: 16, color: 'black', marginTop: 30, marginLeft: 20}}>Good place to get unique hair cut</Text>
     


     </View>


     <View  style={{backgroundColor: 'white', margin: 20, borderRadius: 10, height: 300, shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,}}>
<Text style={{fontSize: 16, fontWeight: 'bold', color: 'gray', marginTop: 20, marginLeft: 20}}>July 26, 2020</Text>



     <View style={{flexDirection: 'row', paddingTop: 20, marginLeft: 10,   alignItems: 'center' }}>
     <Image source={icons.b3}
      style={styles.logo3}/>
      
<View style={{marginLeft: 10, width: '40%'}}>
      <Text style={{fontSize: 20}}>Filed Away</Text>
      <Text style={{color: 'gray', fontSize: 16}}>Civic Commercial Area DHA, Lahore</Text>

      


   </View>




  


     </View>
     <View style={{flexDirection:'row',alignItems:'center', marginTop: 30, paddingHorizontal: 20, justifyContent: 'space-between', alignSelf: 'center' }}>
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />
<Entypo name="star" size={45} color='#ee2b7a' />

       
</View> 

<Text style={{fontSize: 16, color: 'black', marginTop: 30, marginLeft: 20}}>Best work at reasonable prices.....</Text>
     


     </View>

      </View>


    </ScrollView>
  )
}
}


// export const screenOptions = navData => {





//   return {
//     headerTitle: 'Your Order\\s',
 
//     headerLeft: () => (
//       <HeaderButtons HeaderButtonComponent={HeaderButton}>
//         <Item
//           title="Menu"
//           iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
//           onPress={() => {
//             navData.navigation.toggleDrawer();
//           }}
//         />
//       </HeaderButtons>
//     )
//   };
// };

const styles=StyleSheet.create({


  container:{
 flex:1
  },
  logo1:{
  
    width:140,
    height:140,
    borderRadius: 70
   
     },
     HeaderView:{
   
      height:80,
      // backgroundColor:'lightgray'
     
    },
    logo3:{
  
      width:46,
      height:46,
     borderRadius:23,

     marginTop:6,marginHorizontal:6
     
       },
       Line:{
        alignItems:'center',
        flexDirection:'row',
      
        marginTop:22,
        marginHorizontal:14
      
        
      
      },

      logo3:{
    
        width:80,
        height:80,
       borderRadius:12,
       marginLeft:8,
       marginTop:8
         },
  
})