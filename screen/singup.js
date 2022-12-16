import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

function Signup({navigation}) {

  // var database = firebase.database();
  const [signUpData, setSignUpData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // console.log(signUpData, 'useState data');

  const SignUpUser = () => {
    auth()
      .createUserWithEmailAndPassword(
        signUpData.email,
        signUpData.password,
      )
      .then((succ) => {
        const user = succ.user
        console.log('User account created & signed in!');
        if(user){
          const {username, email} = signUpData
          database().ref('users/' + user.uid).set({
            userName: username,
            Email: email,
          });
          navigation.navigate('login')
        }
        })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Thank You!</Text>
        </View>
        <View>
          <Text style={styles.decription}>for part of us</Text>
        </View>
        <View style={[styles.center, {marginTop: 50}]}>
          <TextInput
            onChangeText={txt => setSignUpData({...signUpData, username: txt})}
            placeholder="Username"
            style={styles.input}
          />
        </View>
        <View style={[styles.center, {marginTop: 20}]}>
          <TextInput
            onChangeText={txt => setSignUpData({...signUpData, email: txt})}
            placeholder="Email"
            style={styles.input}
          />
        </View>
        <View style={[styles.center, {marginTop: 20}]}>
          <TextInput
            onChangeText={txt => setSignUpData({...signUpData, password: txt})}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
        </View>
        <View style={[styles.center, {marginTop: 20}]}>
          <TouchableOpacity style={styles.buttonStyle} onPress={SignUpUser}>
            <Text style={styles.button}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View style={{width: 30, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 100, textAlign: 'center'}}>
              Or continue with us
            </Text>
          </View>
          <View style={{width: 30, height: 1, backgroundColor: 'black'}} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <TouchableOpacity
              style={{
                borderColor: 'white',
                borderWidth: 1,
                padding: 10,
                margin: 20,
              }}>
              <Image
                source={require('../assets/googleone.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderColor: 'white',
                borderWidth: 1,
                padding: 10,
                margin: 20,
              }}>
              <Image
                source={require('../assets/facebook.webp')}
                style={{width: 38, height: 38}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.imgButton}>
              <Image
                source={require('../assets/twitter.png')}
                style={{width: 52, height: 52}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.center, {marginTop: 20}]}>
          <View style={{flexDirection: 'row'}}>
            <Text> already a member? </Text>
            <TouchableOpacity onPress={() => navigation.push('login')}>
              <Text style={{color: '#0866e8'}}> Back to login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

export default Signup;

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
  input: {
    height: 60,
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f96565',
  },
  center: {
    alignItems: 'center',
    width: '100%',
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    height: 60,
    width: '80%',
    backgroundColor: '#f96565',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgButton: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 5,
    margin: 20,
  },
});
