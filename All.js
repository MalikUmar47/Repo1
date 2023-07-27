import React, { Component } from 'react';
import { StyleSheet,ScrollView,Dimensions, Image,SafeAreaView,BackHandler,TextInput,View,TouchableOpacity,Text,AsyncStorage} from 'react-native';
 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
import ImageLoad from 'react-native-image-placeholder';

// import Swiper from 'react-native-swiper';
import styles from './styles';
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';
 
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

import { Actions } from 'react-native-router-flux';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RBSheet from 'react-native-raw-bottom-sheet';
 

import Connection from "../connection" ;
 

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

class SocialScreen extends React.Component {



  constructor() {
    super();
 
    this.state = {
      data1:[],
      val:'All',
      text1:2,
      text2:1,
      text3:1,
      text4:1,
      text5:1,
      data12:[],
      check_screen:'',
      skalton:true
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
     
      // BackHandler.exitApp();
Actions.pop()
    
       return true;
  }






  componentDidMount = async () => {

    let user = await AsyncStorage.getItem('customer');

  let parsed = JSON.parse(user);
  let id = parsed[0].id;
 

  console.log("id000000000000000000000000000000000000000000000000000000000000000000 =>", id)
  this.setState({
      id: id,
  
    
      
  })
  this.All_salons()
 
}






Search=(value)=>{

this.setState({
  skalton:true
})
  let uploaddata = new FormData();
         
       console.log('llllllllllll',value)
 
       let name1 = value['name']
       console.log('name1name1name1name1', name1);
          uploaddata.append('name',name1);
          //uploaddata.append('fcm_token',this.state.token);

 
 let api = Connection+'rest_apis.php?action=search_saloon';
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
console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",response.response)

let record = response.response

if(record=='fail'){
  this.setState({
    data1:[],
    skalton:false
  })
} else {
  this.setState({
    data1:record,
    skalton:false
  })
}
// this.setState({
//  data1:record,
//  skalton:false

// })

// this.chech_category(this.state.val)
 
})
.catch((error) => {
  console.error(error);

});
   
  
}


 






All_salons=()=>{

  
 let api = Connection+'rest_apis.php?action=All_salons';
 console.log("pass => ", api)
 fetch(api, { 
         method: 'POST',
         headers: {
           "Content-Type": "multipart/form-data",
           "otherHeader": "foo",
         },
       
        //  body: uploaddata, 
     })
     .then((response) => response.json())
     .then((response) => {
       console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",response.response)

  let record = response.response
     

       this.setState({
        data1:record,
        skalton:false
     
      })
 
// this.chech_category(this.state.val)
        
     })
     .catch((error) => {
         console.error(error);
     
     });



  

}


 



createtable1 = () => {
 let table = []

let record1 = this.state.data1
let len = record1.length
 if (record1 != 'fail') {
     for (let i = 0; i < len; i++) {
     
      let profile1 = record1[i].profile
      let profile = Connection+'images/'+profile1 
     
       let salon_name = record1[i].name
       let salon_id = record1[i].id

       
       let address = record1[i].address
       let lat1 = record1[i].lat
       let lng1 = record1[i].lng
       let lat = parseFloat(lat1);
       let lng = parseFloat(lng1);
       let phone = record1[i].mobile_number
       let email = record1[i].email
       let description = record1[i].bio
       let avg_rating = record1[i].avg_rating
       console.log('kkkkkkkkkkk',avg_rating)
       let total_review = record1[i].total_review


      

       let images = record1[i].other_images
       let image=images.split(",")
       let image_1=image[0]
      //  let path_1 = Connection+'images/'+image_1 
console.log('kkkkkkkkkkkkkkkk',profile)

 
    
table.push(<View>
{
 <View>
  
      

  <TouchableOpacity activeOpacity={0.8} onPress={() =>  Actions.saloon_Detail({
      salon_id: salon_id ,
      salon_name:salon_name,
      images:images,
      address:address,
      phone:phone,
      profile:profile,
      
      description:description,
      total_review:total_review,
      avg_rating:avg_rating,
      email:email,
      lat:lat,
      lng:lng,
      image:image

      

      })} >
<View style={{width: wp('92%') ,height: 90,backgroundColor:'snow',marginLeft:12,borderRadius:8,marginTop:6,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
marginBottom:12
}}>
<View style={{flexDirection:'row'}}>
 

<ImageLoad
                      style={styles.logo2}
                      loadingStyle={{ size: 'large', color: 'blue' }}
                      source={{ uri: profile }}
                      borderRadius={10}
                      placeholderStyle={styles.staff}
                      placeholderSource={require('../assets/empty.png')}

                    /> 
 

<View style={{flexDirection:'column',marginTop:2,marginLeft:4}}>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>{salon_name}</Text>

{/* <Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>{address}</Text> */}
<Text style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>{ address.length > 30 ?   ((address.substring(0,30-3))+'...') :  address }</Text>

<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>{avg_rating}</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>({total_review} reviews)</Text>
</View>
</View>
</View>
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










changebtn1(value,value2)

{
 
  if(this.state[value]==2)
  {



    this.setState({
      text1:1,
      text2:1,
      text3:1,
      text4:1,
      text5:1,
   
      offense:''
    }) 
  }
  else{
    this.setState({
      text1:1,
      text2:1,
      text3:1,
      text4:1,
      text5:1,
      [value]:2,
      offense:value2
    })
    
  }
  // this.chech_category(value2);
}








  render() {
  
    return (


<ScrollView>

        <View style={styles.container}>

        <View style={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#ee2b7a' }}>
                <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon

              name="arrowleft"
              type="AntDesign"
              style={{ color: "white", fontSize: 25 }}
            />
          </TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '700' }}>{this.props.category} Saloons</Text>
                    <Text>       </Text>
                </View>


 

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 10,marginTop:20 }}>
                    <View>
                        <TextInput style={{ width: width / 1.24, color: 'black', borderWidth: 0.7, borderColor: 'gray', borderRadius: 5, height: 45, paddingLeft: 30 }} placeholder= "Search for" placeholderTextColor='gray' onChangeText={name => this.Search({ name })} />
                        <Icon name="search1" type="AntDesign" style={{ color: "gray", fontSize: 15, position: 'absolute', top: 12, left: 8 }} />
                    </View>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Map_Screen({all:true})} style={{ height: 45, width: 40, borderRadius: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 0.7, borderColor: 'gray' }}>
                        <Icon name="filter" type="MaterialCommunityIcons" style={{ color: "#2C5BA4", fontSize: 17 }} />
                    </TouchableOpacity>
                </View>
                {this.state.skalton == true ?


<SkeletonPlaceholder>
    <View
        style={{
            width: "90%",
            alignSelf: "center",
            height: 130,
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 30,
            backgroundColor: 'white'
        }}
    ></View>

    <View
        style={{
            width: "90%",
            alignSelf: "center",
            height: 130,
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 30,
            backgroundColor: "white",
        }}
    ></View>


    <View
        style={{
            width: "90%",
            alignSelf: "center",
            height: 130,
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 30,
            backgroundColor: "white",
        }}
    ></View>



    <View
        style={{
            width: "90%",
            alignSelf: "center",
            height: 130,
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 30,
            backgroundColor: "white",
        }}
    ></View>


    <View
        style={{
            width: "90%",
            alignSelf: "center",
            height: 130,
            borderRadius: 12,
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 30,
            backgroundColor: "white",
        }}
    ></View>

</SkeletonPlaceholder>
:
<View>

    {this.state.data1 == "" ?
        <View style={{ alignItems: 'center', justifyContent: 'center', height: height / 2 }}>
            <Text style={{}}>
            No Saloon found
            </Text>
        </View>
        :
        <View style={{ paddingBottom: 20 }}>
            {this.createtable1()}
        </View>
    }

</View>
}


    




          </View> 


		  
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
          height={800}
          

          openDuration={250}>
          <View
            style={{
              flex: 1,
              // backgroundColor:'lightgray'
            }}>
</View>

  </RBSheet> 
          </ScrollView> 
    );
  }
}





export default SocialScreen;
