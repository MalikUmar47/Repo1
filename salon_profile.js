import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,BackHandler,AsyncStorage,TextInput,View,TouchableOpacity,Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import { Actions } from 'react-native-router-flux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content,Icon, Footer, FooterTab, Badge, Right ,Picker, Left,Button} from 'native-base';

import ImagePlaceholder from 'react-native-img-placeholder';
import Connection from "../connection" ;



class SocialScreen extends React.Component {

 
  // CloseDrawer=(value)=>{

  //   let ScreenName=value
    
  //   if(ScreenName=='Home'){
  //     this.RBSheet.close()
  //     Actions.HomeScreen()
  //     }
  //     else if (ScreenName=='AddProperty'){
  //       this.RBSheet.close()
  //       Actions.AddProperty()
  //     }
  //     else if (ScreenName=='SearchProperty'){
  //       this.RBSheet.close()
  //       Actions.SearchProperty()
  //     }
  //     else if (ScreenName=='tab_Screen'){
  //       this.RBSheet.close()
  //       Actions.tab_Screen()
  //     }
  //     else if (ScreenName=='SavedSearch'){
  //       this.RBSheet.close()
  //       Actions.SavedSearch()
  //     }
  //     else if (ScreenName=='Agents'){
  //       this.RBSheet.close()
  //       Actions.Agents()
  //     }
  //     else if (ScreenName=='Blog'){
  //       this.RBSheet.close()
  //       Actions.Blog()
  //     }
  //     else if (ScreenName=='About'){
  //       this.RBSheet.close()
  //      Actions.About()
  //     }
  //     else if (ScreenName=='Contact'){
  //       this.RBSheet.close()
  //       Actions.Contact()
  //     }
  //     else if (ScreenName=='Terms'){
  //       this.RBSheet.close()
  //       Actions.Terms()
  //     }
  //     else if (ScreenName=='Setting'){
  //       this.RBSheet.close()
  //             Actions.Setting()
  //     }
  //     else if (ScreenName=='Logout'){
  //       this.RBSheet.close()
  //       Actions.LoginScreen()
  //     }

  // }

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
       Actions.pop()
      return true;
  }

  componentDidMount = async () => {
        
    let user = await AsyncStorage.getItem('customer');

  let parsed = JSON.parse(user);
  let id = parsed[0].id;
  let salon_id = parsed[0].salon_id;
  let name = parsed[0].name;
  let profile = parsed[0].profile;
  let email = parsed[0].email;



  let path = Connection+'salon_App/'+profile

  console.log("id000000000000000000000000000000000000000000000000000000000000000000 =>", id)
  this.setState({
      id: id,
      salon_id:salon_id,
      name:name,
      path:path,
      email:email
      
  })
  
}

  render() {


  
  
    return (

      <View style={styles.container}>



      

<ScrollView>



<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:50, paddingHorizontal: 20}}>
<TouchableOpacity activeOpacity={0.8} onPress={() =>  Actions.Setting()} >
 

<Image source={require('../assets/z8.jpg')}
  style={styles.textage}/>
     </TouchableOpacity>
<View style={{width: '73%'}}>
<Text  style={{fontSize:22,fontWeight:'bold',color:'black',marginTop:12}}>Fashion Saloon</Text>
<Text  style={{fontSize:14,fontWeight:'bold',color:'gray',}}>+923486694823</Text>

</View> 
 

</View>
<TouchableOpacity  >

<View style={{flexDirection: 'row', paddingHorizontal: 25, marginTop:30, justifyContent: 'space-between', alignItems:'center'}}>
<FontAwesome name="calendar-o" size={24} color="black" />
<Text style={{fontSize: 16, width: '70%'}}>My Appointments</Text>
<View style={{backgroundColor: '#ee2b7a', width: 30, height: 30, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
  <Text style={{color: 'white', fontSize: 16}}>2</Text>
</View>
<AntDesign name="right" size={22} color="black" style={{}}/>

</View>
</TouchableOpacity>
<View style={{borderBottomWidth:0.5,borderColor:'lightgray', marginTop: 15}}></View>

<TouchableOpacity onPress={() =>  Actions.services_list()}>
<View style={{flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', marginTop: 15, alignItems:'center'}}>
<MaterialIcons name="wallet-giftcard" size={24} color="black" />
<Text style={{fontSize: 16, width: '70%'}}>My Services</Text>
<View style={{backgroundColor: '#ee2b7a', width: 30, height: 30, borderRadius: 20, alignItems: 'center', justifyContent: 'center'}}>
  <Text style={{color: 'white', fontSize: 16}}>1</Text>
</View>

<AntDesign name="right" size={22} color="black" style={{}}  />
</View>
</TouchableOpacity>

<View style={{borderBottomWidth:0.5,borderColor:'lightgray', marginTop: 15}}></View>
<TouchableOpacity  onPress={() =>  Actions.add_staff()}>
<View style={{flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', marginTop: 15, alignItems:'center'}}>
<MaterialIcons name="group" size={24} color="black" />

<Text style={{fontSize: 16, width: '80%'}}>My Satff</Text>

<AntDesign name="right" size={22} color="black" style={{}}/>
</View>
</TouchableOpacity>


<View style={{borderBottomWidth:0.5,borderColor:'lightgray', marginTop: 15}}></View>

<TouchableOpacity   >
<View style={{flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', marginTop: 15, alignItems:'center'}}>
<FontAwesome name="user-o" size={22} color="black" />
<Text style={{fontSize: 16, width: '80%'}}>Edit Saloon</Text>


<AntDesign name="right" size={22} color="black" style={{}}/>

</View>
</TouchableOpacity>










<View style={{borderBottomWidth:0.5,borderColor:'lightgray', marginTop: 15}}></View>
<TouchableOpacity  >

<View style={{flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', marginTop: 15, alignItems:'center'}}>
<FontAwesome name="heart-o" size={24} color="black" />
<Text style={{fontSize: 16, width: '80%'}}>Udate Schedule</Text>

<AntDesign name="right" size={22} color="black" style={{}}/>
</View>
</TouchableOpacity>



<View style={{borderBottomWidth:0.5,borderColor:'lightgray', marginTop: 15}}></View>

<TouchableOpacity  onPress={() =>  Actions.my_Review()}>
<View style={{flexDirection: 'row', paddingHorizontal: 25, justifyContent: 'space-between', marginTop: 15, alignItems:'center'}}>
<FontAwesome name="star-o" size={24} color="black" />
<Text style={{fontSize: 16, width: '80%'}}>My reviews</Text>


<AntDesign name="right" size={22} color="black" style={{}} />
</View>
</TouchableOpacity>

<View style={{borderBottomWidth:0.5,borderColor:'lightgray', marginTop: 15}}></View>

 






{/* <View style={{borderBottomWidth:0.5,borderColor:'lightgray', marginTop: 15}}></View> */}

<TouchableOpacity onPress={() =>  Actions.LoginScreen()}>

<View style={{backgroundColor: 'lightgray', width: 140, height: 40, borderRadius: 20, marginTop: 40, alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}>
  <Text style={{color: 'black', fontSize: 16}}>Logout</Text>
</View>
</TouchableOpacity>
       
      
</ScrollView>

      
 

     </View>
     
            
    );
  }
}





const styles = StyleSheet.create({

    textage:{
        width:80,
        height:80,
        borderRadius:100
    },

    inactiveicone:{
     height:44,width:170,justifyContent:'center'
    },
    activeicone:{
        borderBottomWidth:2,borderBottomColor:'blue',height:44,width:170,justifyContent:'center'
    },
    incol:{
        color:'black'
    },
    col:{
        color:'blue'
    },
    logo1:{
  
        width:110,
        height:100,
       borderRadius:12
         },
         logo2:{
  
          width:106,
          height:106,
         borderRadius:12,
   
           },
  
           textage1:{
            width:90,
            height:90,
            borderRadius:20
        },
  

});

export default SocialScreen;
