import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,Button ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';


import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Connection from "../connection" ;
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import icons from '../Constants/icons';
import { Actions } from 'react-native-router-flux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ImagePlaceholder from 'react-native-img-placeholder';



export default class add_staff extends Component {









  constructor() {
    super();
 
    this.state = {
      data1:[],
   check:false
    
    }
  }




  Display_staff=()=>{

  
    
    let uploaddata = new FormData();         
        
    uploaddata.append('salon_id',this.state.salon_id);
    console.log("idpppppppppppppppppppppppppppppppppppppppppppp =>", this.state.salon_id)

 

    let api = Connection+'salon_App.php?action=Display_staff';
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
          console.log("response111111111111111111111111111111111111",response.response)

         let record = response.response
         
         this.setState({
          data1:record,
        
          


         })

           
        })
        .catch((error) => {
            console.error(error);
        
        });


  

    
  
  }
 



  componentDidMount = async () => {

     let user = await AsyncStorage.getItem('customer');

   let parsed = JSON.parse(user);
   let salon_id = parsed[0].salon_id;
    this.setState({
    salon_id: salon_id,
       
   })
   this.Display_staff()
}









createtable2 = () => {
  let table = []

let record1 = this.state.data1
 let len = record1.length
  if (record1 != 'fail') {
      for (let i = 0; i < len; i++) {
      

      
        let name = record1[i].name
        let profile_1 = record1[i].profile
        let profile = Connection+'salon_App/'+profile_1

  
     
table.push(<View>
{
  <View>
   
      

   <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:15,marginTop:20}}> 
        {/* <Image source={require('../assets/s12.jpg')}
          style={styles.staff}/> */}
                <ImagePlaceholder
   style={styles.staff}
    loadingStyle={{ size: 'large', color: 'blue' }}
    source={{ uri:profile}}
    placeholderStyle={styles.staff}
    borderRadius={100}
/>
              <Text style={{marginTop: 5, fontSize: 16}}>{name}</Text>
              </View>






     
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









    render() {
        return (
            <ScrollView>
               
               <View style={{height:80,backgroundColor:'#ee2b7a',width:"100%"}}>
<View style={{flexDirection:'row',marginVertical:22,justifyContent: 'space-between',alignItems:'center', paddingHorizontal: 20}}>
<Ionicons name="chevron-back" size={30} color='white' style={{marginHorizontal:-4}} />
<Text  style={{fontSize:22,color:'white', width:'60%'}}>My Staff</Text>
       {/* <AntDesign name="sharealt" size={26} color="white" />
       <AntDesign name="hearto" size={26} color="white" /> */}
     </View>



     </View>

     <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10, marginTop: 30, marginBottom: 10    }}> OUR STAFF</Text>


        {/* <View style={{flexDirection:'row',flexWrap:'wrap',alignSelf:'center'}}> 

        <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:15,marginTop:20}}> 
        <Image source={require('../assets/s12.jpg')}
          style={styles.staff}/>
              <Text style={{marginTop: 5, fontSize: 16}}>Thomas</Text>
              </View>


              <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:10,marginTop:20}}> 
        <Image source={require('../assets/s12.jpg')}
          style={styles.staff}/>
              <Text style={{marginTop: 5, fontSize: 16}}>Thomas</Text>
              </View>


              <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:10,marginTop:20}}> 
        <Image source={require('../assets/s12.jpg')}
          style={styles.staff}/>
              <Text style={{marginTop: 5, fontSize: 16}}>Thomas</Text>
              </View>


              <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:10,marginTop:20}}> 
        <Image source={require('../assets/s12.jpg')}
          style={styles.staff}/>
              <Text style={{marginTop: 5, fontSize: 16}}>Thomas</Text>
              </View>


              <TouchableOpacity onPress={() =>  Actions.add_new_staff()} >
              <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:10,marginTop:20}}> 
              <View style={{width:90,height:90,borderRadius:50,backgroundColor:'#F2F2F2',borderWidth:1,borderColor:'lightgray',justifyContent:'center',alignItems:'center'}}>
<MaterialCommunityIcons name="plus" size={30} color="gray" />
</View>
              <Text style={{marginTop: 5, fontSize: 16}}>Add New</Text>
              </View>
              </TouchableOpacity>

     

         

              



        </View> */}



 

{/* <View style={{flexDirection:'row',flexWrap:'wrap',alignSelf:'center'}}>  */}
{/* {this.createtable2()} */}

<TouchableOpacity  >


<View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10}}>

               {/* <ImagePlaceholder
style={styles.logo1}
 loadingStyle={{ size: 'large', color: 'blue' }}
 source={{ uri:profile}}
 placeholderStyle={styles.logo1}
 borderRadius={100}
/> */}

<Image source={require('../assets/s12.jpg')}
      style={styles.logo1}/>
<View style={{flexDirection:'column',marginLeft:8, width: '70%'}}>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',}}>Hamza</Text>
<Text  style={{fontSize:14,color:'gray',}}>Pro Barber </Text>

</View>
<View style={{flexDirection:'row',alignItems:'center',}}>
 {/* <Text style={{fontSize: 18, marginRight: 5}}>4.7</Text>

<Ionicons name="star" size={20} color='#ee2b7a' /> */}
<AntDesign name="right" size={22} color="black" style={{marginLeft: 10}}/>


</View>

  </View>
  <View
       style={{
         width: '90%',
         height: 1,
         backgroundColor: 'gray',
         marginTop: 10,
         alignSelf: 'center'
       }}></View>


     </TouchableOpacity>




       <TouchableOpacity   >


<View style={{flexDirection:'row',alignItems:'center',justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 10}}>

               {/* <ImagePlaceholder
style={styles.logo1}
 loadingStyle={{ size: 'large', color: 'blue' }}
 source={{ uri:profile}}
 placeholderStyle={styles.logo1}
 borderRadius={100}
/> */}

<Image source={require('../assets/s12.jpg')}
      style={styles.logo1}/>
<View style={{flexDirection:'column',marginLeft:8, width: '70%'}}>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',}}>Hamza</Text>
<Text  style={{fontSize:14,color:'gray',}}>Pro Barber </Text>

</View>
<View style={{flexDirection:'row',alignItems:'center',}}>
 {/* <Text style={{fontSize: 18, marginRight: 5}}>4.7</Text>

<Ionicons name="star" size={20} color='#ee2b7a' /> */}
<AntDesign name="right" size={22} color="black" style={{marginLeft: 10}}/>


</View>

  </View>
  <View
       style={{
         width: '90%',
         height: 1,
         backgroundColor: 'gray',
         marginTop: 10,
         alignSelf: 'center'
       }}></View>


     </TouchableOpacity>  
{/* 
<TouchableOpacity onPress={() =>  Actions.add_new_staff()} >
              <View style={{flexDirection:'column',alignItems:'center',paddingHorizontal:10,marginTop:20}}> 
              <View style={{width:90,height:90,borderRadius:50,backgroundColor:'#F2F2F2',borderWidth:1,borderColor:'lightgray',justifyContent:'center',alignItems:'center'}}>
<MaterialCommunityIcons name="plus" size={30} color="gray" />
</View>
              <Text style={{marginTop: 5, fontSize: 16}}>Add New</Text>
              </View>
              </TouchableOpacity> */}

{/* </View> */}

 
 

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
    staff: {
      width: 90,
      height: 90,
      borderRadius: 54,
    
     
    },
    logo1:{
      width:50,
      height:50,
      borderRadius:50
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
  });
  
