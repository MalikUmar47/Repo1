import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,SafeAreaView,ImageBackground,TextInput,View,TouchableOpacity,Text,AsyncStorage,Dimensions} from 'react-native';
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
import ImagePlaceholder from 'react-native-img-placeholder';
import { SliderBox } from "react-native-image-slider-box";

import Connection from "../connection" ;
import CheckBox from '@react-native-community/checkbox';

import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';

// import Swiper from 'react-native-swiper';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
import { Actions } from 'react-native-router-flux';
// import icons from '../Constants/icons';

class My_salon extends React.Component {

  constructor() {
    super();
 
    this.state = {
      data1:[],
      data2:[],
      data3:[],
      data4:[],
      images: [
        "https://media.istockphoto.com/photos/at-barber-shop-picture-id685920432?b=1&k=20&m=685920432&s=170667a&w=0&h=xe1s7zsJYrZ2mD2EvOzQu2XOWWNKcbAGBxb2S1x_QaI=",
        "https://media.istockphoto.com/photos/hairstylist-blow-drying-and-cutting-the-hair-of-a-customer-picture-id1311349009?b=1&k=20&m=1311349009&s=170667a&w=0&h=3GI4Ap01X4klGBdiOCI5FVwR4mydi4CA6YPbWYXkMos=",
        "https://media.istockphoto.com/photos/hipster-client-visiting-barber-shop-picture-id626416508?b=1&k=20&m=626416508&s=170667a&w=0&h=_14e0cWnpoNykaFvlfAM6RgaNA1oOiIxGHGUPQuW0ho=",
        "https://media.istockphoto.com/photos/professiona-male-hair-stylist-at-his-business-looking-at-camera-with-picture-id1029003012?b=1&k=20&m=1029003012&s=170667a&w=0&h=qTex5DBZacaKN1mqL_ndVIVcNIbgpPIroIcfnnSPRSw=",
 // Network image
                 
      ],
      
   check:false,
   profile:null
    
    }
  }




//   Display_salon=()=>{ 

  
    
//     let uploaddata = new FormData();         
        
//     uploaddata.append('user_id',this.state.id);
//     console.log("idpppppppppppppppppppppppppppppppppppppppppppp =>", this.state.id)

 

//     let api = Connection+'salon_App.php?action=Display_salon';
//     console.log("pass => ", api)
//     fetch(api, { 
//             method: 'POST',
//             headers: {
//               "Content-Type": "multipart/form-data",
//               "otherHeader": "foo",
//             },
          
//             body: uploaddata, 
//         })
//         .then((response) => response.json())
//         .then((response) => {
//           console.log("response111111111111111111111111111111111111",response.response)

//          let data = response.response
//          let salon_name = data[0].salon_name
//          let description = data[0].description
//          let address = data[0].address
//          let web = data[0].web
//          let phone = data[0].phone
//          let city = data[0].city
//          let images = data[0].images
//          console.log("image_2000000000000000000000",image_3)

//          let image=images.split(",")
//          let image_1=image[0]
//          let path_1 = Connection+'salon_App/'+image_1 

//          let image_2=image[1]
//          let path_2 = Connection+'salon_App/'+image_2 

//          let image_3=image[2]
//          let path_3 = Connection+'salon_App/'+image_3 


//          console.log("image_2000000000000000000000",image_3)

//          this.setState({
//           salon_name:salon_name,
//           description:description,
//           address:address,
//           web:web,
//           phone:phone,
//           city:city,
//           path_1:path_1,
//           path_2:path_2,
//           path_3:path_3,
          


//          })

           
//         })
//         .catch((error) => {
//             console.error(error);
        
//         });


  

    
  
//   }
 



//   componentDidMount = async () => {

//      let user = await AsyncStorage.getItem('customer');

//    let parsed = JSON.parse(user);
//    let id = parsed[0].id;
//    let salon_id = parsed[0].salon_id;

//    console.log("id000000000000000000000000000000000000000000000000000000000000000000 =>", id)
//    this.setState({
//        id: id,
//        salon_id:salon_id
       
//    })
//    this.Display_salon()
//    this.Display_services_staff()

// }




// Display_services_staff=()=>{

  
    
//   let uploaddata = new FormData();         
      
//   uploaddata.append('salon_id',this.state.salon_id);
//   console.log("idpppppppppppppppppppppppppppppppppppppppppppp =>", this.state.salon_id)



//   let api = Connection+'salon_App.php?action=Display_services_staff';
//   console.log("pass => ", api)
//   fetch(api, { 
//           method: 'POST',
//           headers: {
//             "Content-Type": "multipart/form-data",
//             "otherHeader": "foo",
//           },
        
//           body: uploaddata, 
//       })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",response.response)

//         let record = response.response["services"]
//        let record1 = response.response["staff"]
//        let record2 = response.response["reviews"]

//        this.setState({
//         data2:record,
//         data3:record1,
//         data4:record2,
    


//        })

         
//       })
//       .catch((error) => {
//           console.error(error);
      
//       });




  

// }









// createtable1 = () => {
//   let table = []

// let record1 = this.state.data3
//  let len = record1.length
//   if (record1 != 'fail') {
//       for (let i = 0; i < len; i++) {
      

      
//         let name = record1[i].name
//         let profile_1 = record1[i].profile
//         let profile = Connection+'salon_App/'+profile_1

  
     
// table.push(<View>
// {
//   <View>
   
      

//    <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:15,marginTop:20}}> 
//         {/* <Image source={require('../assets/s12.jpg')}
//           style={styles.staff}/> */}
//                 <ImagePlaceholder
//    style={{    width: 90,height: 90,borderRadius: 54,}}
//     loadingStyle={{ size: 'large', color: 'blue' }}
//     source={{ uri:profile}}
//     placeholderStyle={{    width: 90,height: 90,borderRadius: 54,}}
//     borderRadius={100}
// />
//               <Text style={{marginTop: 5, fontSize: 16}}>{name}</Text>
//               </View>






     
//   </View>
//               }
//           </View>
//           )
//           }
//       return table
//           }
//   else {
//       let img = []
//       img.push(<View style={{ flex: 1, justifyContent: 'center' }} >
//           {
// <View>
             
//           </View>
//           }</View>)
//       return img
//   }
// }









// createtable2 = () => {
//   let table = []

// let record1 = this.state.data2
//  let len = record1.length
//   if (record1 != 'fail') {
//       for (let i = 0; i < len; i++) {
      

      
//         let service = record1[i].service
//         let detail = record1[i].detail
//         let price = record1[i].price
//         let time = record1[i].time

       

  
     
// table.push(<View>
// {
//   <View>
   
      

//    <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
     
          
//             <View style={{width: '65%'}}>
//             <Text style={{fontSize: 18,}}>{service}</Text>
//             <Text style={{fontSize: 14, color: 'gray'}}>{detail}</Text>
//             </View>
//             <View>
//             <Text style={{fontSize: 18,}}>{price} $</Text>
//             <Text style={{fontSize: 14, color: 'gray', textAlign: 'center',}}>{time} mint</Text>
//             </View>
//         </View>
//         <View style={{ width: '90%',height: 1,backgroundColor: 'gray',marginTop: 20,alignSelf: 'center'}}></View>






     
//   </View>
//               }
//           </View>
//           )
//           }
//       return table
//           }
//   else {
//       let img = []
//       img.push(<View style={{ flex: 1, justifyContent: 'center' }} >
//           {
// <View>
             
//           </View>
//           }</View>)
//       return img
//   }
// }






//   checked=()=>{
//     this.setState({
//       check:true
//     })
//   }
//   checked1=()=>{
//     this.setState({
//       check:false
//     })
//   }













  
// createtable3 = () => {
//   let table = []
 
//  let record1 = this.state.data4
//  let len = record1.length
//   if (record1 != 'fail') {
//       for (let i = 0; i < len; i++) {
      
 
      
//         let comment = record1[i].comment
//         let review = record1[i].review
//         let name = record1[i].name
 
//         let user_profile = record1[i].user_profile
//         let profile_path = Connection+'salon_App/'+user_profile

//         let time_1 = record1[i].date
//         let splitTime = time_1.split(" ") 
//         var splitdate10 = splitTime[0]
//         var splitdate1 = splitTime[0].split(":");
//         var today = new Date().toISOString().slice(0, 10);
//         var chatdate = new Date(splitdate1);
//         var chatdate1 = new Date(today);

        
//         var Difference_In_Time = chatdate1.getTime() - chatdate.getTime();
//         var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//         var Difference_In_Days_get = Difference_In_Time +"d";


//         let final_post_date = '';

//         if(Difference_In_Days>=0){
//           final_post_date="Today"
//         }

//         if(Difference_In_Days==1){
//           final_post_date="1d"
//         }
//         if(Difference_In_Days==2){
//           final_post_date="2d"
//         }
//         if(Difference_In_Days==3){
//           final_post_date="3d"
//         }
//         if(Difference_In_Days==4){
//           final_post_date="4d"
//         }
//         if(Difference_In_Days==5){
//           final_post_date="5d"
//         }
//         if(Difference_In_Days==6){
//           final_post_date="6d"
//         }



//         if(Difference_In_Days>=7){
//           final_post_date="1w"
//         }
//         if(Difference_In_Days>=14){
//           final_post_date="2w"
//         }
//         if(Difference_In_Days>=21){
//           final_post_date="3w"
//         }
       

       
//         var splitdate2 = splitdate1[0].split(" ");
//         var splitdate3 = splitdate2[0].split("-");
//         var year = splitdate3[0];
//         var month = splitdate3[1];
//         var day = splitdate3[2];
//         var monthName = '';

//         if(month=="01"){
//           monthName="Jan"
//         }
//         if(month=="02"){
//           monthName="Feb"
//         }
//         if(month=="03"){
//           monthName="Mar"
//         }
//         if(month=="04"){
//           monthName="Apr"
//         }
//         if(month=="05"){
//           monthName="May"
//         }
//         if(month=="06"){
//           monthName="Jun"
//         }
//         if(month=="07"){
//           monthName="Jul"
//         }
//         if(month=="08"){
//           monthName="Aug"
//         }
//         if(month=="09"){
//           monthName="Sep"
//         }
//         if(month=="10"){
//           monthName="Oct"
//         }
//         if(month=="11"){
//           monthName="Nov"
//         }
//         if(month=="12"){
//           monthName="Dec"
//         }
//          let Execttime = day +" "+monthName+", "+year

       
//           // console.log("222222222222222",Execttime)

//           if(Difference_In_Days>=28){
//             final_post_date=Execttime
//           }

 
//  console.log("commentcommentcommentcommentcommentcommentcommentcomment =>", comment)
       
 
  
     
//  table.push(<View>
//  {
//   <View>
   
      
 
//    <View style={{flexDirection:'row',alignItems:'center',marginLeft:10,marginTop:50}}>
     
//                     <ImagePlaceholder
//   style={styles.textage}
//     loadingStyle={{ size: 'large', color: 'blue' }}
 
//    source={{ uri:profile_path}}
//    placeholderStyle={styles.textage}
//    borderRadius={100}
// />
// <View style={{flexDirection:'column',marginLeft:8,width:90}}>
// <Text  style={{fontSize:15,fontWeight:'bold',color:'black'}}>{name}</Text>
// <Text  style={{fontSize:13,color:'gray'}}>{final_post_date}</Text>
// </View>
// <View style={{flexDirection:'row',marginLeft:100,alignItems:'center'}}>

// <FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
// <FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
// <FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
// <FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
// <FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
// </View>


// </View>
// <Text  style={{fontSize:15,color:'gray',marginLeft:18,marginTop:12}}>{comment}</Text>


 
     
//   </View>
//               }
//           </View>
//           )
//           }
//       return table
//           }
//   else {
//       let img = []
//       img.push(<View style={{ flex: 1, justifyContent: 'center' }} >
//           {
//  <View>
             
//           </View>
//           }</View>)
//       return img
//   }
//  }
 


  render() {
  
    return (




<View style={{flex:1}}>

<View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15, borderBottomColor: 'gray', borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="menu" type="Ionicons" style={{ color: 'black', fontSize: 25 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10 }}>Home</Text>
                    </View>
                    <Icon name="bell-o" type="FontAwesome" style={{ color: 'black', fontSize: 23 }} />
                </View>
                <ScrollView>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: width / 1, paddingHorizontal: 15, marginVertical: 15 }}>
                    <Image style={{ width: 55, height: 55, borderRadius: 100 }} source={require('../assets/a1.jpg')} />

                    <View style={{ width: '80%', marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>James Dixon</Text>
                            <Text style={{ color: 'red', fontSize: 13, fontWeight: '400' }}>Edit</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                            <Text style={{ color: 'black', fontSize: 13, fontWeight: '400' }}>Makeup Artist</Text>
                            <Text style={{ color: 'gray', fontSize: 12, fontWeight: '400', marginBottom: -20 }}>Completed 86%</Text>
                        </View>
                    </View>
                </View>

                <Text style={{color:'#ee2b7a',fontSize:15,fontWeight:'bold',paddingHorizontal:15,marginTop:10}}>Your Customers</Text>

                <View>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <View style={{ borderRadius: 6, justifyContent: 'center', backgroundColor: 'white', width: 100,  marginRight: 10, marginLeft: 15 ,paddingVertical:8}}>
                             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                                 <Text></Text>
                                 <Icon name="heart" type="AntDesign" style={{ color: '#ee2b7a', fontSize: 14 }} />
                             </View>
                              <Image source={require('../assets/a7.jpg')} style={{ width: 45, height: 45,borderRadius:100,alignSelf:'center' }} /> 
                             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginTop: 5 ,textAlign:'center'}}>Pamella</Text>
                             {/* <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 10,textAlign:'center'}}>male</Text> */}
                        </View>

                        <View style={{ borderRadius: 6, justifyContent: 'center', backgroundColor: 'white', width: 100, marginRight: 10 ,paddingVertical:8}}>
                             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                                 <Text></Text>
                                 <Icon name="heart" type="AntDesign" style={{ color: '#ee2b7a', fontSize: 14 }} />
                             </View>
                              <Image source={require('../assets/a2.jpg')} style={{ width: 45, height: 45,borderRadius:100,alignSelf:'center' }} /> 
                             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginTop: 5 ,textAlign:'center'}}>Pamella</Text>
                             {/* <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 10,textAlign:'center'}}>male</Text> */}
                        </View>

                        <View style={{ borderRadius: 6, justifyContent: 'center', backgroundColor: 'white', width: 100, marginRight: 10 ,paddingVertical:8}}>
                             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                                 <Text></Text>
                                 <Icon name="heart" type="AntDesign" style={{ color: '#ee2b7a', fontSize: 14 }} />
                             </View>
                              <Image source={require('../assets/a5.jpg')} style={{ width: 45, height: 45,borderRadius:100,alignSelf:'center' }} /> 
                             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginTop: 5 ,textAlign:'center'}}>Pamella</Text>
                             {/* <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 10,textAlign:'center'}}>male</Text> */}
                        </View>

                        <View style={{ borderRadius: 6, justifyContent: 'center', backgroundColor: 'white', width: 100, marginRight: 10,paddingVertical:8 }}>
                             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                                 <Text></Text>
                                 <Icon name="heart" type="AntDesign" style={{ color: '#ee2b7a', fontSize: 14 }} />
                             </View>
                              <Image source={require('../assets/a8.jpg')} style={{ width: 45, height: 45,borderRadius:100,alignSelf:'center' }} /> 
                             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginTop: 5 ,textAlign:'center'}}>Pamella</Text>
                             {/* <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 10,textAlign:'center'}}>female</Text> */}
                        </View>

                        <View style={{ borderRadius: 6, justifyContent: 'center', backgroundColor: 'white', width: 100, marginRight: 10 ,paddingVertical:8}}>
                             <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10}}>
                                 <Text></Text>
                                 <Icon name="heart" type="AntDesign" style={{ color: '#ee2b7a', fontSize: 14 }} />
                             </View>
                              <Image source={require('../assets/a1.jpg')} style={{ width: 45, height: 45,borderRadius:100,alignSelf:'center' }} /> 
                             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12, marginTop: 5 ,textAlign:'center'}}>Pamella</Text>
                             {/* <Text style={{ color: 'gray', fontWeight: 'bold', fontSize: 10,textAlign:'center'}}>male</Text> */}
                        </View>
                    </ScrollView>
                </View>





                <View style={{marginVertical:50,paddingHorizontal:15}}>
<SliderBox sliderBoxHeight={180} parentWidth={width/1.09} images={this.state.images}  autoplay/>

</View>





                <Text style={{color:'#ee2b7a',fontSize:15,fontWeight:'bold',paddingHorizontal:15, }}>Your Upcoming Appointments</Text>

             

<ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false} style={{flexDirection:'row',marginBottom:20 , marginTop:20}}>




<View>
                            <View activeOpacity={0.8} style={{        width: width / 1.1,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        // marginTop:20,
        shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
        paddingVertical: 15,
        marginLeft: 15,
        marginBottom: 15}}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'black', fontSize: 15 }}>Booking Date - 29 April</Text>
                                    <TouchableOpacity  >
                                        <Text style={{ color: '#F59018', fontWeight: 'bold' }}>View Detail</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: 'gray', margin: 15 }}>
                                </View>

                                <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
          
                                    <Image style={{   width: 60,
        height: 60,
        borderRadius: 100,}} source={require('../assets/a1.jpg')} />
                                    <View style={{ width: '80%', paddingHorizontal: 10 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Taimoor </Text>
                                        <Text numberOfLines={1} style={{ color: 'gray', maxWidth: '100%', marginLeft: 5 }}>Railway Road Narowal</Text>
                                        {/* <Text numberOfLines={1} style={{ color: 'gray', maxWidth: '100%', marginLeft: 5 }}>DostRx Hospitals</Text> */}
                                        <Text style={{ color: '#2D7E8C', fontSize: 15, fontWeight: 'bold' }}>$125</Text>
                                    </View>
                                </View>


                                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                                    <TouchableOpacity  style={{ width: 120, height: 35, borderRadius: 20, backgroundColor: '#ee2b7a', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10 }} >
                                        <Icon name="call" type="Ionicons" style={{ color: 'white', fontSize: 14 }} />
                                        <Text style={{ color: 'white', marginLeft: 5 }}>Call</Text>

                                    </TouchableOpacity>

                                    <TouchableOpacity  
                                        style={{ width: 90, height: 35, borderRadius: 20, backgroundColor: '#ee2b7a', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10 }}>
                                        <Icon name="message1" type="AntDesign" style={{ color: 'white', fontSize: 15 }} />
                                        <Text style={{ color: 'white', marginLeft: 5 }}>Sms</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>


                        </View>

 

<View>
                            <View activeOpacity={0.8} style={{        width: width / 1.1,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        // marginTop:20,
        shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
        paddingVertical: 15,
        marginLeft: 15,
        marginBottom: 15}}>
                                <View style={{ flexDirection: 'row', paddingHorizontal: 15, justifyContent: 'space-between' }}>
                                    <Text style={{ color: 'black', fontSize: 15 }}>Booking Date - 29 April</Text>
                                    <TouchableOpacity  >
                                        <Text style={{ color: '#F59018', fontWeight: 'bold' }}>View Detail</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: 'gray', margin: 15 }}>
                                </View>

                                <View style={{ flexDirection: 'row', paddingHorizontal: 15 }}>
          
                                    <Image style={{   width: 60,
        height: 60,
        borderRadius: 100,}} source={require('../assets/a1.jpg')} />
                                    <View style={{ width: '80%', paddingHorizontal: 10 }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Taimoor </Text>
                                        <Text numberOfLines={1} style={{ color: 'gray', maxWidth: '100%', marginLeft: 5 }}>Railway Road Narowal</Text>
                                        {/* <Text numberOfLines={1} style={{ color: 'gray', maxWidth: '100%', marginLeft: 5 }}>DostRx Hospitals</Text> */}
                                        <Text style={{ color: '#2D7E8C', fontSize: 15, fontWeight: 'bold' }}>$125</Text>
                                    </View>
                                </View>


                                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 10 }}>
                                    <TouchableOpacity   style={{ width: 120, height: 35, borderRadius: 20, backgroundColor: '#ee2b7a', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Icon name="call" type="Ionicons" style={{ color: 'white', fontSize: 14 }} />
                                        <Text style={{ color: 'white', marginLeft: 5 }}>Call</Text>

                                    </TouchableOpacity>

                                    <TouchableOpacity  
                                        style={{ width: 90, height: 35, borderRadius: 20, backgroundColor: '#ee2b7a', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginLeft: 10 }}>
                                        <Icon name="message1" type="AntDesign" style={{ color: 'white', fontSize: 15 }} />
                                        <Text style={{ color: 'white', marginLeft: 5 }}>Sms</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>


                        </View>



</ScrollView>    




</ScrollView>   

 </View>


      
    );
  }
}






export default My_salon;
