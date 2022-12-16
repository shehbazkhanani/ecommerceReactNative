import {Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


function Purchase() {
  return (
    <>
      <View style={{width : '100%', height : '100%', alignItems : 'center', justifyContent : 'center', backgroundColor : '#f9f4f4'}}>
      <Icon name="isv" size={100} color="black" />
      <Text style={{fontSize : 20}}> No Purchase Item Added! </Text>
      </View>
    </>
  );
}

export default Purchase;
