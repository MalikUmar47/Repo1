import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,BackHandler,AsyncStorage,TextInput,View,TouchableOpacity,Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content,Icon, Footer, FooterTab, Badge, Right ,Picker, Left,Button} from 'native-base';
import Connection from "../connection" ;

import RBSheet from "react-native-raw-bottom-sheet";
import styles from './styles';
// import Svg, {
//       Circle,
//       Ellipse,
//       G,
//       TSpan,
//       TextPath,
//       Path,
//       Polygon,
//       Polyline,
//       Line,
//       Rect,
//       Use,
//       Symbol,
//       Defs,
//       LinearGradient,
//       RadialGradient,
//       Stop,
//       ClipPath,
//       Pattern,
//       Mask,
//     } from 'react-native-svg';

import Octicons from 'react-native-vector-icons/Octicons';
// import Swiper from 'react-native-swiper';
import ImagePlaceholder from 'react-native-img-placeholder';


import { Actions } from 'react-native-router-flux';
// import icons from '../Constants/icons';

class Home extends React.Component {




      constructor() {
            super();
         
            this.state = {
              data1:[],
              val:'All',
        
               data12:[]
            }
             }
        
        
        
        
        //   componentDidMount = async () => {
        
        //     let user = await AsyncStorage.getItem('customer');
        
        //   let parsed = JSON.parse(user);
        //   let id = parsed[0].id;
        //   let salon_id = parsed[0].salon_id;
        //   let name = parsed[0].name;

        
        //   console.log("id000000000000000000000000000000000000000000000000000000000000000000 =>", id)
        //   this.setState({
        //       id: id,
        //       salon_id:salon_id,
        //       name:name
              
        //   })
        //   this.All_salons()
         
        // }
        
        






 
     
     
     
           
  render() {
  
    return (

      <ScrollView>
      <View style={styles.container}>




  <View style={styles.containerStyle} >
        
      <View style={styles.sliderContainerStyle} >
      <View style={{backgroundColor:'rgba(27,163,218, .4)',flex:1}}>
      </View>
           <Image source={require('../assets/blakish.png')}    
style={styles.Salon2}
resizeMode="cover"
/>


    </View>
    </View>


    {/* <ImageBackground source={require('../assets/s1.jpg')} style={{width:'100%',height:'50%'}} >
      <View style={{backgroundColor:'rgba(27,163,218, .4)',width:'100%',height:'50%'}}>
            </View>
    </ImageBackground> */}



<Text  style={{fontSize:18,fontWeight:'bold',color:'white',marginTop:74,position:'absolute',marginLeft:30}}>Find your require services</Text>
<Text  style={{fontSize:26,fontWeight:'bold',color:'white',marginTop:44,position:'absolute',marginLeft:30}}>Hi, {this.state.name}</Text>


    <View style={styles.inputContainer1}>
          
      <View style={styles.iconStyle}>
      <MaterialIcons name="search" size={30} color="#275983" />
      </View>
        <TextInput
        placeholder="Search fashion best services"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={email => this.setState({email})}
        autoCompleteType="email"
        />
       </View>












       <View style={{flexDirection:'row',alignItems:'center'}}>

       <Text  style={{fontSize:22,fontWeight:'bold',color:'black',marginVertical:22,marginLeft:8}}>Salon Categories</Text>
       </View>








       <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >

<View style={{flexDirection:'row',alignItems:'center',marginBottom:12,paddingRight:14}}>
<TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.All({category:'HairSalon',check_screen:'back'})} >
<View style={{width:150,height:120,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/gray.jpg')}
style={styles.Salon1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',alignSelf:'center',marginTop:8}}>Hair Cut</Text>

</View>
</TouchableOpacity>



<TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.All({category:'HairSalon',check_screen:'back'})} >
<View style={{width:150,height:120,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/blakish.png')}
style={styles.Salon1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',alignSelf:'center',marginTop:8}}>Beared/Shave</Text>

</View>
</TouchableOpacity>




<TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.All({category:'NailSalon',check_screen:'back'})} >
<View style={{width:150,height:120,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/istockphoto-1098349892-612x612.jpg')}
style={styles.Salon1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',alignSelf:'center',marginTop:8}}>Beauty</Text>

</View>
</TouchableOpacity>



<TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.All({category:'Barber',check_screen:'back'})} >
<View style={{width:150,height:120,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/istockphoto-1029003012-170667a.jpg')}
style={styles.Salon1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',alignSelf:'center',marginTop:8}}>Other</Text>

</View>
</TouchableOpacity>





















</View>



</ScrollView>















{/* <Text  style={{fontSize:22,fontWeight:'bold',color:'black',marginTop:22,marginLeft:8}}>Most Viewed</Text> */}





       <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >

       <View style={{flexDirection:'row',alignItems:'center',marginBottom:12,paddingRight:14}}>
{/* {this.createtable2()} */}
    





</View>



</ScrollView>

{/* <View style={{justifyContent:'center',alignItems:'center',marginTop:12}}>

<Image source={require('../assets/hom6.jpg')}
      style={styles.textage}
      />
</View> */}

<View style={{flexDirection:'row',alignItems:'center'}}>

<Text  style={{fontSize:22,fontWeight:'bold',color:'black',marginTop:22,marginLeft:8}}>Top Rated</Text>
</View>





<ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >

<View style={{flexDirection:'row',alignItems:'center',marginBottom:12,paddingRight:14}}>
<TouchableOpacity activeOpacity={0.8} onPress={() =>  Actions.saloon_Detail()}  >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/z3.jpg')}
style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>D-Cut</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Near Jassar Bi Pass</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>3.8</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(17 reviews)</Text>
</View>
</View>
</TouchableOpacity>



<TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.saloon_Detail()}     >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/a12.jpg')}
style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Turkish Hair Saloon</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Chan Peer Road, Narowal </Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.2</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(10 reviews)</Text>
</View>
</View>
</TouchableOpacity>



<TouchableOpacity activeOpacity={0.8}  onPress={() =>  Actions.saloon_Detail()}   >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/istockphoto-639607852-170667a.jpg')}
style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Malik Hair Saloon</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}> Circular Road Narowal</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.0</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(57 reviews)</Text>
</View>
</View>
</TouchableOpacity>



<TouchableOpacity activeOpacity={0.8}   >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
width: 0,
height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
}}>
<Image source={require('../assets/istockphoto-1029003012-170667a.jpg')}
style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Garm Hamam</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Near Royal College, Narowal</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.5</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(7 reviews)</Text>
</View>
</View>
</TouchableOpacity>














</View>



</ScrollView>









     </View>
   
     </ScrollView>
    
    );
  }
}







export default Home;
