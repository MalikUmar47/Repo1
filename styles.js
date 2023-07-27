import {StyleSheet, Dimensions,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height 
const styles = StyleSheet.create({
 
          //Home==========================================================================================

    container :{
        flex:1,
        
      
        },
        sliderContainer: {
          height: 240,
          width: '100%',
         
          justifyContent: 'center',
          alignSelf: 'center',
        
          
        },
        slide: {
     
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'transparent',
          borderRadius:8
        },
        sliderImage: {
          height: '160%',
          width: '100%',
          alignSelf: 'center',
          borderRadius:10,
     
       
        },    textage:{
          width:40,
          height:40,
          borderRadius:50
      },
  
        logo3:{
    
          width:90,
          height:90,
         borderRadius:50,
         marginLeft:8,
         marginTop:8
           },
        
  
        searchinput:{

        },
        inputContainer1: {
          width: '85%',
          height: 50,
          borderRadius: 8,
          flexDirection: 'row',
          position:'absolute',
          marginTop:105,
          backgroundColor:'white',
          alignSelf:'center',
        
        },

        inputContainer2: {
          width: '85%',
          height: 50,
          borderRadius: 8,
          flexDirection: 'row',
        
          marginTop:35,
          backgroundColor:'white',
          alignSelf:'center',
        
        },

        inputContainer3: {
          width: 140,
          height: 40,
          borderRadius: 8,
          flexDirection: 'row',
      
          marginTop:20,
          backgroundColor:'white',
        alignItems:'center',
        paddingLeft:10
        
        },

        containerStyle: {
          alignSelf: 'center',
          width: width,
          overflow: 'hidden',
          height: width / 1.7
      },
      sliderContainerStyle: {
          borderRadius: width,
          width:width * 2,
          height:width * 2,
          marginLeft: -(width / 2),
          position: 'absolute',
          bottom: 0,
          overflow: 'hidden'
      },
      Salon2: {
          height: width / 1.7,
          width: width,
          position: 'absolute',
          bottom: 0,
          marginLeft:width / 2,
          backgroundColor: '#9DD6EB',
          
      
      },
        inputContainer: {
          
            width: '95%',
            height: 50,
            borderColor: '#275983',
            borderRadius: 3,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
           
            
            borderRadius:53,
            marginLeft:8,
            marginTop:15
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
          logo1:{
      
            width:260,
            height:140,
           borderTopRightRadius:8,
           borderTopLeftRadius:8
           
             },
             Salon_logo:{
      
              width:'100%',
              height:140,
             borderTopRightRadius:8,
             borderTopLeftRadius:8
             
               },

             Salon1:{
   
              width:150,
              height:80,
             borderTopRightRadius:8,
             borderTopLeftRadius:8
             
               },
               

          //      Salon2:{
            
          //       width: "100%",
          //   height:"100%",
          //   //Below lines will help to set the border radius
          //   borderBottomLeftRadius: 30,
          //   borderBottomRightRadius: 15,
          //   borderTopRightRadius: 30,
          //   borderTopLeftRadius: 15,
          //   overflow: 'hidden',
          // // borderBottomEndRadius:12
          //        },
         
             sliderContainer: {
                height: 200,
                width: '100%',
               
                justifyContent: 'center',
                alignSelf: 'center',
              
                
              },
              slide: {
           
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'transparent',
                borderRadius:8
              },
              sliderImage: {
                height: '90%',
                width: '95%',
                alignSelf: 'center',
                borderRadius:10,
                marginTop:18
             
              },
              logo2:{
      
                width:  100,
                height:90,

              borderBottomLeftRadius:8,
              borderTopLeftRadius:8
         
                 },
          //AddProperty==========================================================================================

         
           
      button:{
        width:'92%',
        height:50,
        backgroundColor:'#154987',
      borderRadius:62,
      justifyContent:'center',alignItems:'center',
      marginTop:24,
  
      marginLeft:14,
      marginBottom:22
       
      },
     

      input1: {
      
      width:'96%',
      height:50,
        fontSize: 15,
      
        color: '#333',
        borderWidth:1,
        borderColor:'gray',
        borderRadius:50,
        paddingHorizontal:16,
        marginBottom:10,
        backgroundColor:'#f1f1f1'
   
      },
      input2: {
      
        width:'96%',
        height:100,
          fontSize: 15,
        
          color: '#333',
          borderWidth:1,
          borderColor:'gray',
          borderRadius:10,
          paddingHorizontal:16,
          marginBottom:8,
          marginTop:4
     
        },
      textinput01:{
        backgroundColor:'#154987',width:100,height:40,borderRadius:20,marginTop:13,justifyContent:'center',alignItems:'center' 
      },
      textinput1:{
        width:100,height:40,borderRadius:20,marginTop:13,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'lightgray' 

      },

      textcolor01:{
        fontSize:14,fontWeight:'bold',color:'white'
      },
      textcolor1:{
        fontSize:14,fontWeight:'bold',color:'black'
      },




      imageinput01:{
        backgroundColor:'#154987',width:112,height:50,marginTop:13,justifyContent:'center',alignItems:'center',borderTopLeftRadius:22,borderBottomLeftRadius:22 
      },
      imageinput1:{
        backgroundColor:'white',width:112,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center',borderTopLeftRadius:22,borderBottomLeftRadius:22  

      },


      imageinput011:{
        backgroundColor:'#154987',width:112,height:50,marginTop:13,justifyContent:'center',alignItems:'center' 
      },
      imageinput11:{
        backgroundColor:'white', width:112,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center'

      },


      imageinput0111:{
        backgroundColor:'#154987',width:112,height:50,marginTop:13,justifyContent:'center',alignItems:'center',borderTopRightRadius:22,borderBottomRightRadius:22
      },
      imageinput111:{
        backgroundColor:'white', width:112,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center',borderTopRightRadius:22,borderBottomRightRadius:22

      },






      bed1:{
        backgroundColor:'white',width:70,height:50,marginTop:13,justifyContent:'center',alignItems:'center',borderTopLeftRadius:22,borderBottomLeftRadius:22 
      },
      bed01:{
        backgroundColor:'#154987',width:70,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center',borderTopLeftRadius:22,borderBottomLeftRadius:22  

      },


      bed11:{
        backgroundColor:'white',width:70,height:50,marginTop:13,justifyContent:'center',alignItems:'center' 
      },
      bed011:{
        backgroundColor:'#154987', width:70,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center'

      },

      bed12:{
        backgroundColor:'white',width:70,height:50,marginTop:13,justifyContent:'center',alignItems:'center' 
      },
      bed012:{
        backgroundColor:'#154987', width:70,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center'

      },

      bed13:{
        backgroundColor:'white',width:70,height:50,marginTop:13,justifyContent:'center',alignItems:'center' 
      },
      bed013:{
        backgroundColor:'#154987', width:70,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center'

      },


      bed111:{
        backgroundColor:'white',width:60,height:50,marginTop:13,justifyContent:'center',alignItems:'center',borderTopRightRadius:22,borderBottomRightRadius:22
      },
      bed0111:{
        backgroundColor:'#154987', width:60,height:50,borderRadius:1,marginTop:13,justifyContent:'center',alignItems:'center',borderTopRightRadius:22,borderBottomRightRadius:22

      },

      bedcolor1:{
        fontSize:14,fontWeight:'bold',color:'white'
      },
      bedcolor01:{
        fontSize:14,fontWeight:'bold',color:'black'
      },





      imagecolor01:{
        fontSize:14,fontWeight:'bold',color:'white'
      },
      imagecolor1:{
        fontSize:14,fontWeight:'bold',color:'black'
      },
      containe: {
        marginTop:2,
         borderColor:'lightgray',
         borderWidth:1,
         width:"44%",
    
       
         borderRadius:8,
     
         paddingLeft:5,
         backgroundColor:'#F2F2F2',

       
       },
       containe_1: {
        marginTop:2,
         borderColor:'lightgray',
         borderWidth:1,
         width:"45%",
    
       
         borderRadius:8,
     
         paddingLeft:5,
         backgroundColor:'#F2F2F2',
marginLeft:5
       
       },
       pickk:{
          height: 50,
          width:"100%",
        
         
          color:'gray',
     
       },
       sliderImage: {
        height: 220,
        width: 400,
        alignSelf: 'center',
        borderRadius:10,
      },




               //chatroom==========================================================================================

      HeaderView:{
        backgroundColor:'#ee2b7a',
        height:100,
      borderBottomWidth:0.5,
      borderBottomColor:'lightgray'
       
      },
    
      ImageAvater:{
        width:50,
        height:50,
        borderRadius:25,
      
       
      
       
       
      },
      
    
    inpu: {
        backgroundColor: '#f1f1f1',
     borderWidth:1,
     borderColor:'gray',
     width:280,
     borderRadius:4,
     paddingLeft:22,
     marginLeft:15
    },
    
     
     mess:{
        minWidth: 80,
        maxWidth:'80%',
        minHeight:50,
        maxHeight:'90%',
      backgroundColor:'#E0E0E0',
      borderRadius:10,
    
    //   padding:8,
      marginTop:14,
      marginHorizontal:8,
      alignSelf:'flex-start',
    
      padding:8
      
      
     },
     messL:{
      minWidth: 80,
      maxWidth:'80%',
      minHeight:50,
      maxHeight:'90%',
    backgroundColor:'#ee2b7a',

    
    //   padding:8,
    marginTop:14,
    marginHorizontal:8,
    alignSelf:'flex-end',
    
    padding:8,
    borderRadius:10,    // borderTopRightRadius:8,
    // borderBottomEndRadius:22,
    // borderBottomLeftRadius:22
    
     },
    
    
    
    
      Line:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
       
        marginTop: 20,
        paddingHorizontal: 20
     
    
        
    
      },
      LineView:{
        
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20
        
       
    
      },


               //chatroom==========================================================================================
               input1: {
      
                width:'96%',
                height:50,
                  fontSize: 15,
                
                  color: '#333',
                  borderWidth:1,
                  borderColor:'gray',
                  borderRadius:50,
                  paddingHorizontal:16,
                  marginBottom:10,
                  
             
                },
      
                input4: {
            
                  width:'45%',
                  height:50,
                    fontSize: 15,
                  
                    color: '#333',
                    borderWidth:1,
                    borderColor:'gray',
                    borderRadius:50,
                    paddingHorizontal:16,
                    marginBottom:10,
                    
               
                  },
                input2: {
                
                  width:'96%',
                  height:130,
                    fontSize: 15,
                  
                    color: '#333',
                    borderWidth:1,
                    borderColor:'gray',
                    borderRadius:10,
                    paddingHorizontal:16,
                    marginBottom:8,
                    marginTop:4
               
                  },
                  button:{
                    width:'92%',
                    height:50,
                    backgroundColor:'#154987',
                  borderRadius:62,
                  justifyContent:'center',alignItems:'center',
                  marginTop:24,
              
                  marginLeft:14,
                  marginBottom:22
                   
                  },


               //add_salon==========================================================================================

              

               inputContainer_7: {
                flexDirection:'row',
                alignItems:'center',
                alignSelf:'center',
             marginTop:10
                 },
                 input7_1: {
                  width:'90%',
                  height:55,
                backgroundColor:'#F2F2F2',
            
                  borderRadius:8,
           
                  fontSize:16,
                 paddingHorizontal:20,
                 borderWidth:1,
                 borderColor:'lightgray'
               
                },
                input7_2: {
                  width:'90%',
                  height:125,
                backgroundColor:'#F2F2F2',
            
                  borderRadius:8,
           
                  fontSize:16,
                 paddingHorizontal:20,
                 borderWidth:1,borderColor:'lightgray',
                 alignSelf:'flex-start'
               
                },
                phoneinput2:{
                  width:40,
                  borderRadius:8,
                  backgroundColor:'#F2F2F2',
                  borderWidth:1,
                  paddingHorizontal:20,
               
                  borderColor:'lightgray',
                  height:55,
                  flexDirection:'row',
                  justifyContent:'center',
                  alignItems:'center',
                  flex:1,
                  justifyContent:'space-between'
                },
                phoneinput: {
                  fontSize: 16,
                  width:'70%',
                  borderRadius:8,
                  backgroundColor:'#F2F2F2',
                  borderWidth:1,
                  paddingHorizontal:30,
                  height:55,
                
                  borderColor:'lightgray',
                  marginVertical:8,
                  marginLeft:6
                  
                },
              
              
                check_line_1:{
                  borderBottomWidth:1.5,borderColor:'white',marginTop:8,width:100
                },
                check_line:{
                  borderBottomWidth:1.5,borderColor:'#ee2b7a',marginTop:8,width:100
                },
                check_line_2:{
                  borderBottomWidth:1.5,borderColor:'white',marginTop:8,width:40
                },
                check_line2:{
                  borderBottomWidth:1.5,borderColor:'#ee2b7a',marginTop:8,width:40
                }


})


export default styles; 