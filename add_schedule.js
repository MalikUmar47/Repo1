
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
    AsyncStorage,
    ToastAndroid
} from 'react-native';
import { Content, Card, CardItem, Thumbnail, Icon, Form, Container, Header, Drawer } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Connection from "../connection";
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height




export default class Doctor_Add_Availability extends Component {

    constructor(props) {

        super(props)

        this.state = {
            show: false,
            date1: new Date(),
            mode1: 'time',
            dateshow1: '',
            timeshow1: '',
            timeshow2: '',
            dateshow2: '',




            arr: [],
            arr1: [],
            arr2: [],
            arr3: [],
            arr4: [],
            arr5: [],
            arr6: [],



            record1: [],
            record2: [],
            data4: [],


            timeSelected: false,
            timeSelected1: false,

            category: "Sunday",
            text1: 2,
            text2: 1,
            text3: 1,
            text4: 1,
            text5: 1,
            text6: 1,
            text7: 1,
            main_array: [],
            profile: null,
            from_time: 'from', to_time: 'to',

            show1: false,
            show2: false,
            spinner: false

        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }

    componentWillUnmount() {
        BackHandler.removeEventListener(
            "hardwareBackPress",
            this.handleBackButtonClick
        );
    }
    onButtonPress = () => {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
        // then navigate
        navigate("NewScreen");
    };
    handleBackButtonClick() {
        // BackHandler.exitApp();
        // Actions.pop()
        return true;
    }



    componentDidMount = async () => {


        let user = await AsyncStorage.getItem('customer');

        let parsed = JSON.parse(user);
        let name = parsed[0].name;
        let id = parsed[0].id;

        let email = parsed[0].email;
        let degree = parsed[0].degree;
        let category_1 = parsed[0].category;


        console.log("aaaaaaaaaaaaa", name);



        let profile1 = parsed[0].profile;
        console.log("profile1", profile1);




        // console.log("hdbbh =>",profile)
        let profile = Connection + 'images/' + profile1
        this.setState({
            name: name,
            email: email,
            id: id,
            profile: profile,
            degree: degree,
            category_1: category_1,





        })
    }




    // changebtn(value, val) {


    //     if (this.state[value] == 2) {

    //         this.setState({
    //             text1: 1,
    //             text2: 1,
    //             text3: 1,
    //             text4: 1,
    //             text5: 1,
    //             text6: 1,
    //             text7: 1,


    //             [value]: 2,


    //         })
    //     }
    //     else {
    //         this.setState({
    //             text1: 1,
    //             text2: 1,
    //             text3: 1,
    //             text4: 1,
    //             text5: 1,
    //             text6: 1,
    //             text7: 1,

    //             [value]: 2,


    //         })

    //     }
    //     this.setState({
    //         check_design: val
    //     })
    // }






    changebtn(value, value2) {

        if (this.state[value] == 2) {
            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,
                text4: 1,
                text5: 1,
                text6: 1,
                text7: 1,

                [value]: 2,

                category: '',

            })
        }
        else {
            this.setState({
                text1: 1,
                text2: 1,
                text3: 1,
                text4: 1,
                text5: 1,
                text6: 1,
                text7: 1,

                [value]: 2,
                category: value2
            })
        }

        if (value2 == 'Monday') {
            this.setState({
                main_array: this.state.arr
            })


            setTimeout(() => {

                console.log("main_arraymain_arraymain_arraymain_arraymain_arraymain_array", this.state.main_array)

            }, 100);


        }
        else if (value2 == 'Tuesday') {
            this.setState({
                main_array: this.state.arr1
            })


            setTimeout(() => {

                console.log("main_arraymain_arraymain_arraymain_arraymain_arraymain_array", this.state.main_array)

            }, 100);


        }
        else if (value2 == 'Wednesday') {
            this.setState({
                main_array: this.state.arr2
            })


            setTimeout(() => {

                console.log("main_arraymain_arraymain_arraymain_arraymain_arraymain_array", this.state.main_array)

            }, 100);


        }
        else if (value2 == 'Thursday') {
            this.setState({
                main_array: this.state.arr3
            })


            setTimeout(() => {

                console.log("thursdayyyyyyyyyyyyyyy", this.state.main_array)

            }, 100);


        }
        else if (value2 == 'Friday') {
            this.setState({
                main_array: this.state.arr4
            })


            setTimeout(() => {

                console.log("main_arraymain_arraymain_arraymain_arraymain_arraymain_array", this.state.main_array)

            }, 100);


        }
        else if (value2 == 'Saturday') {
            this.setState({
                main_array: this.state.arr5
            })


            setTimeout(() => {

                console.log("main_arraymain_arraymain_arraymain_arraymain_arraymain_array", this.state.main_array)

            }, 100);


        }
        else if (value2 == 'Sunday') {
            this.setState({
                main_array: this.state.arr6
            })


            setTimeout(() => {

                console.log("main_arraymain_arraymain_arraymain_arraymain_arraymain_array", this.state.main_array)

            }, 100);


        }
    }






    createtable1 = () => {
        let table = []

        let record1 = this.state.main_array
        let len = record1.length
        //    console.log(';;;;;;;;;;;;;;;;;;;;',len)
        if (record1 != "") {
            for (let i = 0; i < len; i++) {



                let doctor_time = record1[i]
                console.log('AAAAAAAAAAAAAAAAAAAAAAA', doctor_time)
                let ddd = doctor_time.split('-')
                let from = ddd[0]
                let to = ddd[1]
                //       let profile1 = record1[i].user_profile

                //       let profile =Connection+'CarFinder/'+profile1
                //   console.log("aaaaaaaaaaaaa",profile);

                //       let comment = record1[i].comment
                //       let rating = record1[i].rating







                table.push(<View>
                    {
                        <View style={{ width: width / 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 30 }}>
                            <View style={{ width: '43%' }}>
                                <Text style={{ color: 'black', fontSize: 12, fontWeight: '400' }}>From</Text>

                                <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', color: 'black' }} placeholder='From' placeholderTextColor='gray' editable={false} value={from} />




                            </View>

                            <View style={{ width: '43%' }}>
                                <Text style={{ color: 'black', fontSize: 12, fontWeight: '400' }}>to</Text>

                                <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', color: 'black' }} placeholder='to' placeholderTextColor='gray' editable={false} value={to} />


                            </View>

                            <Icon onPress={() => this.array_index_for_delete(doctor_time)} name="delete" type="MaterialCommunityIcons" style={{ color: "#ee2b7a", fontSize: 20, marginTop: 20 }} />
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







    showtimepicker1() {
        this.setState({
            show: true,
            mode1: "time"
        })
    };


    showtimepicker2() {
        this.setState({
            show1: true,
            mode2: "time"
        })
    };






    add_arr = () => {
        if (this.state.from_time == 'from' || this.state.to_time == "to") {
            alert("Please select both times for adding an interval.")
        } else {
            let interval = this.state.from_time + '-' + this.state.to_time

            if (this.state.category == 'Monday') {
                console.log('mondayyyyyy', this.state.arr)
                this.state.arr.push(interval)
                // this.state.main_array.push(val)

                this.setState({
                    main_array: this.state.arr,
                    record1: this.state.main_array

                })
            } else if (this.state.category == 'Tuesday') {
                console.log('TuesdayTuesday', this.state.arr1)
                // this.state.main_array.push(val)
                this.state.arr1.push(interval)
                this.setState({
                    main_array: this.state.arr1,
                    record1: this.state.main_array

                })
            } else if (this.state.category == 'Wednesday') {
                this.state.arr2.push(interval)
                console.log('WednesdayWednesday', this.state.arr2)

                this.setState({
                    main_array: this.state.arr2,
                    record1: this.state.main_array

                })
            } else if (this.state.category == 'Thursday') {
                this.state.arr3.push(interval)

                console.log('ThursdayThursday', this.state.arr3)
                this.setState({
                    main_array: this.state.arr3,
                    record1: this.state.main_array

                })
            } else if (this.state.category == 'Friday') {
                this.state.arr4.push(interval)

                console.log('FridayFriday', this.state.arr4)
                this.setState({
                    main_array: this.state.arr4,
                    record1: this.state.main_array

                })
            } else if (this.state.category == 'Saturday') {
                this.state.arr5.push(interval)

                console.log('SaturdaySaturday', this.state.arr5)
                this.setState({
                    main_array: this.state.arr5,
                    record1: this.state.main_array

                })
            } else if (this.state.category == 'Sunday') {
                this.state.arr6.push(interval)

                console.log('SundaySunday', this.state.arr6)
                this.setState({
                    main_array: this.state.arr6,
                    record1: this.state.main_array

                })
            }


            setTimeout(() => {
                this.setState({
                    from_time: 'from',
                    to_time: 'to'
                })
            }, 100);

        }





    }





    timeSelect = (date) => {

        let from_time = date.getUTCHours() + ':' + date.getUTCMinutes()
        console.log(date.getUTCHours()); // Hours
        console.log(date.getUTCMinutes());
        // console.log(d.getUTCSeconds());
        this.setState({
            timeSelected: true,
            from_time: from_time,
            show: false
        })


    }






    timeSelect1 = (date) => {

        let to_time = date.getUTCHours() + ':' + date.getUTCMinutes()
        console.log(date.getUTCHours()); // Hours

        this.setState({
            timeSelected: true,
            to_time: to_time,
            show1: false
        })


    }
















    array_index_for_delete = (val) => {
        console.log('CCCCCCCCCCCCCCCCCCC', val)

        let index1 = this.state.main_array.indexOf(val);
        console.log('FFFFFFFFFFFFFFFFFFFFFFFFFFF', index1)

        this.state.main_array.splice(index1, 1),
            console.log('SSSSSSSSSSSSSSSSSSSSSSSSS', this.state.main_array)

        this.setState({

            // main_array:this.state.main_array.splice(index1,1),
        });


    }



    array_index = (val) => {
        let index1 = this.state.arr.indexOf(val);
        this.state.arr.splice(index1, 1),
            this.setState({

                record1: this.state.arr.splice(index1, 1),
            });
        console.log('AAAAAAAAAAAAAAAAAAAAAAAAAA', this.state.arr)


    }




    array_index_1 = (val, val1) => {
        console.log('DDDDDDDDDDDDDDDDDDDDD', val1)

        let index1 = this.state.slides.indexOf(val);

        console.log('DDDDDDDDDDDDDDDDDDDDD', this.state.slides[index1])

        this.state.slides[index1] = val1

        setTimeout(() => {
            console.log('DDDDDDDDDDDDDDDDccccccDDDDD', this.state.slides)

        }, 122);

    }







    Add_shedule = () => {

        let uploaddata = new FormData();


        if (this.state.arr == "" && this.state.arr1 == "" && this.state.arr2 == "" && this.state.arr3 == "" && this.state.arr4 == "" && this.state.arr5 == "" && this.state.arr6 == "") {
            alert("Please add schedule. ")
        }
        else {






            let brr = JSON.stringify(this.state.arr)
            let brr1 = JSON.stringify(this.state.arr1)
            let brr2 = JSON.stringify(this.state.arr2)
            let brr3 = JSON.stringify(this.state.arr3)
            let brr4 = JSON.stringify(this.state.arr4)
            let brr5 = JSON.stringify(this.state.arr5)
            let brr6 = JSON.stringify(this.state.arr6)



            // let brr2=this.state.arr2


            // let arr2=JSON.stringify(this.state.arr2)
            // let arr3=JSON.stringify(this.state.arr3)
            // let arr4=JSON.stringify(this.state.arr4)
            // let arr5=JSON.stringify(this.state.arr5)

            this.setState({ spinner: true })




            console.log('arrrrrrrrrrrrrrrr', brr)
            // console.log('arrrrrrrrrrrrr111111111111rrr',arr1)
            // console.log('arrrrrrrrr2222222222rrrrrrr',arr2)


            uploaddata.append("doctor_id", this.state.id);
            uploaddata.append("arr", brr);
            uploaddata.append("arr1", brr1);
            uploaddata.append("arr2", brr2);
            uploaddata.append("arr3", brr3);
            uploaddata.append("arr4", brr4);
            uploaddata.append("arr5", brr5);
            uploaddata.append("arr6", brr6);
            //   uploaddata.append("arr4", arr4);
            //   uploaddata.append("arr5", arr5);




            let api = Connection + "rest_apis.php?action=Add_shedule";
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
                    console.log("KKKKKKKKKKKKKKKKKKKresponseeeeKKKKKKKKKKKKKK", response.response);

                    if (response.response == "repeat") {
                        this.setState({
                            spinner: false,
                        });
                        alert("you have already added your schedule.");
                    } else if (response.response == "fail") {
                        this.setState({
                            spinner: false,
                        });
                        alert("Please try again later.");
                    }
                    else {

                        this.setState({
                            spinner: false,
                        });
                        ToastAndroid.show("You have successfully added your schedule", ToastAndroid.SHORT);

                        Actions.Login({ role: "doctor" });

                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };





    confirm = (date) => {
        console.log('kkkkkkkkkkkkkkk', date)
        this.setState({
            show: false
        })
    }


    cancel = () => {
        this.setState({
            show: false
        })
        console.log('kkkkkkkkkkkkkkk')
    }



    render() {


        return (
            <View style={{ flex: 1 }}>


                <View style={{ paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 15, shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, backgroundColor: '#ee2b7a' }}>


                    {/* <Icon onPress={() => Actions.pop()} name="chevron-left" type="Entypo" style={{ color: "#1B2E59", fontSize: 20 }} /> */}
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', marginLeft: 8 }}>Add Availbility</Text>
                    <Text>       </Text>
                </View>

                <Text style={{ fontSize: 14, fontWeight: '600', color: 'black', paddingHorizontal: 22, marginTop: 20 }}>Week Days</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 15 }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.changebtn("text1", 'Sunday')}  >
                        <View style={(this.state.text1 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text1 == 1 ? styles.in_active_text : styles.active_text)}>S</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.changebtn("text2", 'Monday')}  >
                        <View style={(this.state.text2 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text2 == 1 ? styles.in_active_text : styles.active_text)}>M</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.changebtn("text3", 'Tuesday')}  >
                        <View style={(this.state.text3 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text3 == 1 ? styles.in_active_text : styles.active_text)}>T</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.changebtn("text4", 'Wednesday')}  >
                        <View style={(this.state.text4 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text4 == 1 ? styles.in_active_text : styles.active_text)}>W</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.changebtn("text5", 'Thursday')}  >
                        <View style={(this.state.text5 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text5 == 1 ? styles.in_active_text : styles.active_text)}>T</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.changebtn("text6", 'Friday')}  >
                        <View style={(this.state.text6 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text6 == 1 ? styles.in_active_text : styles.active_text)}>F</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8} onPress={() => this.changebtn("text7", 'Saturday')}  >
                        <View style={(this.state.text7 == 1 ? styles.in_active_button : styles.active_button)}>
                            <Text style={(this.state.text7 == 1 ? styles.in_active_text : styles.active_text)}>S</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={{ fontSize: 14, fontWeight: '600', color: 'black', paddingHorizontal: 22, marginTop: 18 }}>Add Availability</Text>

                <View style={{ width: width / 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 25, marginTop: 30 }}>
                    <View style={{ width: '43%' }}>
                        <Text style={{ color: 'black', fontSize: 12, fontWeight: '400' }}>From</Text>

                        <TouchableOpacity style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', }} activeOpacity={0.8} onPress={() => this.showtimepicker1()} >

                            <Text style={{ color: 'gray', marginTop: 10 }} >{this.state.from_time}</Text>
                            {/* <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', color: 'gray' }} placeholder='From' placeholderTextColor='gray' editable={false} value={this.state.from_time} /> */}

                        </TouchableOpacity>

                        {/* <TouchableOpacity activeOpacity={0.8} onPress={() => this.showtimepicker1()} >
                            <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', color: 'gray' }} placeholder='From' placeholderTextColor='gray' editable={false} value={this.state.from_time} />
                        </TouchableOpacity> */}


                        {this.state.show == true ?


                            <DateTimePickerModal
                                isVisible={this.state.show}
                                date={new Date('1985-01-17',)}
                                mode="time"
                                onConfirm={(date) => this.timeSelect(date)}
                                onCancel={() => this.cancel()}
                                timeZoneOffsetInMinutes={0}
                                display="spinner"

                            />
                            :
                            <View>

                            </View>
                        }

                    </View>

                    <View style={{ width: '43%' }}>
                        <Text style={{ color: 'black', fontSize: 12, fontWeight: '400' }}>to</Text>
                        {/* <TouchableOpacity activeOpacity={0.8} onPress={() => this.showtimepicker2()} >
                            <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', color: 'gray' }} placeholder='to' placeholderTextColor='gray' editable={false} value={this.state.to_time} />
                        </TouchableOpacity> */}
                        <TouchableOpacity style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', }} activeOpacity={0.8} onPress={() => this.showtimepicker2()} >
                            <Text style={{ color: 'gray', marginTop: 10 }} >{this.state.to_time}</Text>

                            {/* <TextInput style={{ width: '100%', height: 40, borderBottomWidth: 1, borderColor: 'gray', color: 'gray' }} placeholder='to' placeholderTextColor='gray' editable={false} value={this.state.to_time} /> */}
                        </TouchableOpacity>
                        {this.state.show1 == true ?

                            <DateTimePickerModal
                                isVisible={this.state.show1}
                                date={new Date('1985-01-17',)}
                                mode="time"
                                onConfirm={(date) => this.timeSelect1(date)}
                                onCancel={() => this.cancel()}
                                timeZoneOffsetInMinutes={0}
                                display="spinner"
                            />
                            :
                            <View>

                            </View>
                        }
                    </View>

                    <Icon name="delete" type="MaterialCommunityIcons" style={{ color: "#ee2b7a", fontSize: 20, marginTop: 20 }} />
                </View>

                <TouchableOpacity onPress={() => this.add_arr()} style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, paddingHorizontal: 25 }}>
                    <Icon name="plus" type="AntDesign" style={{ color: "#ee2b7a", fontSize: 15 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 13, color: '#ee2b7a', marginLeft: 5 }}>Add Interval</Text>
                </TouchableOpacity>






                {this.createtable1()}


                <TouchableOpacity activeOpacity={0.8} onPress={() =>  Actions.Login1({role:'barber'})}  
                    style={{ width: width / 1.1, alignSelf: 'center', paddingVertical: 10, borderRadius: 30, backgroundColor: '#ee2b7a', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: 20 }}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Save</Text>
                </TouchableOpacity>












                {this.state.spinner == true &&
                    <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(2, 2, 2, 0.8)', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            width: width / 1.2, height: height / 9 - 20, backgroundColor: "white", flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 20, shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 5,
                            borderRadius: 6
                        }}>
                            <UIActivityIndicator color='#ee2b7a' />
                            <Text style={{ fontSize: 16, color: '#ee2b7a', fontWeight: 'bold' }}>Progressing your request</Text>
                        </View>
                    </View>
                }
            </View>

        )
    }
}

const styles = StyleSheet.create({

    active_button: {
        width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: '#ee2b7a', borderWidth: 0.7, borderColor: '#ee2b7a'
    },
    in_active_button: {
        width: 30, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 100, backgroundColor: 'white', borderWidth: 0.7, borderColor: 'black'
    },


    active_text: {
        color: 'white', fontSize: 13, fontWeight: 'bold'
    },
    in_active_text: {
        color: 'black', fontSize: 13, fontWeight: 'bold'
    },

})