import React, { Component } from 'react';

import { View, ImageBackground, StyleSheet, Image, Dimensions, DeviceEventEmitter, AppState, TextInput, Text, ScrollView, BackHandler, TouchableOpacity, AsyncStorage, FlatList } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import { Actions } from 'react-native-router-flux';
import Connection from "../connection";
import ImageLoad from 'react-native-image-placeholder';
import { connect } from "react-redux";
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';
import Octicons from 'react-native-vector-icons/Octicons';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { Call } from "react-native-openanything";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
 
class Chatroom extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data1: [],
      spinner: false,
      appState: AppState.currentState,
      data1: [],
      id: '',
      receiver_id: '',

      message: '',
      existingchat: [],
      spinner: false,
      check: false,
      name: '',
      text: "Send",
      checkid: true,
      status: false,
      display_name: '',
      imageSource1: null,
      test: [],
      chatid: '',
      chat_iiid: 0,
      user_iid: '',
      chat_name: '',
      chat_image: '',
      skalton: true,
      sender_image: null,
      visible: false
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
    Actions.pop();
    return true;
  }


 





  on_Call = () => {
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',this.state.mobile_number)
    Call(this.props.user_mobile).catch((err) => console.error(err));
  };



  componentDidMount = async () => {

    console.log('  fcm_token:fcm_token  fcm_token:fcm_token  fcm_token:fcm_token', this.props.fcm_token)
  

    // this.call_for_check()
    let user = await AsyncStorage.getItem('customer');
    // console.log(user)
    let parsed = JSON.parse(user);
    let id = parsed[0].id;
    let name = parsed[0].name;
    let profile1 = parsed[0].profile;
    // let profile = Connection+'images/'+profile1


    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiidddddddddddddddddddddddd=>', profile1)
    let receiver_id = this.props.receiver_id;
    console.log('jis ko message pehli bar send karna uski profile sey=>', receiver_id)

    // let user_iid= this.props.route.params.receiver_id; 
    // let chat_iiid= this.props.route.params.chat_iiid;
    // let sender_id= this.props.route.params.sender_id;

    // let chat_name= this.props.route.params.chat_name;
    // let chat_image= this.props.route.params.chat_image;

    let chat_name = this.props.chat_name
    let path = this.props.path


    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiidddddddddddddddddddddddd=>', path)


    // console.log('t==========user_iiduser_iiduser_iid================chat_iiid',user_iid)

    // if(this.props.chat_iiid)
    // {
    //     chat_iiid=this.props.chat_iiid
    // }
    // else
    // {
    //     chat_iiid=0
    // }
    this.setState({
      id: id,
      receiver_id: receiver_id,
      chat_name: chat_name,
      path: path,
      name: name,
      sender_image: profile1
      //   chat_name:chat_name,
      //   chat_image:chat_image



    })
    // console.log('9999999999==local user id===999999999999999999',id)
    // console.log('888 ==== id chat se aa rai h====88888888888888',user_iid)

    // console.log('777===chat id inbox wali===7777777777777777777',chat_iiid)


    if (this.state.chat_iiid) {

      this.getexistingchat1();
    }
    else {
      this.getchatid();
    }

    this.timer = setInterval(() => this.getexistingchat(), 3000)
    // this.getchatid();
  }


  getchatid() {
    this.setState({
      spinner1: true
    })
    let api = Connection + 'rest_apis.php?action=get_existing_chat';


    fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: `sender_id=${this.state.id}&receiver_id=${this.state.receiver_id}`,

    })
      .then((response) => response.json())
      .then((json) => {
        let resjson = json.response
        console.log("chat is => ", resjson)
        this.setState({
          spinner1: false
        })

        if (json.response == "fail") {
          this.setState({
            checkid: false
          })

        }
        else {
          console.log("chat id ", Object.keys(resjson))
          let id = resjson[0].id
          console.log("chat id ", id)

          this.setState({

            chat_iiid: id,
            checkid: true


          })

          this.getexistingchat1()


        }


      })
      .catch((error) => {
        console.error(error);
      })


  }









  getexistingchat() {



    //   console.log("check email "+this.state.chat_iiid)
    let api = Connection + 'rest_apis.php?action=get_chat_messages_by_id';

    fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: `chat_iiid=${this.state.chat_iiid}`,
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log("get message")
        // console.log(json.response);
        let response = json.response

        if (json.response == "fail") {
          this.setState({
            checkid: false
          })
        }
        else {
          this.setState({
            test: response,

            existingchat: response,
            checkid: true,
            skalton: false
            // text: "Send",
          })

        }


        this.setState({

          skalton: false
        })


      })
      .catch((error) => {
        console.error(error);
      })


  }



  getexistingchat1() {



    console.log("check aaa chat_iiid ", this.state.chat_iiid)
    let api = Connection + 'rest_apis.php?action=get_chat_messages_by_id';
    console.log("check email ", api)

    fetch(api, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: `chat_iiid=${this.state.chat_iiid}`,
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log("get message")
        // console.log(json);
        let response = json.response
        console.log("chat record", response);
        if (json.response == "fail") {
          this.setState({
            checkid: false
          })
        }
        else {
          this.setState({
            test: response,
            existingchat: response,
            checkid: true,
            text: "Send",
          })
        }

        this.setState({
          spinner1: false
        })

      })
      .catch((error) => {
        console.error(error);
      })


  }



















  send_first_message = () => {



    if (this.state.message == "") {
      alert(this.props.Do_not_send_empty_message);

    }
    else {


      if (this.state.checkid == true) {
        this.setState({
          text: "Sending.."
        })
        let uploaddata = new FormData();

        let chatid1 = this.state.chat_iiid



        uploaddata.append('chat_id', chatid1);
        uploaddata.append('sender_id', this.state.id);
        uploaddata.append('receiver_id', this.state.receiver_id);
        uploaddata.append('message', this.state.message);

        console.log("messageoooooooooooooooooooooooooooo => ", this.state.message)
        console.log("idoooooooooooooooooooooooooooo => ", this.state.id)
        console.log("user_iidoooooooooooooooooooooooooooo => ", this.state.receiver_id)

        let api = Connection + 'rest_apis.php?action=send_new_message';


        fetch(api, {
          method: 'POST',
          headers: {
            "Content-Type": "multipart/form-data",
            "otherHeader": "foo",
          },
          body: uploaddata,
        })
          .then((response) => response.json())
          .then((json) => {
            console.log("response", json.response);

            if (json.response == "fail") {

              alert(this.props.network_Fail)

            }
            else {
              this.setState({
                message: '',
                text: "Send",

              })


            }
          })
          .catch((error) => {
            console.error(error);
          })
      }

      else {

        this.setState({
          text: "Sending.."
        })


        let uploaddata = new FormData();

        uploaddata.append('sender_id', this.state.id);
        uploaddata.append('receiver_id', this.state.receiver_id);
        uploaddata.append('message', this.state.message);


        console.log("messagexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx => ", this.state.message)
        console.log("idxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx => ", this.state.id)
        console.log("user_iidxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx => ", this.state.receiver_id)

        let api = Connection + 'rest_apis.php?action=send_first_new_message';

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
            console.log("chatid is =>")
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", response.response);


            if (response.response == "fail") {

              alert(this.props.network_Fail)

            }
            else {
              this.setState({
                message: '',
                text: "Send",
                checkid: true,

                chat_iiid: response.response
              })


            }
          })
          .catch((error) => {
            console.error(error);
          })


      }


    }
  }






  handleDelete = () => {
    this.setState({
      visible: false,
    });
  };




  opendialogue = () => {
    this.setState({
      visible: true,
    });
  };







  createtable1 = () => {
    let table = []

    let record = this.state.existingchat
    let len = record.length

    if (record != 'fail') {
      for (let i = 0; i < len; i++) {
        let message = record[i].message
        let sender_id = record[i].sender_id
        let datetime = record[i].date
        let splitdate = datetime.split(" ")
        var splitdate1 = splitdate[1].split(":");
        let testtime = splitdate1[0] + ":" + splitdate1[1]
        let time = testtime

        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
          time = time.slice(1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }

        //  console.log("hhhhhhhhhhhhhhhhhh",splitdate1)

        //   let total_comments = record[i].total_comments
        //   let post_ImageURL = record[i].image
        //   let path = Connection+'uploads/'+post_ImageURL
        //   console.log('pattt',path)
        table.push(<View>
          {
            <View>

              {this.state.id == sender_id ?

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                  <View style={styles.messL} >

                    <Text style={{ color: 'white', fontSize: 16, marginRight: 32 }}>{message}</Text>
                  </View>
                  <Text style={{ color: 'gray', fontSize: 12, alignSelf: 'flex-end', marginRight: 12 }}>{time}</Text>

                </View>


                :

                <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                  <View style={styles.mess}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '500' }}>{message}</Text>

                  </View>
                  <Text style={{ color: 'gray', fontSize: 12, alignSelf: 'flex-start', marginLeft: 10 }}>{time}</Text>
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


  render() {



    return (

      <>

        <View style={{ flex: 1 }}>


          <View style={styles.Line}>




            <View style={styles.LineView}>
              <TouchableOpacity onPress={() => Actions.pop()} >

                 
                            <Icon name="arrowleft" type="AntDesign"  style={{     color: '#ee2b7a', fontSize: 26 }} />

              </TouchableOpacity>

              <ImageLoad
                style={styles.ImageAvater}
                loadingStyle={{ size: 'large', color: 'blue' }}
                source={{ uri: this.props.path }}
                borderRadius={150}
                placeholderStyle={styles.ImageAvater}

              />

              {/* <Image source={require('../assets/doctor2.png')}
                style={styles.ImageAvater} /> */}
              {/* <Octicons name="primitive-dot" size={20} color='lightgreen' style={{ marginLeft: -6, marginTop: 22 }} /> */}

              <Icon name="dot-single" type="Entypo" style={{ color: 'lightgreen', fontSize: 40, position: 'absolute', left: 45, bottom: -10 }} />


              <View style={{ flexDirection: 'column', width: 190, }}>
                <Text numberOfLines={1} style={{ fontSize: 16, color: '#ee2b7a', fontWeight: 'bold', marginHorizontal: 8, maxWidth: '70%' }}>{this.props.chat_name}</Text>
                <Text style={{ fontSize: 11, color: '#ee2b7a', fontWeight: 'bold', marginHorizontal: 8 }}>{this.props.active}</Text>
              </View>


            </View>

             
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
  
  
  <TouchableOpacity onPress={() => this.on_Call()}>
    <Icon name="call" type="Ionicons" style={{ color: '#ee2b7a', fontSize: 25, marginLeft: 22 }} />
  </TouchableOpacity>
</View>

 
          </View>




          {this.state.skalton == true ?


            <SkeletonPlaceholder>
              <View
                style={{
                  width: "30%",

                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'white'
                }}
              ></View>

              <View
                style={{
                  width: "60%",

                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'white'
                }}
              ></View>





              <View
                style={{
                  width: "60%",

                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'white'
                }}
              ></View>



              <View
                style={{
                  width: "30%",
                  alignSelf: "flex-end",
                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: "white",
                  flexDirection: 'row',
                  marginRight: 15
                }}
              ></View>
              <View
                style={{
                  width: "60%",
                  alignSelf: "flex-end",
                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: "white",
                  flexDirection: 'row',
                  marginRight: 15
                }}
              ></View>
              <View
                style={{
                  width: "60%",
                  alignSelf: "flex-end",
                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: "white",
                  flexDirection: 'row',
                  marginRight: 15
                }}
              ></View>
              <View
                style={{
                  width: "30%",

                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'white'
                }}
              ></View>

              <View
                style={{
                  width: "60%",
                  alignSelf: "flex-end",
                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: "white",
                  flexDirection: 'row',
                  marginRight: 15
                }}
              ></View>


              <View
                style={{
                  width: "60%",

                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'white'
                }}
              ></View>

              <View
                style={{
                  width: "30%",

                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'white'
                }}
              ></View>

              <View
                style={{
                  width: "60%",
                  alignSelf: "flex-end",
                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: "white",
                  flexDirection: 'row',
                  marginRight: 15
                }}
              ></View>

              <View
                style={{
                  width: "60%",
                  alignSelf: "flex-end",
                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  backgroundColor: "white",
                  flexDirection: 'row',
                  marginRight: 15
                }}
              ></View>

              <View
                style={{
                  width: "30%",

                  height: 55,
                  borderRadius: 12,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  marginTop: 10,
                  marginLeft: 15,
                  backgroundColor: 'white'
                }}
              ></View>


            </SkeletonPlaceholder>


            :




            <ScrollView ref={ref => { this.scrollView = ref }}
              onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: true })} style={{ marginBottom: 65 }}>
              <View >
                {this.createtable1()}
              </View>
            </ScrollView>
          }







        </View>
        {/* 
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, width: width, backgroundColor: '#DEE7E6', paddingVertical: 5 }}>


          <TextInput
            style={styles.inpu}
            placeholder={this.props.Type_Comment}
            placeholderTextColor="gray"
            value={this.state.message}

            underlineColorAndroid="transparent"
            onChangeText={(message) => this.setState({ message })}

          />
          <TouchableOpacity style={{ position: 'absolute', right: 15, }} onPress={() => { this.send_first_message() }}>
            <MaterialCommunityIcons name="send-circle" size={48} color="#ee2b7a" />
          </TouchableOpacity>

          <Entypo style={{ position: 'absolute', left: 17, }} name="emoji-happy" size={36} color="#ee2b7a" />

        </View> */}

        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 4, width: width, justifyContent: 'space-between', paddingHorizontal: 15, borderTopWidth: 1, borderColor: 'lightgray', paddingTop: 4, backgroundColor: 'white' }}>
          <Icon name="pluscircle" type="AntDesign" style={{ color: "#ee2b7a", fontSize: 27 }} />
          <TextInput value={this.state.message} style={{ width: width / 1.4, height: 40, borderRadius: 8, paddingLeft: 10, backgroundColor: 'lightgray', color: 'black' }} placeholder="Message" placeholderTextColor='gray' underlineColorAndroid="transparent" onChangeText={(message) => this.setState({ message })} />
          <Icon onPress={() => { this.send_first_message() }} name="ios-send" type="Ionicons" style={{ color: "#ee2b7a", fontSize: 28 }} />
        </View>



      </>

    )
  }

}




const styles = StyleSheet.create({
  HeaderView: {
    backgroundColor: 'white',
    height: 62,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray'

  },

  ImageAvater: {
    width: 40,
    height: 40,
    borderRadius: 25,





  },

  inpu: {
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderColor: 'gray',
    width: '95%',
    borderRadius: 32,
    paddingLeft: 52,
    color: 'black',
    alignSelf: 'center'
  },


  mess: {
    maxWidth: '80%',
    backgroundColor: 'lightgray',
    borderRadius: 12,
    marginTop: 14,
    marginHorizontal: 8,
    alignSelf: 'flex-start',
    padding: 8,
    // justifyContent: 'center', alignItems: 'center',
    minWidth: '30%'


  },
  messL: {
    maxWidth: '80%',
    backgroundColor: '#ee2b7a',
    marginTop: 14,
    marginHorizontal: 8,
    alignSelf: 'flex-end',
    padding: 8,
    borderRadius: 12,
    // justifyContent: 'center', alignItems: 'center',
    minWidth: '30%'

    // borderTopRightRadius:8,
    // borderBottomEndRadius:22,
    // borderBottomLeftRadius:22

  },




  Line: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    width: width,
    backgroundColor: 'white',
    height: 62,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    paddingLeft: 10



  },
  LineView: {

    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',




  },
})



 export default Chatroom;