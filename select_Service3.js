import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,Button ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import icons from '../Constants/icons';
import { Actions } from 'react-native-router-flux';
import Connection from "../connection" ;
import ImagePlaceholder from 'react-native-img-placeholder';

import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  


export default class select_Service3 extends Component {


      constructor(props) {
 
        super(props)
     
        this.state = {
     
          name: '',
          password: '',
          email: '',
          checked: false,
          role:'',
          parsed_1:[]
         
      
     
        }
     
      }



      geted=async()=>{
  
     
      
          let appointment = await AsyncStorage.getItem("appointment");
          let service_1 = await AsyncStorage.getItem("service");


      
          let parsed = JSON.parse(appointment); 
          let salon_id = parsed[0].salon_id;
          let service_id = parsed[0].service_id;
          let staff_id = parsed[0].staff_id;
          
          let salon_name = parsed[0].salon_name;
          let address = parsed[0].address;
          let path_1 = parsed[0].path_1;

          let date = parsed[0].date;
          let time_date = parsed[0].time;
          





       
        

          let parsed_1 = JSON.parse(service_1); 
 

 

      
    
      this.setState({
        salon_id:salon_id,
        service_id:service_id,
        staff_id:staff_id,

        path_1:path_1,
        address:address,
        salon_name:salon_name,


      
        date:date,
        time_date:time_date,
        parsed_1:parsed_1

      })






      }


 



 


    render() {
        return (
<View style={{flex:1}}>

            <ScrollView>
               
               <View style={{height:150,backgroundColor:'#ee2b7a',width:"100%"}}>
                   <View style={{flexDirection: 'row', paddingHorizontal: 20, justifyContent: 'space-between', marginTop: 20}}>

<Ionicons onPress={()=>Actions.pop()} name="chevron-back" size={30} color='white' style={{marginHorizontal:-4}} />
<Entypo name="cross" size={24} color="white" />

                   </View>

<View style={{marginTop:30, paddingHorizontal: 20}}>
    




<Text  style={{fontSize:14,color:'lightgray',}}>Step 4 of 4</Text>

<Text  style={{fontSize:22,color:'white',}}>Confirmation</Text>




      
     </View>

     </View>


     <View style={{flexDirection: 'row', padding: 20, }}>
     <Image source={require('../assets/o3.jpg')}
      style={styles.logo3}/>
                 {/* <ImagePlaceholder
  style={styles.logo3}
   loadingStyle={{ size: 'large', color: 'blue' }}
   source={{ uri:this.state.path_1}}
   placeholderStyle={styles.logo3}
   borderRadius={12}
/> */}
      <View style={{marginLeft: 20, marginTop: 10, width: '60%'}}>

      <Text style={{fontSize: 20}}>Fashion Saloon</Text>
      <Text style={{color: 'gray', fontSize: 16}}>Circular Road Narowal</Text>


      </View>


     </View>




<Text
          style={{
            fontSize: 16,
      
           
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 10
            
          }}>
          APPOINTMENT
        </Text>





<View style={{padding: 30, }}>

<Text style={{fontSize: 18}}>25 Apr, Monday</Text>
<Text style={{color: 'gray', fontSize: 14}}>02:45 am (60 mint)</Text>


</View>

 
{/* {this.createtable2()} */}

  
<View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
       {/* <TouchableOpacity  onPress={()=> this.changebtn(service_id,service,detail,price,time)}> */}
    
            {/* <CheckBox
            
              value={this.state[box]}
              onValueChange={checked => this.changebtn(service_id,service,detail,price,time,checked)}
            /> */}
            {/* </TouchableOpacity> */}
    
              
                <View style={{width: '65%'}}>
                <Text style={{fontSize: 18,}}>Hair Cut</Text>
                <Text style={{fontSize: 14, color: 'gray'}}>Haor cut with extra jell.</Text>
                </View>
                <View>
                <Text style={{fontSize: 18,}}>45 $</Text>
                <Text style={{fontSize: 14, color: 'gray', textAlign: 'center',}}> 60 mint</Text>
                </View>
                
            </View>


{/* 

<View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 40, alignItems: 'center', justifyContent: 'space-between'}}>
    <Text style={{fontSize: 20}}>Add Booking Notes</Text>
<AntDesign name="right" size={22} color="black" style={{marginLeft: 10}}/>
</View> */}



<Text  style={{fontSize: 16,marginHorizontal: 30,marginTop: 60,marginBottom: 10}}>CHECKOUT</Text>

{/* <View style={{ marginTop:20, marginLeft: 30, }}>
<CircleCheckBox
checked={true}
onToggle={(checked) => console.log('My state is: ', checked)}
label="Pay with Card"
outerColor='#ee2b7a'
innerColor ='#ee2b7a'
styleLabel={{ fontSize: 18, marginLeft: 20}}
/>
</View> */}


<View style={{marginTop:30,  marginLeft: 30  }}>
<CircleCheckBox
checked={true}
onToggle={(checked) => console.log('My state is: ', checked)}
label="Pay in Store"
outerColor='gray'
innerColor ='white'
styleLabel={{ fontSize: 18, marginLeft: 20}}
/>
</View>




<Text  style={{fontSize: 16,marginHorizontal: 30,marginTop: 60,}}>CANCELATION POLICY</Text>
<Text  style={{fontSize: 14,marginHorizontal: 30,marginTop: 10,marginBottom:90}}>Cancel fee anytime in advance, otherwise you can be charged 10% of the services for not showing up</Text>



    
    


          
          

            </ScrollView>

<View style={{position:'absolute',bottom:0,backgroundColor:'white',width:'100%',height:70,padding:10,flexDirection:'row'}}>
<View style={{flexDirection:'column',width:120}}>
<Text  style={{fontSize:14,color:'gray',marginLeft:6,}}>45.00 USD</Text>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>60 mint</Text>
</View>

<TouchableOpacity   onPress={()=>Actions.HomeScreen()}
     style={{width: '30%', height: 45,  borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center',marginLeft:100}}   >
<Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>Book</Text>
</TouchableOpacity>
</View>
          </View>

        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFAFA',
    },
    tinyImage: {
      width: 45,
      height: 45,
      borderRadius: 24,
    },
    storyImage: {
      width: 100,
      height: 100,
      borderRadius: 54,
    },
    concert: {
      height: 300,
      width: '100%',
      alignSelf: 'center',
    },
    notiImage: {
      width: 35,
      height: 35,
      borderRadius: 54,
    },
    input3: {
      borderRadius: 12,
      height: 45,
      width: '85%',
      paddingHorizontal: 45,
      backgroundColor: '#D1D1D1',
    },
    icon: {
      position: 'absolute',
      right: 10,
    },
    icon2: {
      position: 'absolute',
      right: 45,
    },
    icon3: {
      position: 'absolute',
      right: 80,
    },
    logo1:{
        width:60,
        height:60,
        borderRadius:50
    },
    logo3:{
    
        width:90,
        height:90,
       borderRadius:12,
       marginLeft:8,
       marginTop:8
         },
  });
  
