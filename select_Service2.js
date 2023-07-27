import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,Button ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';

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
import {connect} from 'react-redux';

import moment from "moment";

  class select_Service2 extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          check: false,
          text1:2,
          text2:1,
          text3:1,
          text4:1,
          text5:1,
          text6:1,
          text7:1,
          offense:'',
          offense1:'',
          time1:false,
          time2:false,
          time3:false,
          time4:false,
          time5:false,
          time6:false,
          data1:[],
         time_arr: ["01:00 pm", "02:00 pm", "03:00 pm", "04:00 pm", "05:00 pm", "06:00 pm"],
         all_times:[]
        };
      }






      Display_appointment=(val)=>{

  
    
        let uploaddata = new FormData();         
            
        uploaddata.append('salon_id',this.props.salon_id);
        uploaddata.append('date', val);
        console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd", val)

        console.log("idpppppppppppppppppppppppppppppppppppppppppppp =>", this.props.salon_id)
    
     
    
        let api = Connection+'salon_App.php?action=Display_appointment_1';
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
              console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;",response.response)
    
             let record = response.response
            //  let time =record[0].date
            //  console.log(";;;;;;;;;;;;;;;;;;;;;;;;;;",time)

//  let len = record.length
// let arr=[]
//       for (let i = 0; i < len; i++) {

// // let time =record[i].time
// let product={
//   time: record[i].time

 

// }
// arr.push(product)

//       }
     


// this.setState({
//   arr:arr,

  


//  })
       
//  console.log(";;;;;;;;;;;;;;;;;kkkkkkkkkkkkkkk;;;;;;;;;",arr)

if(record!='fail'){
  this.setState({
    data1:record,
  
    


   })
}
             
           
    
               
            })
            .catch((error) => {
                console.error(error);
            
            });
    
    
      
    
        
      
      }
     








      Update_Data=()=>{
         
      
        AsyncStorage.getItem( "appointment" )
        .then( data => {
          data = JSON.parse( data );
          console.log("pppppppppppppppp", data );

        let salon_id=data[0].salon_id
        let service_id=data[0].service_id
        let staff_id=data[0].staff_id
        let salon_name=data[0].salon_name
              let address=data[0].address
              let path_1=data[0].path_1


          console.log("pppppppppppppppp", salon_id );


          this.props.addproduct(arr1)
          
          
          let arr1 = [] 
          let product={
            salon_id:salon_id,
            service_id:service_id,
            staff_id:staff_id,
            date:this.state.offense,
            time:this.state.offense1,
            salon_name: salon_name,
            address: address,
            path_1: path_1
           
          
          }
          
          arr1.push(product)
          console.log("222222222222222222222222222222222222",arr1)
   
          

          AsyncStorage.setItem("appointment", JSON.stringify(arr1));
          

        
    
          // AsyncStorage.setItem( shop1, JSON.stringify( data ) );
        }).done();
Actions.select_Service3({ salon_id: this.state.salon_id});

   
        // this.geted();
    
} 


// changebtn=(val,val1)=>{
//   console.log("222222222222222222222222222222222222",val1)


// }


changebtn(value,value2,val)
{
  console.log("222222222222222222222222222222222222",value2)
  console.log("222222222222222222222222222222222222",value)
  console.log("222222222222222222222222222222222222",val)

  if(this.state[val]==false)
  {



    this.setState({
      time1:false,
      time2:false,
      time3:false,
      time4:false,
      time5:false,
      time6:false,
      
   
      offense1:''
    })
  }
  else{
    this.setState({
      time1:false,
      time2:false,
      time3:false,
      time4:false,
      time5:false,
      time6:false,


      [value]:val,
      offense1:value2
    })
    
  }
  
}






changebtn1(value,value2)

{
  console.log("222222222222222222222222222222222222",value2)
  console.log("222222222222222222222222222222222222",value)
  if(this.state[value]==2)
  {



    this.setState({
      text1:1,
      text2:1,
      text3:1,
      text4:1,
      text5:1,
      text6:1,
      text7:1,
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
      text6:1,
      text7:1,
      [value]:2,
      offense:value2
    })
    
  }
  this.Display_appointment(value2);
}


componentDidMount = async () => {

  console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", this.state.time_arr[1] );    
 

  var Intime = moment("00:05:00", "HH:mm:ss");
  var Outtime = moment("00:9:00", "HH:mm:ss");

  console.log("AAAAAAAAAAAAAAAAAA", Outtime.diff( Intime, "minutes") );    
  

let currentDate = new Date();
let currentDate1 = new Date();
let currentDate2 = new Date();
let currentDate3 = new Date();
let currentDate4 = new Date();

currentDate1.setDate(currentDate1.getDate() + 1);
currentDate2.setDate(currentDate2.getDate() + 2);
currentDate3.setDate(currentDate3.getDate() + 3);
currentDate4.setDate(currentDate4.getDate() + 4);

var date_1 = String(currentDate.getDate()).padStart(2, '0');
var date_2 = String(currentDate1.getDate()).padStart(2, '0');
var date_3 = String(currentDate2.getDate()).padStart(2, '0');
var date_4 = String(currentDate3.getDate()).padStart(2, '0');
var date_5 = String(currentDate4.getDate()).padStart(2, '0');


var yyyy_1 = currentDate.getFullYear();
var yyyy_2 = currentDate1.getFullYear();
var yyyy_3 = currentDate2.getFullYear();
var yyyy_4 = currentDate3.getFullYear();
var yyyy_5 = currentDate4.getFullYear();





var dayName_1 = currentDate.toString().split(' ')[0];
var dayName_2 = currentDate1.toString().split(' ')[0];
var dayName_3 = currentDate2.toString().split(' ')[0];
var dayName_4 = currentDate3.toString().split(' ')[0];
var dayName_5 = currentDate4.toString().split(' ')[0];

var month_Name_1 = currentDate.toString().split(' ')[1];
var month_Name_2 = currentDate1.toString().split(' ')[1];
var month_Name_3 = currentDate2.toString().split(' ')[1];
var month_Name_4 = currentDate3.toString().split(' ')[1];
var month_Name_5 = currentDate4.toString().split(' ')[1];

console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",dayName_1)

var time_1 = dayName_1 + ',' + month_Name_1 + ',' + date_1 + ',' + yyyy_1;
var time_2 = dayName_2 + ',' + month_Name_2 + ',' + date_2 + ',' + yyyy_2;
var time_3 = dayName_3 + ',' + month_Name_3 + ',' + date_3 + ',' + yyyy_3;
var time_4 = dayName_4 + ',' + month_Name_4 + ',' + date_4 + ',' + yyyy_4;
var time_5 = dayName_5 + ',' + month_Name_5 + ',' + date_5 + ',' + yyyy_5;

//  console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",today)

this.setState({
  offense:time_1
})

this.setState({
  dayName_1:dayName_1,
  dayName_2:dayName_2,
  dayName_3:dayName_3,
  dayName_4:dayName_4,
  dayName_5:dayName_5,

  month_Name_1:month_Name_1,
  month_Name_2:month_Name_2,
  month_Name_3:month_Name_3,
  month_Name_4:month_Name_4,
  month_Name_5:month_Name_5,

date_1:date_1,
date_2:date_2,
date_3:date_3,
date_4:date_4,
date_5:date_5,


time_1:time_1,
time_2:time_2,
time_3:time_3,
time_4:time_4,
time_5:time_5,






})

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');

today =  dd ;
// today = mm + '/' + dd + '/' + yyyy;
console.log("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",today)

// let user = await AsyncStorage.getItem('customer');

// let parsed = JSON.parse(user);
// let salon_id = parsed[0].salon_id;
let salon_id=this.props.salon_id
this.setState({
 salon_id: salon_id,
    
})
this.Display_appointment(time_1)
this.fun();


 

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
    



<Text  style={{fontSize:14,color:'lightgray',}}>Step 3 of 4</Text>

<Text  style={{fontSize:22,color:'white',}}>Appointment</Text>




      
     </View>

     </View>


     <Text
          style={{
            fontSize: 20,
      
            fontWeight: 'bold',
            marginHorizontal: 30,
            marginTop: 20,
            marginBottom: 10
            
          }}>
          DATE
        </Text>


<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>


<TouchableOpacity    onPress={() => this.changebtn1("text1",this.state.time_1)}  >
<View  style={(this.state.text1==1?styles.textinput1:styles.textinput01)}>
<Text  style={(this.state.text1==1?styles.text1:styles.text01)}>{this.state.dayName_1}</Text>
<Text style={(this.state.text1==1?styles.text1:styles.text01)}>{this.state.date_1}</Text>
<Text style={(this.state.text1==1?styles.text1:styles.text01)}>{this.state.month_Name_1}</Text>
</View>
</TouchableOpacity>


<TouchableOpacity    onPress={() => this.changebtn1("text2",this.state.time_2)}  >
<View  style={(this.state.text2==1?styles.textinput1:styles.textinput01)}>
<Text  style={(this.state.text2==1?styles.text1:styles.text01)}>{this.state.dayName_2}</Text>
<Text style={(this.state.text2==1?styles.text1:styles.text01)}>{this.state.date_2}</Text>
<Text style={(this.state.text2==1?styles.text1:styles.text01)}>{this.state.month_Name_2}</Text>
</View>
</TouchableOpacity>

  
  
<TouchableOpacity    onPress={() => this.changebtn1("text3",this.state.time_3)}  >
<View  style={(this.state.text3==1?styles.textinput1:styles.textinput01)}>
<Text  style={(this.state.text3==1?styles.text1:styles.text01)}>{this.state.dayName_3}</Text>
<Text style={(this.state.text3==1?styles.text1:styles.text01)}>{this.state.date_3}</Text>
<Text style={(this.state.text3==1?styles.text1:styles.text01)}>{this.state.month_Name_3}</Text>
</View>
</TouchableOpacity>




<TouchableOpacity    onPress={() => this.changebtn1("text4",this.state.time_4)}  >
<View  style={(this.state.text4==1?styles.textinput1:styles.textinput01)}>
<Text  style={(this.state.text4==1?styles.text1:styles.text01)}>{this.state.dayName_4}</Text>
<Text style={(this.state.text4==1?styles.text1:styles.text01)}>{this.state.date_4}</Text>
<Text style={(this.state.text4==1?styles.text1:styles.text01)}>{this.state.month_Name_4}</Text>
</View>
</TouchableOpacity>



<TouchableOpacity    onPress={() => this.changebtn1("text5",this.state.time_5)}  >
<View  style={(this.state.text5==1?styles.textinput1:styles.textinput01)}>
<Text  style={(this.state.text5==1?styles.text1:styles.text01)}>{this.state.dayName_5}</Text>
<Text style={(this.state.text5==1?styles.text1:styles.text01)}>{this.state.date_5}</Text>
<Text style={(this.state.text5==1?styles.text1:styles.text01)}>{this.state.month_Name_5}</Text>
</View>
</TouchableOpacity>



{/* <TouchableOpacity    onPress={() => this.changebtn1("text6",'Saturday')}  >
<View  style={(this.state.text6==1?styles.textinput1:styles.textinput01)}>
<Text  style={(this.state.text6==1?styles.text1:styles.text01)}>Saturday</Text>
<Text style={(this.state.text6==1?styles.text1:styles.text01)}>29</Text>
<Text style={(this.state.text6==1?styles.text1:styles.text01)}>Sep</Text>
</View>
</TouchableOpacity>


<TouchableOpacity    onPress={() => this.changebtn1("text7",'Sunday')}  >
<View  style={(this.state.text7==1?styles.textinput1:styles.textinput01)}>
<Text  style={(this.state.text7==1?styles.text1:styles.text01)}>Sunday</Text>
<Text style={(this.state.text7==1?styles.text1:styles.text01)}>30</Text>
<Text style={(this.state.text7==1?styles.text1:styles.text01)}>Sep</Text>
</View>
</TouchableOpacity> */}




</ScrollView>








<Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 10
          }}>
          TIME
        </Text>



     
     


        <View>
<View style={{ marginLeft: 30,flexDirection:"row",alignItems:'center',marginTop:20   }}>
        <CheckBox
        boxType={'circle'}
       
      
        // onValueChange={check => this. (time,check)}
      />
<Text style={{ marginLeft: 10, fontSize: 20,marginBottom:2,  }}>8:00am</Text>
</View>
  <View style={{ width: '90%', height: 1, backgroundColor: 'gray', marginTop: 20, alignSelf: 'center'}}></View>

  
  </View>




  <View>
<View style={{ marginLeft: 30,flexDirection:"row",alignItems:'center',marginTop:20   }}>
        <CheckBox
        boxType={'circle'}
       
      
        // onValueChange={check => this.changebtn3(time,check)}
      />
<Text style={{ marginLeft: 10, fontSize: 20,marginBottom:2,  }}>8:00am</Text>
</View>
  <View style={{ width: '90%', height: 1, backgroundColor: 'gray', marginTop: 20, alignSelf: 'center'}}></View>

  
  </View>

{/* <View style={{ marginTop:20, marginLeft: 30,  }}>
    <CircleCheckBox
checked={false}
onToggle={(checked) => console.log('My state is: ', checked)}
// labelPosition={LABEL_POSITION.RIGHT}
label="05:00 pm"
outerColor='#B1B1B1'
innerColor ='#ee2b7a'
styleLabel={{ fontSize: 18}}
/>
</View>
<View style={{ width: '90%', height: 1, backgroundColor: 'gray', marginTop: 20, alignSelf: 'center'}}></View>

 */}





















 

</ScrollView>

<View style={{position:'absolute',bottom:0,backgroundColor:'white',width:'100%',height:70,padding:10,flexDirection:'row'}}>
            <View style={{flexDirection:'column',width:120}}>
          <Text  style={{fontSize:14,color:'gray',marginLeft:6,}}>100.00 USD</Text>
          <Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>45 mint</Text>
          </View>
          
           <TouchableOpacity onPress={()=> Actions.select_Service3()}  
                 style={{width: '30%', height: 45,  borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center',marginLeft:100}}   >
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>NEXT</Text>
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
    textinput1: {
      backgroundColor: 'lightgray',  marginLeft: 10,  height: 100, width: 100, borderRadius: 8, alignItems: 'center', justifyContent: 'center'
    },
    textinput01: {
      backgroundColor: '#ee2b7a',  marginLeft: 10,  height: 100, width: 100, borderRadius: 8, alignItems: 'center', justifyContent: 'center'
    },
    text1:
    {
      color: 'black', fontSize: 18
    },
    text01:
    {
      color: 'white', fontSize: 18
    },
    logo1:{
        width:60,
        height:60,
        borderRadius:50
    }
  });
  
  const mapStateToProps =(state)=>{
    return{
      product: state.product,
      counter: state.counter,
      // counterNO: state.counterNO,
  
  
   
  
    
  
        
    }
  }
  const mapDispatchToProps = (dispatch)=>{
      return{
        addproduct:(product)=>{dispatch({type:"add_product",payload:product})},
        change_counter:(counter)=>{dispatch({type:"change_counter",payload:counter})},
        // change_counterNO:(counterNO)=>{dispatch({type:"change_counterNO",payload:counterNO})},
  
  
    
  
      
          
      }
  }
  
  
  export default  connect(mapStateToProps,mapDispatchToProps)(select_Service2);