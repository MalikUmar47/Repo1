import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Alert, Text,TouchableOpacity,Image,StatusBar,ScrollView,BackHandler,SafeAreaView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content,Icon, Footer, FooterTab, Badge, Right ,Picker, Left,Button} from 'native-base';
// import LoginScreen from './LoginScreen';
// import SignUpScreen from './SignUpScreen';
// import SocialScreen from './SocialScreen';
// import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import All from './All';

import Home from './Home';

import Chat from './Chat';

import profile from './profile';



// import Drawer from 'react-native-drawer'



import Patient_All_Appointment from './Patient_All_Appointment';




class HomeScreen extends React.Component {
  

  constructor(props) {
 
    super(props)
 
    this.state = {selectedbtn: "1",name:"",id:'',}
 
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
      // Actions.pop()
      BackHandler.exitApp();
      return true;
  }






  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    

    let AppComponent = null;
   
    // let AppComponent1 = Drawer_Screen;
   
    if (this.state.selectedbtn == "1") {
      AppComponent = Home
   } 

    if (this.state.selectedbtn == "2") {
       AppComponent = All
    } 
     if(this.state.selectedbtn == "3") {
       AppComponent = Patient_All_Appointment
    }
    if (this.state.selectedbtn == "4") {
        AppComponent = Chat
     } 
      if(this.state.selectedbtn == "5") {
        AppComponent = profile
     }
  
    return (
      <>
       {/* <Drawer
        ref={(ref) => this._drawer = ref}
        content={<AppComponent1 />}
        openDrawerOffset={120}
        tapToClose={true}
        > */}
      
      <View style={styles.container}>
      {/* <View style={{flexDirection:'row',width:'35%',alignSelf:'center',marginTop:35,position:'absolute',zIndex:1,backgroundColor:'red',marginBottom:50}}> */}
          {/* <TouchableOpacity onPress={()=>{this.openControlPanel()}} style={{borderRadius:5,position:'absolute',zIndex:1,marginLeft:9,marginTop:15}}>
              <Icon name="menu" type="Entypo"  style={{color:'black'}} />
          </TouchableOpacity> */}
       
      {/* </View>  */}
      {/* <Drawer
                            openDrawerOffset='0.3'
                            ref={(ref) => { this._drawer = ref; }}
                            content={<DrawerScreen navigator={this._navigator} />}
                            onClose={() => this.closeDrawer()}>  
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: '100%', alignSelf: 'center',backgroundColor:'#55b7c4',height:50 }}>
                                       
                                       <Icon type="Entypo" name="menu" style={styles.icon} onPress={() => this.openDrawer()} />
                                       <Text style={styles.name}>Rely Connects</Text>
                                      
                                      
                                   </View>    */}
                               
        <Content contentContainerStyle={{ flex: 1 }}>
        
        <AppComponent/> 
            </Content>
        <Footer>
          <FooterTab style={styles.footer}>
            <Button  vertical style={(this.state.selectedbtn== "1")?styles.btnactive:styles.btnsegment} onPress={() => this.setState({ selectedbtn: "1" })}>
            
              <Icon style={(this.state.selectedbtn== "1")?styles.activeicone:styles.inactiveicone} name="compass" type="Entypo"  />
             
            </Button>
            <Button vertical style={(this.state.selectedbtn== "2")?styles.btnactive:styles.btnsegment} onPress={() => this.setState({ selectedbtn: "2" })}>
              <Icon style={(this.state.selectedbtn== "2")?styles.activeicone:styles.inactiveicone} name="search" type="FontAwesome" />
             
            </Button>
             <Button  verticalstyle={(this.state.selectedbtn== "3")?styles.btnactive:styles.btnsegment} onPress={() => this.setState({ selectedbtn: "3" })}>
              
              <Icon style={(this.state.selectedbtn== "3")?styles.activeicone:styles.inactiveicone} name="calendar"  type="AntDesign"/>
              
            </Button>

            <Button  verticalstyle={(this.state.selectedbtn== "4")?styles.btnactive:styles.btnsegment} onPress={() => this.setState({ selectedbtn: "4" })}>
              
              <Icon style={(this.state.selectedbtn== "4")?styles.activeicone:styles.inactiveicone} name="chat"  type="Entypo"/>
              
            </Button>

            <Button  verticalstyle={(this.state.selectedbtn== "5")?styles.btnactive:styles.btnsegment} onPress={() => this.setState({ selectedbtn: "5" })}>
              
              <Icon style={(this.state.selectedbtn== "5")?styles.activeicone:styles.inactiveicone} name="user"  type="SimpleLineIcons"/>
              
            </Button>
            
          </FooterTab>
        </Footer>
          {/* </Drawer>   */}
   </View>
   {/* </Drawer> */}
   </>
            
    );
  }
}





const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
},

inactiveicone:{
  color:'gray',
  fontSize:25,
},
activeicone:{
  color:'#ee2b7a',
  fontSize:25,
},
footer:{
    backgroundColor:'white'
},
icon:{
    marginTop:5,
    marginLeft:10,fontSize:40,
    color:'white'
},
name:{
    alignSelf:'center',
    fontSize:28,
    fontWeight:'bold',
    marginLeft:50,
    color:'white'
}

});

export default HomeScreen;