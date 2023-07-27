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
import {  Content, Card, CardItem, Thumbnail, Icon,Form,Container,Header } from 'native-base';
import Connection from "../connection" ;

import ImagePlaceholder from 'react-native-img-placeholder';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';



export default class edit_Profile extends Component { 
  constructor() {
 
    super();
 
    this.state = {

      data:[],
      data1:[],
      aaa:0,
      profile:null,
      id:'',
      point:''
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
    console.log(user);
    let parsed = JSON.parse(user);
    let id = parsed[0].id;
    let name = parsed[0].name;

    let profile = parsed[0].profile;
  
    let path = Connection+'salon_App/'+profile 
    console.log('id=>', id);
    console.log('aaaaaaaaaaaaaaaaa',path);
   

    this.setState({
      id:id,
      profile:path,
      name:name,
      
    });


   

  };
 













  
Update_Data=()=>{
         

  let uploaddata = new FormData();
  
  const newImage = {
    uri: this.state.profile,
    name: "my_photo.jpg",
    type: "image/jpg",
};
 


  uploaddata.append('image',newImage);
  uploaddata.append('id',this.state.id);
  
    console.log("hdbbh =>",this.state.id)

  // uploaddata.append('id',this.props.navigation.getParam('Id'),);

  //uploaddata.append('fcm_token',this.state.token);


  let api = Connection+'salon_App.php?action=update_profile';
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
   
        AsyncStorage.getItem( 'customer' )
        .then( data => {
          data = JSON.parse( data );
     
          data[0].profile = response.response;
      
          AsyncStorage.setItem( 'customer', JSON.stringify( data ) );
        }).done();
      })
      .catch((error) => {
          console.error(error);
      
      });
    
    
    
}
  
  uploadimage1 = async () => {

    ImagePicker.showImagePicker({ noData: true, mediaType: 'photo', allowsEditing: true, quality: 0.7 }, (response) => {
      // console.log('response =', response);
      if (response.didCancel) {
          console.log('user cancelled  image picker');
      } else if (response.error) {
          console.log('imagepicker error : ', response.error);
      } else if (response.customButton) {
          console.log('user tapped  custom button : ', response.customButton);
      } else {
          //this.uploadimage(response.uri);
           
      console.log("points =>",response.uri)
        
           
        this.setState({ profile: response.uri})
        this.Update_Data()
      }
    });
    }
    
    



  render() {

    const { navigation } = this.props;






  return(
  
<ScrollView>
    
    <View style={styles.container}>
      <View style={{backgroundColor: '#ee2b7a', height: 250}}>
        <View style={{flexDirection: 'row', padding: 20, justifyContent: 'space-between', alignItems: 'center'}}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold', marginRight: 130}}>Edit Profile</Text>
    


        </View>

        <View style={{alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>


        {/* <Image source={require('../assets/pic5.jpg')}
  style={styles.logo1}
      /> */}
      <ImagePlaceholder
   style={styles.logo1}
    loadingStyle={{ size: 'large', color: 'blue' }}
    source={{ uri:this.state.profile}}
    placeholderStyle={styles.logo1}
    borderRadius={100}
/>
            {/* <ImagePlaceholder
   style={styles.logo1}
    loadingStyle={{ size: 'large', color: 'blue' }}
    source={{ uri:this.state.profile}}
    placeholderStyle={styles.logo1}
    borderRadius={70}
/>  */}
<TouchableOpacity    onPress={() =>  this.uploadimage1()}
            style={{
              backgroundColor: '#D1D1D1',
              width: 35,
              height: 35,
              borderRadius: 24,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              right: -5,
              bottom: 20,
            }}>
            <Entypo name="camera" size={22} color="black" />
          </TouchableOpacity>
        </View>
      </View>

 


<Text style={{marginTop: 50, color: '#808080', fontSize: 16, marginLeft: 20}}>CONTACT</Text>



<Text style={{marginTop: 20,  fontSize: 16, marginLeft: 25,marginBottom:10}}>Full name</Text>


<View style={styles.inputContainer}>
        <TextInput
        placeholder="Your full name"
        style={styles.input7}
        keyboardType="email-address"
        value={this.state.name}
        autoCapitalize="none"
        onChangeText={name => this.setState({name})}
        // autoCorrect={false}
        autoCompleteType="email"
        />
      <Icon name="cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:25 }}/>
       </View>









       <Text style={{marginTop: 20,  fontSize: 16, marginLeft: 25,marginBottom:10}}>Phone number</Text>


<View style={styles.inputContainer}>
        <TextInput
        placeholder="Phone number"
        style={styles.input7}
        keyboardType="email-address"
        autoCapitalize="none"
        // value={this.state.phone}
        
        onChangeText={name => this.setState({name})}
        // autoCorrect={false}
        autoCompleteType="email"
        />
      <Icon name="cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:25 }}/>
       </View>







<Text style={{marginTop: 50, color: '#808080', fontSize: 16, marginLeft: 20}}>ADDRESS</Text>


<Text style={{marginTop: 20,  fontSize: 16, marginLeft: 25,marginBottom:10}}>Address</Text>


<View style={styles.inputContainer}>
        <TextInput
        placeholder="Address"
        style={styles.input7}
        keyboardType="email-address"
        autoCapitalize="none"
        // value={this.state.phone}
        onChangeText={name => this.setState({name})}
        // autoCorrect={false}
        autoCompleteType="email"
        />
      <Icon name="cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:25 }}/>
       </View>







       <Text style={{marginTop: 20,  fontSize: 16, marginLeft: 25,marginBottom:10}}>City</Text>


<View style={styles.inputContainer}>
        <TextInput
        placeholder="City"
        style={styles.input7}
        keyboardType="email-address"
        autoCapitalize="none"
        // value={this.state.phone}
        onChangeText={name => this.setState({name})}
        // autoCorrect={false}
        autoCompleteType="email"
        />
      <Icon name="cross" type="Entypo"  color="black" style={{position:'absolute',right:15,fontSize:25 }}/>
       </View>






<TouchableOpacity  style={{width: '80%', height: 50, borderRadius: 8, alignSelf: 'center' ,backgroundColor: '#ee2b7a', marginVertical: 30, alignItems: 'center', alignSelf: 'center', justifyContent: 'center'}}>
  <Text style={{color: 'white', fontSize: 16}}>Update Profile</Text>
</TouchableOpacity>

</View>
    </ScrollView>
  )
}
}



const styles=StyleSheet.create({


  container:{
 flex:1
  },
  logo1:{
  
    width:140,
    height:140,
    borderRadius: 100
   
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
         paddingHorizontal:20
          
        },
})