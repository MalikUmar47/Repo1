
import { Row } from 'native-base';
import React, { Component } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    ImageBackground,
    Pressable,
    Dimensions,
    BackHandler,
    AsyncStorage
} from 'react-native';
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Connection from "../connection";

// import ImageLoad from 'react-native-image-placeholder';
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height



export default class Patient_Confirm_Booking extends Component {

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
        }
    }


    changebtn(value, val) {
        this.setState({
            skalton: true
        })

        if (this.state[value] == 2) {



            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,


                [value]: 2,


            })
        }
        else {
            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,

                [value]: 2,


            })

        }
        this.setState({
            check_design: val,
            skalton: false
        })
    }







    componentDidMount = async () => {

        this.backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            this.backAction
        );
        let user = await AsyncStorage.getItem('customer');


        let parsed = JSON.parse(user);

        let id = parsed[0].id;
        let currency = parsed[0].currency;
        console.log('jjjjjjjjjjjjj', currency)
        if (currency == 'USD') {
            this.setState({
                s_currency: '$'
            })

        }
        else {
            this.setState({
                s_currency: 'Br'
            })
        }

        this.setState({

            id: id,



        })
        console.log('kkkkkkkkkkkk', this.state.id)
        this.get_appointments_user()

    }






    get_appointments_user = () => {

        let uploaddata = new FormData();



        uploaddata.append("user_id", this.state.id);






        let api = Connection + "rest_apis.php?action=display_appointments_user";
        console.log("pass => ", api);
        fetch(api, {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                otherHeader: "foo",
            },
            body: uploaddata,

        })
            .then((response) => response.json())
            .then((response) => {

                let record4 = response.response




                if (record4 != 'fail') {


                    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@', record4)

                    this.setState({
                        data1: record4,
                        skalton: false
                    })

                    // let len = array_fri.length

                    // for (let i = 0; i < len; i++) {



                    //     let doctor_time = array_fri[i]
                    // let boxes = "box"+doctor_time;


                    // }


                    // console.log('mondddddddddddayyyyyyyyyy',this.state.monday1)
                    // console.log('mondddddddddddayyyyyyyyyy',this.state.tuesday1)



                }

                this.setState({

                    skalton: false
                })


            })
            .catch((error) => {
                console.error(error);
            });

    };






    createtable1 = () => {
        let table = []





        let record1 = this.state.data1
        // console.log(';;;;;;;;;;;;;;;;;;;;',record1)

        let len = record1.length
        //  console.log(';;;;;;;;;;;;;;;;;;;;',len)
        if (record1 != 'fail') {
            for (let i = 0; i < len; i++) {



                let date = record1[i].date
                let doctor_name = record1[i].doctor_name
                let user_name = record1[i].user_name

                let doctor_address = record1[i].doctor_address
                let doctor_experience = record1[i].doctor_experience
                let doctor_degree = record1[i].doctor_degree

                let category = record1[i].category
                let appointment_id = record1[i].id
                // let date = record1[i].date
                let day = record1[i].day


                let fee = record1[i].fee
                let type = record1[i].type
                let time = record1[i].time
                let status = record1[i].status
                let perscription = record1[i].perscription

                console.log('JJJJJJJJJJJJJJJJ', perscription)

                let perscription1 = Connection + 'perscription/' + perscription

                // console.log('lllllllllllllllll',fee)






                let profile1 = record1[i].doctor_profile

                let profile = Connection + 'images/' + profile1
                //  console.log('AAAAAAAAAAAAAAAAAAAAAAA',doctor_time)

                //       let profile1 = record1[i].user_profile

                //       let profile =Connection+'CarFinder/'+profile1
                //   console.log("aaaaaaaaaaaaa",profile);

                //       let comment = record1[i].comment
                //       let rating = record1[i].rating







                table.push(<View>
                    {
                        <View>
                            {this.state.check_design == status ?




                                <View style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 18, marginTop: 15, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <ImageLoad
                                            style={{ width: 40, height: 40, borderRadius: 12 }}
                                            loadingStyle={{ size: 'large', color: 'blue' }}
                                            source={{ uri: profile }}
                                            borderRadius={12}
                                            placeholderStyle={{ width: 40, height: 40, borderRadius: 12 }}


                                        />

                                        <View style={{ marginLeft: 10, width: '85%' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Dr. {doctor_name}</Text>
                                                <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>{this.state.s_currency}{fee}</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text style={{ color: 'gray', fontSize: 12 }}>{date} {day}</Text>
                                                <Text style={{ color: 'gray', fontSize: 11 }}>{status}</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ee2b7a', marginLeft: 5 }}>Type: {type}</Text>
                                        <TouchableOpacity onPress={() => Actions.patient_site_appointment_detai({ date: date, status: status, day: day, time: time, doctor_name: doctor_name, category: category, doctor_address: doctor_address, doctor_profile: profile, fee: fee, patient_name: user_name, perscription1: perscription1, perscription: perscription, doctor_experience: doctor_experience, appointment_id: appointment_id, app_type: type, s_currency: this.state.s_currency })}>
                                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#ee2b7a' }}>View Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>



                                :
                                <View>
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
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 25, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#ee2b7a' }}>
                   
                    {/* <Icon onPress={() => Actions.Patient_Wallet()} name="wallet-outline" type="Ionicons" style={{ color: "black", fontSize: 19 }} /> */}
                   
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: '700' }}>Appointments</Text>
                    {/* <Icon onPress={() => Actions.Patient_Wallet()} name="wallet-outline" type="Ionicons" style={{ color: "black", fontSize: 19 }} /> */}
                </View>

                <View style={{ width: width / 1.1, backgroundColor: 'white', borderRadius: 10, alignSelf: 'center', height: 50, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                    <TouchableOpacity style={{ width: '33%' }} onPress={() => this.changebtn("text1", 'panding')}  >
                        <View style={(this.state.text1 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text1 == 1 ? styles.in_active_text : styles.active_text)}>Upcoming</Text>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity style={{ width: '33%' }} onPress={() => this.changebtn("text2", 'complete')}  >
                        <View style={(this.state.text2 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text2 == 1 ? styles.in_active_text : styles.active_text)}>Completed</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ width: '33%' }} onPress={() => this.changebtn("text3", 'cancel')}  >
                        <View style={(this.state.text3 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text3 == 1 ? styles.in_active_text : styles.active_text)}>Cancelled</Text>
                        </View>
                    </TouchableOpacity>
                </View>




 

                    <ScrollView >
                  
                            <View style={{ paddingBottom: 20 }}>
                                {/* {this.createtable1()} */}
                                <View style={{ width: width / 1.1, alignSelf: 'center', backgroundColor: 'white', borderRadius: 5, paddingHorizontal: 15, paddingVertical: 18, marginTop: 15, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        {/* <ImageLoad
                                            style={{ width: 40, height: 40, borderRadius: 12 }}
                                            loadingStyle={{ size: 'large', color: 'blue' }}
                                            source={{ uri: profile }}
                                            borderRadius={12}
                                            placeholderStyle={{ width: 40, height: 40, borderRadius: 12 }}


                                        /> */}
<Image source={require('../assets/s13.jpg')}
  style={{ width: 40, height: 40, borderRadius: 12 }}/>
                                        <View style={{ marginLeft: 10, width: '85%' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Fashion Saloon</Text>
                                                <Text style={{ color: 'black', fontSize: 15, fontWeight: '500' }}>150$</Text>
                                            </View>

                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text style={{ color: 'gray', fontSize: 12 }}>29 Apr, Monday</Text>
                                                <Text style={{ color: 'gray', fontSize: 11 }}>Pending</Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
                                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ee2b7a', marginLeft: 5 }}>Type: Haircut</Text>
                                        <TouchableOpacity onPress={() => Actions.patient_site_appointment_detai({ date: date, status: status, day: day, time: time, doctor_name: doctor_name, category: category, doctor_address: doctor_address, doctor_profile: profile, fee: fee, patient_name: user_name, perscription1: perscription1, perscription: perscription, doctor_experience: doctor_experience, appointment_id: appointment_id, app_type: type, s_currency: this.state.s_currency })}>
                                            <Text style={{ fontSize: 14, fontWeight: '600', color: '#ee2b7a' }}>View Details</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                 
                    </ScrollView>
               






            </View>

        )
    }
}

const styles = StyleSheet.create({

    active_button: {
        width: '100%',
        height: 45,
        backgroundColor: '#ee2b7a',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    in_active_button: {
        width: width / 3,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },

    active_text: {
        color: 'white',
    },

    in_active_text: {
        color: '#ee2b7a',
    },


})