import React, { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View,Image} from 'react-native';
import auth from '@react-native-firebase/auth';

function Login({navigation}) {

  
  const [loginData, setLoginData] = useState({
    email : '',
    password : '',
  })

  // console.log(loginData);
  
  const LoginUser = () => {
    auth().signInWithEmailAndPassword(loginData.email, loginData.password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      if(user) {
        navigation.navigate('HomeScreens')
      }
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Hello Again!</Text>
        </View>
        <View>
          <Text style={styles.decription}>Wellcome back You've</Text>
        </View>
        <View>
          <Text style={styles.decription}>been missed!</Text>
        </View>
        <View style={[styles.center, {marginTop: 50}]}>
            <TextInput placeholder='Enter Email or Username' style={styles.input} onChangeText={txt => setLoginData({...loginData, email : txt})} />
        </View>
        <View style={[styles.center, {marginTop: 20}]}>
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} onChangeText={txt => setLoginData({...loginData, password : txt})} />
        </View>
        <View style={[styles.center, {marginTop: 10}]}>
          <TouchableOpacity>
            <Text> Recovery Password? </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.center, {marginTop: 20}]}>
          <TouchableOpacity style={styles.buttonStyle} onPress={LoginUser}>
            <Text style={styles.button}> Log in </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop : 20}}>
  <View style={{width : 30, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 100, textAlign: 'center'}}>Or continue with us</Text>
  </View>
  <View style={{width : 30, height: 1, backgroundColor: 'black'}} />
</View>
<View style={{flexDirection :'row', marginTop : 20}}>
<View>
<TouchableOpacity style={{borderColor : 'white',
        borderWidth : 1,
        padding : 10,
        margin : 20}}>
    <Image source={require("../assets/googleone.png")} style={{width : 40, height : 40}}/>
</TouchableOpacity> 
</View>
<View>
<TouchableOpacity style={{ borderColor : 'white',
        borderWidth : 1,
        padding : 10,
        margin : 20}}>
    <Image source={require("../assets/facebook.webp")} style={{width : 38, height : 38}}/>
</TouchableOpacity> 
</View>
<View>
<TouchableOpacity style={styles.imgButton}>
    <Image source={require("../assets/twitter.png")} style={{width : 52, height : 52}}/>
</TouchableOpacity> 
</View>
</View>
<View style={[styles.center, {marginTop : 20}]}>
    <View style={{flexDirection : 'row'}}>
    <Text> Not a member? </Text>
    <TouchableOpacity onPress={() => navigation.push('Signup')}>
            <Text style={{color : '#0866e8'}}> Register Now </Text>
          </TouchableOpacity>
    </View>
</View>
      </View>
    </>
  );
}

export default Login;


const styles = StyleSheet.create({
      container: {
        backgroundColor: '#f9f4f4',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
      },
      title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
      },
      decription: {
        fontSize: 20,
      },
      input : {
        height : 60,
        backgroundColor : 'white',
        width : '80%',
        borderRadius : 10,
        padding : 20,
        fontSize : 16
      },
      center : {
        alignItems : 'center',
        width : '100%'
      },
      button : {
      color : 'white',
      fontSize : 20,
      fontWeight : 'bold',
      },
      buttonStyle : {
        height : 60,
        width : '80%',
        backgroundColor : '#f96565',
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center'
      },
      imgButton : {
        borderColor : 'white',
        borderWidth : 1,
        padding : 5,
        margin : 20
      }
  });
