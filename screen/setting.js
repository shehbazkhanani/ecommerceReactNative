import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {create} from 'react-test-renderer';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

function Setting({navigation}) {

    // const data = auth
    // const checkUser = () => {
    // if(data)
    // }.then((succ) => {
    //     console.log(succ);
    // })
// }
//     console.log(data, 'auth data');
//   const dbRef = database().ref();
//   dbRef
//     .child('users')
//     .child()
//     .get()
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         console.log(snapshot.val());
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
  const UserLoginCheck = () => {
   auth().signOut().then(() => {
    // Sign-out successful.
    navigation.navigate('login')
  }).catch((error) => {
    // An error happened.
  });
}

  return (
    <>
      <View style={{backgroundColor: '#f9f4f4'}}>
        <View style={[styles.center, {backgroundColor: 'white', height: 200}]}>
          <View style={styles.image}></View>
          <View>
            <Text> </Text>
          </View>
        </View>
        <View>
            <TouchableOpacity style={{backgroundColor : 'white'}} onPress={UserLoginCheck}>
                <Text style={{color : 'black', fontWeight : 'bold', fontSize : 20}}> Logout </Text>
            </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'red',
    height: 130,
    width: 130,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 100,
  },
  center: {
    alignItems: 'center',
  },
});

export default Setting;
