import React, { Component } from 'react';
import { View, Text, ImageBackground,StyleSheet,Image, TextInput,Button ,TouchableOpacity,AsyncStorage,Picker, ScrollView,StatusBar} from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import Foundation from "react-native-vector-icons/Foundation";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Connection from "../connection" ;
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import icons from '../Constants/icons';
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';




// export default class select_Service extends Component {
  class select_Service extends React.Component {


  constructor() {
    super();
 
    this.state = {
      data1:[],
      checked:false,
      add_service_id:[],
      add_service_all:[],
 
      add_service:'',
      add_detail:'',
      add_price:'',
      add_time:'',
      time:0,
      price:0

    
    }
  }




  Display_services=()=>{

  
    
    let uploaddata = new FormData();         
        
    uploaddata.append('salon_id',this.state.salon_id);
    console.log("idpppppppppppppppppppppppppppppppppppppppppppp =>", this.state.salon_id)

 

    let api = Connection+'salon_App.php?action=Display_services';
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
      
 let len = record.length
  if (record != 'fail') {
      for (let i = 0; i < len; i++) {
        let id = record[i].id
  let box = "box"+id
  console.log("0000000000000000000000000000000000000000000 ",box)

        this.setState({
          [box]:false
        })
        console.log("111111111111111111111111111111111 ",this.state[box])


      }
    }
         
         this.setState({
          data1:record,
        
          


         })

           
        })
        .catch((error) => {
            console.error(error);
        
        });


  

    
  
  }
 



  componentDidMount = async () => {

  


   let salon_id=this.props.salon_id
   let salon_name=this.props.salon_name
   let address=this.props.address
   let path_1=this.props.path_1


  //  console.log("id000000000000000000000000000000000000000000000000000000000000000000 =>", id)
   this.setState({
    salon_id: salon_id,
    path_1:path_1,
    address:address,
    salon_name:salon_name
       
   })
   setTimeout(()=>{
    this.Display_services()
   },1000)
 
}









createtable2 = () => {
  let table = []

let record1 = this.state.data1
 let len = record1.length
  if (record1 != 'fail') {
      for (let i = 0; i < len; i++) {
      

      
        let service = record1[i].service
        let service_id = record1[i].id

        let detail = record1[i].detail
        let price = record1[i].price
        let time = record1[i].time

 
  let box = "box"+service_id
       

  
     
table.push(<View>
{
  <View>
   
      

   <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
   {/* <TouchableOpacity  onPress={()=> this.changebtn(service_id,service,detail,price,time)}> */}

        <CheckBox
        
          value={this.state[box]}
          onValueChange={checked => this.changebtn(service_id,service,detail,price,time,checked)}
        />
        {/* </TouchableOpacity> */}

          
            <View style={{width: '65%'}}>
            <Text style={{fontSize: 18,}}>{service}</Text>
            <Text style={{fontSize: 14, color: 'gray'}}>{detail}</Text>
            </View>
            <View>
            <Text style={{fontSize: 18,}}>{price} $</Text>
            <Text style={{fontSize: 14, color: 'gray', textAlign: 'center',}}>{time} mint</Text>
            </View>
            
        </View>
        
        <View style={{ width: '90%',height: 1,backgroundColor: 'gray',marginTop: 20,alignSelf: 'center'}}></View>





     
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







addproductneo=()=>{

    this.props.addproduct(arr1)

 
  let arr1 = [] 
  let product={
    salon_id:this.state.salon_id,
    service_id:this.state.add_service_id,
    salon_name:this.state.salon_name,
    address:this.state.address,
    path_1:this.state.path_1,

  }


  arr1.push(product)
  AsyncStorage.setItem("appointment", JSON.stringify(arr1));







  this.props.addservice(service)

    let service = this.state.add_service_all
   

  
   AsyncStorage.setItem("service", JSON.stringify(service));








  Actions.select_Service1({ salon_id: this.state.salon_id });
  
   console.log("////////////////////////////////",arr1)
   console.log("////////////////////////////////",service)


  };
  



  // increse=(val,v1,v2,v3,v4)=>{

  //   //  console.log('no111111111111111111',val);
  //   //  console.log('no111111111111111111',this.state.salon_id);


  //   this.setState({
    
  //     add_service_id:val,

  //     add_service:v1,
  //     add_detail:v2,
  //     add_price:v3,
  //     add_time:v4,

   
  //   })

     
  //       };




        
changebtn(val,v1,v2,v3,v4,checked){
  let box = "box"+val
  

 
   let service={
    service: v1,
    detail:v2,
    price:v3,
    time:v4,

   
   
  
  }


  if(this.state[box]==false)
  {
      this.state.add_service_id.push(val)
      this.state.add_service_all.push(service)



this.setState({
  [box]:checked,
})

  }
  else
  {
      let array = this.state.add_service_id; 
let index1 = array.indexOf(val);
array.splice(index1,1);

let array1 = this.state.add_service_all; 
let index2 = array1.indexOf(service);
array1.splice(index2,1);

this.setState({
  [box]:checked,
})

  }

}

    




    render() {
        return (
         
<View style={{flex:1}}>
<ScrollView>
               <View style={{height:150,backgroundColor:'#ee2b7a',width:"100%"}}>
<Ionicons onPress={()=>Actions.pop()} name="chevron-back" size={30} color='white' style={{marginTop:20,marginLeft:20}} />
 
<View style={{marginTop:40, paddingHorizontal: 20}}>
    

<Text  style={{fontSize:14,color:'lightgray',}}>Step 1 of 4</Text>

<Text  style={{fontSize:22,color:'white',}}>Select services</Text>




      
     </View>

     </View>

     <Text
          style={{
            fontSize: 20,
      
            fontWeight: 'bold',
            marginHorizontal: 30,
            marginTop: 30,
            marginBottom: 10
            
          }}>
          FEATURED
        </Text>


        


        

        {/* {this.createtable2()} */}

       
   <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
   {/* <TouchableOpacity  onPress={()=> this.changebtn(service_id,service,detail,price,time)}> */}
   <CheckBox
              disabled={false}
              value={this.state.checked}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
              tintColors={{ true: 'black', false: 'gray' }}
            />
        {/* </TouchableOpacity> */}

          
            <View style={{width: '65%'}}>
            <Text style={{fontSize: 18,}}>Hair Cut</Text>
            <Text style={{fontSize: 14, color: 'gray'}}>Smooth haorcut with extra jell product</Text>
            </View>
            <View>
            <Text style={{fontSize: 18,}}>75 $</Text>
            <Text style={{fontSize: 14, color: 'gray', textAlign: 'center',}}>30 mint</Text>
            </View>
            
        </View>
        
        <View style={{ width: '90%',height: 1,backgroundColor: 'gray',marginTop: 20,alignSelf: 'center'}}></View>




        <View style={{flexDirection: 'row', paddingHorizontal: 20, marginTop: 20, alignItems: 'center', justifyContent: 'space-between'}}>
   {/* <TouchableOpacity  onPress={()=> this.changebtn(service_id,service,detail,price,time)}> */}
   <CheckBox
              disabled={false}
              value={this.state.checked}
              onValueChange={() => this.setState({ checked: !this.state.checked })}
              tintColors={{ true: 'black', false: 'gray' }}
            />
        {/* </TouchableOpacity> */}

          
            <View style={{width: '65%'}}>
            <Text style={{fontSize: 18,}}>Hair Treatment</Text>
            <Text style={{fontSize: 14, color: 'gray'}}>Smooth haorcut with extra jell product</Text>
            </View>
            <View>
            <Text style={{fontSize: 18,}}>125 $</Text>
            <Text style={{fontSize: 14, color: 'gray', textAlign: 'center',}}>45 mint</Text>
            </View>
            
        </View>
        
        <View style={{ width: '90%',height: 1,backgroundColor: 'gray',marginTop: 20,alignSelf: 'center'}}></View>


       
     







</ScrollView>
 
<View style={{position:'absolute',bottom:0,backgroundColor:'white',width:'100%',height:70,padding:10,flexDirection:'row'}}>
  <View style={{flexDirection:'column',width:120}}>
<Text  style={{fontSize:14,color:'gray',marginLeft:6,}}>250.00 USD</Text>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>40 mint</Text>
</View>

 <TouchableOpacity onPress={()=>{this.addproductneo()}}  style={{width: '30%', height: 45,  borderRadius: 8, backgroundColor: '#ee2b7a', alignItems: 'center', justifyContent: 'center',marginLeft:100}}   >
  <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>NEXT</Text>
</TouchableOpacity>
</View>
</View>



// onPress={() =>  Actions.select_Service1({
//   salon_id: this.state.salon_id 
//   })
//   }


          
          

        
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
  });
  


  const mapStateToProps =(state)=>{
    return{
      product: state.product,
      counter: state.counter,

      service: state.service,

      // counterNO: state.counterNO,
  
  
   
  
    
  
        
    }
  }
  const mapDispatchToProps = (dispatch)=>{
      return{
        addproduct:(product)=>{dispatch({type:"add_product",payload:product})},
        change_counter:(counter)=>{dispatch({type:"change_counter",payload:counter})},
        // change_counterNO:(counterNO)=>{dispatch({type:"change_counterNO",payload:counterNO})},
        addservice:(service)=>{dispatch({type:"addservice",payload:service})},
  
  
    
  
      
          
      }
  }
  
  
  export default  connect(mapStateToProps,mapDispatchToProps)(select_Service);
  