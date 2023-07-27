import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,BackHandler ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Connection from "../connection" ;
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import icons from '../Constants/icons';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import { Actions } from 'react-native-router-flux';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RBSheet from 'react-native-raw-bottom-sheet';
import { Rating, AirbnbRating } from 'react-native-ratings';
 




export default class appointment extends Component {

  constructor() {
    super();
 
    this.state = {
      data1:[],
      data2:[],
      data3:[],

   checked:false,
   profile:null,
   check_status:true
    
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




  Display_Appointment=()=>{
    let uploaddata = new FormData();         
        
    uploaddata.append('salon_id',this.state.salon_id);
  
    let api = Connection+'salon_App.php?action=Display_Appointment';
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

         let record = response.response["äppointment"]
         console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",record)
        

         this.setState({
          data1:record,
         })  
        })
        .catch((error) => {
            console.error(error);
        });
  }



  Display_services=()=>{
    let uploaddata = new FormData();         
         
    uploaddata.append('salon_id',this.state.salon_id);
  
    let api = Connection+'salon_App.php?action=Display_Appointment';
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

         let record = response.response["services"]
          console.log("lllllllllllllllllllllllllllllllllllllll",record)
        

         this.setState({
          data2:record,
         })  
        })
        .catch((error) => {
            console.error(error);
        });
  }
 
 



  componentDidMount = async () => {

     let user = await AsyncStorage.getItem('customer');

   let parsed = JSON.parse(user);
   let id = parsed[0].id;
   let salon_id = parsed[0].salon_id;

  //  console.log("id000000000000000000000000000000000000000000000000000000000000000000 =>", id)
   this.setState({
       id: id,
       salon_id:salon_id
       
   })
   this.Display_Appointment()
   this.Display_services()


}




createtable2 = () => {
  let table = []

let record1 = this.state.data1

 let len = record1.length
  if (record1 != 'fail') {
      for (let i = 0; i < len; i++) {  
      

      
        let service = record1[i].service
        let services_id = record1[i].services_id
        let services_id_1=services_id[2]

        let detail = record1[i].detail
        let price = record1[i].price
        let time = record1[i].time
        let date = record1[i].date


        console.log("response1111gggggggggggggggggggggg11111111111111111111111111111111",services_id_1)

       

  
     
table.push(<View>
{
  <View>
   
   <TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.active_Appointment({
     services_id:services_id,
     data:this.state.data2,
     time:time,
     date:date
   })} >
       

   <View  style={{backgroundColor: 'white',  borderRadius: 10, height: hp('34%'), margin: 20, shadowColor: "#000", shadowOpacity: 1,}}>
     <Text  style={{fontSize: 26,fontWeight: 'bold',
            marginHorizontal: 20,
            marginTop: 20,
            marginBottom: 10
          }}>{date}   {time}</Text>

     {this.createtable3(services_id_1)}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'gray',
            marginTop:15,
            alignSelf: 'center'
          }}></View>
                 {this.state.check_status == true ?
        <View style={{width: '85%', shadowOpacity: 0.5, shadowOffset: 10, alignItems: 'center',    flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-between', paddingVertical: 20,   }}><View>
  <Text style={{fontSize: 16, color: '#ee2b7a' }}>IN 45 DAYS</Text>
</View>
<TouchableOpacity  onPress={() =>  Actions.rate_Experience()}  style={{width: 60, height: 30, borderRadius: 18, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center'}}>
  <Text style={{color: 'white',  fontSize: 12}}>active</Text>
</TouchableOpacity>
</View>
:
<View style={{flexDirection:'row',alignItems:'center' ,marginTop: 15,}}>
{/* <View style={{flexDirection:'row'}}>
     <EvilIcons name="star"  size={28} color='gray' />
     <EvilIcons name="star"  size={28} color='gray' />
     <EvilIcons name="star"  size={28} color='gray' />
     <EvilIcons name="star"  size={28} color='gray' />
     <EvilIcons name="star"  size={28} color='gray' />
</View> */}
<Rating
  type='custom'
  // ratingImage={WATER_IMAGE}
  ratingColor='#ee2b7a'
   ratingCount={5}
  imageSize={25}
  startingValue={0}
   ratingBackgroundColor='#c8c7c8'
  onFinishRating={this.ratingCompleted}
  style={{ paddingHorizontal: 6 }}
 />

<TouchableOpacity    >
<Text style={{color: 'red',  fontSize: 16,marginLeft:25,fontWeight:"bold"}}>Review</Text>
</TouchableOpacity>
 
 <View style={{width: 80, height: 30, borderRadius: 18, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center',marginLeft:20}}>
  <Text style={{color: 'white',  fontSize: 12}}>Completed</Text>
  </View>
 
</View>
    

  }

     </View>


</TouchableOpacity>
     
  </View>
              }
          </View>
          )
          }
      return table
          }
  else {
      let img = []
      img.push(<View style={{ flex: 1, justifyContent: 'center' }} >
          {
<View>
             
          </View>
          }</View>)
      return img
  }
}





createtable3 = (services_id_1) => {
  let table = []

let record1 = this.state.data2
 let len = record1.length
  if (record1 != 'fail') {
      for (let i = 0; i < len; i++) {
      

      
        let service = record1[i].service
        let id = record1[i].id

        let detail = record1[i].detail
        let price = record1[i].price
        let time = record1[i].time

       

  
     
table.push(<View>
{
  <View>
   {services_id_1==id ? 
      

      <View style={{flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center', justifyContent: 'space-between',marginTop:15}}>
      <View >
      <Text style={{fontSize: 18,}}>{service}</Text>
      <Text style={{ fontSize: 14, color: 'gray'}}>{ detail.length > 30 ?   ((detail.substring(0,30-3))+'...') :  detail }</Text>
      {/* <Text style={{fontSize: 14, color: 'gray'}}>{detail}</Text> */}
      </View>
      <View>
      <Text style={{fontSize: 18,marginLeft:10}}>$ {price}</Text>
      <Text style={{fontSize: 14, color: 'gray', textAlign: 'center', marginLeft:10}}>{time} mint</Text>
      </View>

     </View>
     :
     <View>
     </View>
}


     
  </View>
              }
          </View>
          )
          }
      return table
          }
  else {
      let img = []
      img.push(<View style={{ flex: 1, justifyContent: 'center' }} >
          {
<View>
             
          </View>
          }</View>)
      return img
  }
}


Appointment_status=()=>{
  this.setState({
      check_status:false
  })
  this.RBSheet.close()
}

Appointment_status_change=()=>{
this.setState({
    check_status:true

})
this.RBSheet.close()
}


    render() {
        return (
            <ScrollView>
               
               <View style={{height: hp('10%') ,backgroundColor:'#ee2b7a',width:"100%", justifyContent: 'center', alignItems: 'center'}}>
               <Text  style={{fontSize:22,color:'white',}}>Appointments</Text>



     </View>


     <View style={{flexDirection: 'row',  paddingHorizontal: 30, backgroundColor: '#F6D0DF' , height: hp('8%'), padding: 10}}>
    
     {this.state.check_status == true ?
    <TouchableOpacity      onPress={() =>  this.RBSheet.open()}   style={{backgroundColor: 'white', width: hp('15%'), height:40, paddingHorizontal: 20, borderRadius: 18, flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between'}}>
 
        <Text style={{fontSize: 14}}>Active</Text>
        <Entypo name="chevron-small-up" size={24} color="black" />
        </TouchableOpacity>
:
<TouchableOpacity      onPress={() =>  this.RBSheet.open()}   style={{backgroundColor: 'white', width: hp('17%'), height:40, paddingHorizontal: 20, borderRadius: 18, flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between'}}>

<Text style={{fontSize: 14}}>Completed</Text>
<Entypo name="chevron-small-up" size={24} color="black" />
</TouchableOpacity>
    }
 

    <TouchableOpacity     onPress={() =>  this.RBSheet.open()}  style={{backgroundColor: 'white', width: hp('20%'), marginLeft: 10,  height:40, paddingHorizontal: 20, borderRadius: 18, flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between'}}>

<Text style={{fontSize: 14}}>Newest First</Text>
<Entypo name="chevron-small-up" size={24} color="black" />

</TouchableOpacity>


     </View>

{this.createtable2()}



   






     <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}

          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            draggableIcon: {
              backgroundColor: "lightgray"
            },
          }}
          height={350}
          

          openDuration={250}>
          <View
            style={{
              flex: 1,
              // backgroundColor:'lightgray'
            }}>

             
             
              <Text style={{fontSize: 24, fontWeight: 'bold', marginHorizontal: 20, }}>Filter</Text>
     <TouchableOpacity     onPress={() =>  this.Appointment_status_change()} >

              <View style={{flexDirection: 'row', width: '90%',  marginTop: 20,alignSelf: 'center', justifyContent: 'space-between'}}>
                <Text style={{color: '#ee2b7a', fontSize: 18}}>Active</Text>
                <CircleCheckBox
checked={true}
onToggle={(checked) => console.log('My state is: ', checked)}
// labelPosition={LABEL_POSITION.RIGHT}

outerColor='#ee2b7a'
innerColor ='#ee2b7a'
styleLabel={{ fontSize: 18, marginLeft: 20}}
/>
              </View>
</TouchableOpacity>

     <View style={{borderBottomWidth:0.5,borderColor:'lightgray',marginTop:20}}></View>


     <TouchableOpacity     onPress={() =>  this.Appointment_status()} >


     <View style={{flexDirection: 'row', width: '90%',  marginTop: 10,alignSelf: 'center', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 18}}>Completed</Text>
                <CircleCheckBox
checked={false}
onToggle={(checked) => console.log('My state is: ', checked)}
// labelPosition={LABEL_POSITION.RIGHT}

outerColor='gray'
innerColor ='#ee2b7a'
styleLabel={{ fontSize: 18, marginLeft: 20}}
/>
              </View>
</TouchableOpacity>

     <View style={{borderBottomWidth:0.5,borderColor:'lightgray',marginTop:20}}></View>


     
     <View style={{flexDirection: 'row', width: '90%',  marginTop: 10,alignSelf: 'center', justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 18}}>Other</Text>
                <CircleCheckBox
checked={false}
onToggle={(checked) => console.log('My state is: ', checked)}
// labelPosition={LABEL_POSITION.RIGHT}

outerColor='gray'
innerColor ='#ee2b7a'
styleLabel={{ fontSize: 18, marginLeft: 20}}
/>
              </View>
     <View style={{borderBottomWidth:0.5,borderColor:'lightgray',marginTop:20}}></View>



     <TouchableOpacity   onPress={() =>  this.RBSheet.close()}  style={{width: wp('90%'), marginTop: 30, height: hp('7%'),   alignSelf: 'center', borderRadius: 8, borderColor: '#ee2b7a', borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}   >
         
  <Text style={{color: '#ee2b7a', fontWeight: 'bold', fontSize: 16}}>CLOSE</Text>

</TouchableOpacity>

</View>




  </RBSheet>







          
          

            </ScrollView>
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
  
