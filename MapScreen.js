import React, { Component } from 'react';
import { StyleSheet,ScrollView,Image,SafeAreaView,ImageBackground,TextInput,View,TouchableOpacity,Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Content,Icon, Footer, FooterTab,Drawer, Badge, Right ,Picker, Left,Button,Body,Title,Segment} from 'native-base';

// import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import styles from './styles';


import { Actions } from 'react-native-router-flux';




class SocialScreen extends React.Component {

 


  render() {








  
    return (
      <ImageBackground source={require('../assets/map1.jpg')}
      // blurRadius={2}
      resizeMode="cover" 
     style={styles.image}
     > 


      <View style={styles.container}>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:6}}>


      <TouchableOpacity activeOpacity={0.8} onPress={() =>  Actions.pop()} >

<Ionicons name="arrow-back-circle" size={55} color='white' style={{marginLeft:2}}/>
</TouchableOpacity>




       </View>




       <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false} style={{flexDirection:'row',marginTop:340 }}>



<TouchableOpacity activeOpacity={0.8}  >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
marginBottom:10
}}>
<Image source={require('../assets/a1.jpg')}
      style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Hair Castle</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Fashion Salon Tariq Road, Gujrat</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.1</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(97 reviews)</Text>
</View>
</View>
</TouchableOpacity>


<TouchableOpacity activeOpacity={0.8}  >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
marginBottom:10

}}>
<Image source={require('../assets/s12.jpg')}
      style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Sin City Hair</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Fashion Salon Tariq Road, Gujrat</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.1</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(97 reviews)</Text>
</View>
</View>
</TouchableOpacity>




<TouchableOpacity activeOpacity={0.8}  >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
marginBottom:10

}}>
<Image source={require('../assets/s13.jpg')}
      style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Tipsy Turvy Nails</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Fashion Salon Tariq Road, Gujrat</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.1</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(97 reviews)</Text>
</View>
</View>
</TouchableOpacity>




<TouchableOpacity activeOpacity={0.8}  >
<View style={{width:260,height:220,backgroundColor:'white',marginLeft:8,borderRadius:8,marginTop:8,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation:5,
marginBottom:10

}}>
<Image source={require('../assets/s9.jpg')}
      style={styles.logo1}/>
<Text  style={{fontSize:16,fontWeight:'bold',color:'black',marginTop:4,marginLeft:8}}>Tres Beaux.</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:8,marginTop:2}}>Fashion Salon Tariq Road, Gujrat</Text>
<View style={{flexDirection:'row',alignItems:'center',marginLeft:6,marginTop:2}}>
<FontAwesome name="star" size={22} color='#ee2b7a' style={{}}/>
<Text  style={{fontSize:14,color:'black',marginLeft:6,fontWeight:'bold'}}>4.1</Text>
<Text  style={{fontSize:14,color:'gray',marginLeft:6}}>(97 reviews)</Text>
</View>
</View>
</TouchableOpacity>




</ScrollView>    










     </View>
     
 </ImageBackground>
            
    );
  }
}





const styles = StyleSheet.create({

    inputContainer: {
      
        width: 290,
        height: 55,
        borderColor: '#154987',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white',
        
        borderRadius:53,
        marginLeft:3,
        // marginTop:12
      },
      button:{
        width:'98%',
        height:50,
        backgroundColor:'#154987',
      borderRadius:62,
      justifyContent:'center',alignItems:'center',
      marginTop:24,
  
      marginLeft:4
       
      },
      iconStyle: {
  
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      
        width: 50,
      },
      input: {
      
        flex: 1,
        fontSize: 15,
      
        color: '#333',
   
      },
      textinput01:{
        backgroundColor:'#154987',width:100,height:40,borderRadius:20,marginTop:13,justifyContent:'center',alignItems:'center' 
      },
      textinput1:{
        width:100,height:40,borderRadius:20,marginTop:13,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'lightgray' 

      },
      logo2:{
  
        width:106,
        height:106,
       borderRadius:12,
 
         },

      textcolor01:{
        fontSize:14,fontWeight:'bold',color:'white'
      },
      textcolor1:{
        fontSize:14,fontWeight:'bold',color:'black'
      } , image:{
    
    
        width: '100%',
        height: '100%',
      
      },

      logo1:{
      
        width:260,
        height:140,
       borderTopRightRadius:8,
       borderTopLeftRadius:8
       
         },
});

export default SocialScreen;
