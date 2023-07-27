import React, { Component } from 'react';
import { StyleSheet, ScrollView, Image, SafeAreaView, ImageBackground, TextInput, BackHandler, View, TouchableOpacity, Text } from 'react-native';
 
import { Container, Header, Content, Icon, Footer, FooterTab, Drawer, Badge, Right, Picker, Left, Button, Body, Title, Segment } from 'native-base';
 
import Connection from '../connection'
// import ImageLoad from 'react-native-image-placeholder';



import { Actions } from 'react-native-router-flux';



class chat_Beauty extends React.Component {


  constructor(props) {

    super(props)

    this.state = {

      text1: 2,
      text2: 1,
      text3: 1,
      //   text4:1,
      check_design: 'panding',
      visible: false,
      data1: [],
      skalton: true,
      profile1: null

    }
  

}

   
backAction = () => {
  BackHandler.exitApp()
    return true;
  };
 

  componentWillUnmount() {
    this.backHandler.remove();
  }

  
componentDidMount = async () => {

this.backHandler = BackHandler.addEventListener(
"hardwareBackPress",
this.backAction
);
}



  CloseDrawer = (value) => {

    let ScreenName = value

    if (ScreenName == 'Home') {
      this.RBSheet.close()
      Actions.HomeScreen()
    }
    else if (ScreenName == 'AddProperty') {
      this.RBSheet.close()
      Actions.AddProperty()
    }
    else if (ScreenName == 'SearchProperty') {
      this.RBSheet.close()
      Actions.SearchProperty()
    }
    else if (ScreenName == 'PropertyScreen') {
      this.RBSheet.close()
      Actions.PropertyScreen()
    }
    else if (ScreenName == 'SavedSearch') {
      this.RBSheet.close()
      Actions.SavedSearch()
    }
    else if (ScreenName == 'Agents') {
      this.RBSheet.close()
      Actions.Agents()
    }
    else if (ScreenName == 'Blog') {
      this.RBSheet.close()
      Actions.Blog()
    }
    else if (ScreenName == 'About') {
      this.RBSheet.close()
      Actions.About()
    }
    else if (ScreenName == 'Contact') {
      this.RBSheet.close()
      Actions.Contact()
    }
    else if (ScreenName == 'Terms') {
      this.RBSheet.close()
      Actions.Terms()
    }
    else if (ScreenName == 'Setting') {
      this.RBSheet.close()
      Actions.Setting()
    }
    else if (ScreenName == 'Logout') {
      this.RBSheet.close()
      Actions.LoginScreen()
    }

  }




  createtable1 = () => {
    let table = []




    let record1 = this.state.data
    // console.log(';;;;;;;;;;;;;;;;;;;;',record1)

    let len = record1.length
    console.log(';;;;;;;;;;;;;;;;;;;;', len)
    if (record1 != 'fail') {
      for (let i = 0; i < len; i++) {



        let name = record1[i].name
        let zipcode = record1[i].zipcode




        // let clinic_images =Connection+'images/'+c_images


        // console.log('AAAAAAAAAAAAAAAAAAAAAAA',clinic_images)
        // console.log('AAAAAAAAAAAAAAAAAAAAAAA',c_name)




        let profile = record1[i].profile

        let gallrey_di_image = Connection + 'uploads/' + profile

        //       let profile1 = record1[i].user_profile

        //       let profile =Connection+'CarFinder/'+profile1
        //   console.log("aaaaaaaaaaaaa",profile);

        //       let comment = record1[i].comment
        //       let rating = record1[i].rating







        table.push(<View>
          {
            <TouchableOpacity onPress={() => Actions.Chatroom()} >
              <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, marginTop: 10 }}>


                <ImageLoad
                  style={{ width: 60, height: 60, alignSelf: 'center' }}
                  loadingStyle={{ size: 'large', color: 'blue' }}
                  source={{ uri: gallrey_di_image }}
                  borderRadius={50}
                  placeholderStyle={{ width: 60, height: 60, borderRadius: 50 }}
                />


              
                {/* <Octicons name="primitive-dot" size={20} color='lightgreen' style={{ marginLeft: -8, marginTop: 30 }} /> */}
                <Icon name="primitive-dot" type="Octicons" style={{  marginLeft: -8, marginTop: 30,color:'lightgreen', fontSize:20  }} />
            
                <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', }}>{name}</Text>
                  <Text style={{ fontSize: 12, color: 'gray', marginTop: 2 }}>{zipcode}</Text>
                  <View style={{ flexDirection: 'row', marginTop: 2 }}>
                    <Text style={{ fontSize: 12, color: 'gray', }}>1h ego</Text>
                  </View>
                </View>
              </View>

              <View style={{ borderBottomWidth: 0.5, borderColor: 'lightgray', marginTop: 10 }}></View>
            </TouchableOpacity>

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







  login = () => {

    // let uploaddata = new FormData();
    // let email = this.state.email;
    // let password = this.state.password;

    // this.setState({ spinner: true });



    //uploaddata.append('fcm_token',this.state.token);



    let api = Connection + 'rest_apis.php?action=all_patient';




    console.log("pass => ", api);
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        otherHeader: "foo",
      },
      // body: uploaddata,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response", response);

        let record = response.response;

        if (record == "fail") {



          alert("Email or password is incorrect.");

        } else {
          // AsyncStorage.setItem("customer", JSON.stringify(response.response));
          // Actions.Home()


          // Actions.HomeSreen();

          this.setState({ data: record })
        }
      })
      .catch((error) => {
        console.error(error);
      });

  };



  //   componentDidMount = async () => {
  //     this.login()
  //  let a =98;


  //  if(a==2) {
  //    console.log('11111111111')
  //  } else if(a==3) {
  //   console.log('22222')

  //  }else {
  //   console.log('333333')

  //  }

  //     }


  render() {




    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>



        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 20,backgroundColor:'#ee2b7a' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Message</Text>
          <Icon name="search" type="MaterialIcons" style={{ color: 'white', fontSize: 20 }} />
        </View>


        {/* {this.createtable1()} */}


        <View style={{backgroundColor:'#f5f5f5',borderTopRightRadius:30,borderTopLeftRadius:30,flex:1,paddingVertical:25}}>
        
        <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Chatroom()} 
            style={{ flexDirection: 'row', alignItems: 'center',paddingHorizontal:15, marginTop: 10 ,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
               <Image source={require('../assets/umar.jpg')} style={{ width: 60,height: 60,borderRadius: 50}} />
               <Icon name="primitive-dot" type="Octicons" style={{  marginLeft: -8, marginTop: 30,color:'lightgreen', fontSize:20  }} />
              
               {/* <Octicons name="primitive-dot" size={20} color='lightgreen' style={{ marginLeft: -8, marginTop: 30 }} /> */}
               <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', }}>umar malik</Text>
                  <Text style={{ fontSize: 12, color: 'gray', marginTop: 2 }}>can i visit your propert</Text>
               </View>
            </View>

             <View>
             <Icon name="chat" type="Entypo" style={{ color: '#ee2b7a', fontSize: 28 }} />
              
             </View>
        </TouchableOpacity>

        <TouchableOpacity  activeOpacity={0.8} onPress={() => Actions.Chatroom()} 
            style={{ flexDirection: 'row', alignItems: 'center',paddingHorizontal:15, marginTop: 30 ,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
               <Image source={require('../assets/tomi.jpg')} style={{ width: 60,height: 60,borderRadius: 60}} />
               <Icon name="primitive-dot" type="Octicons" style={{  marginLeft: -8, marginTop: 30,color:'lightgreen', fontSize:20  }} />
              
               {/* <Octicons name="primitive-dot" size={20} color='lightgreen' style={{ marginLeft: -8, marginTop: 30 }} /> */}
               <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', }}>taimoor</Text>
                  <Text style={{ fontSize: 12, color: 'gray', marginTop: 2 }}>Okay</Text>
               </View>
            </View>

            <View>
             <Icon name="chat" type="Entypo" style={{ color: '#ee2b7a', fontSize: 28 }} />
              
             </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} onPress={() => Actions.Chatroom()} 
            style={{ flexDirection: 'row', alignItems: 'center',paddingHorizontal:15, marginTop: 30 ,justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
               <Image source={require('../assets/mian.jpg')} style={{ width: 60,height: 60,borderRadius: 60}} />
               <Icon name="primitive-dot" type="Octicons" style={{  marginLeft: -8, marginTop: 30,color:'lightgreen', fontSize:20  }} />
             
               {/* <Octicons name="primitive-dot" size={20} color='lightgreen' style={{ marginLeft: -8, marginTop: 30 }} /> */}
               <View style={{ flexDirection: 'column', marginLeft: 8 }}>
                  <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', }}>museyab</Text>
                  <Text style={{ fontSize: 12, color: 'gray', marginTop: 2 }}>Headdost no longer wire</Text>
               </View>
            </View>

            <View>
             <Icon name="chat" type="Entypo" style={{ color: '#ee2b7a', fontSize: 28 }} />
              
             </View>
        </TouchableOpacity>
 
  
        </View>
 

      </View>



    );
  }
}





const styles = StyleSheet.create({

  logo1: {
    width: 60,
    height: 60,
    borderRadius: 50
  },


});

export default chat_Beauty;
