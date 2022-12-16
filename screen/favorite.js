import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


function Favorite({navigation, route}) {
  const data = [route.params]
  console.log(data);

  const CardNevigetor = e => {
    navigation.navigate('Card', e)
  }

  return (
    <>
    {data ? data.map((e, i) => {
  return (
    <View style={{flexDirection : 'row', justifyContent : 'space-between', marginLeft : 10}}>
    <TouchableOpacity
      onPress={() => CardNevigetor(e)}
      style={{
        backgroundColor: 'white',
        width: '43%',
        marginTop: 20,
        borderRadius: 10,
      }}
      key={i}>
      <View
        style={{
          width: '100%',
        }}>
        <Image
          style={{
            width: '100%',
            height: 100,
            resizeMode: 'contain',
          }}
          source={{uri: e.image}}
          resizeMode="contain"
        />
      </View>
      <View style={{alignItems: 'center', width: '100%'}}>
        <View
          style={{
            backgroundColor: '#f9f4f4',
            width: '90%',
            borderRadius: 10,
            margin: 10,
          }}>
          <View style={{  flexDirection : 'row',
            justifyContent : 'space-between'}}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Title :
              
            </Text>
            <TouchableOpacity onPress={() => FavroritNavigation(e)}>
            <Icon name="heart" size={20} color="red" style={{marginTop : 10, marginRight : 10}} /> 
            </TouchableOpacity>
          </View>
          <View>
            <Text numberOfLines={1} style={{fontSize: 13}}>
              {e.title}
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: 'bold',
              }}>
              Description :
            </Text>
          </View>
          <View>
            <Text numberOfLines={2} style={{fontSize: 13}}>
              {e.description}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
              paddingRight: 10,
              marginTop: 20,
            }}>
            <Text
              numberOfLines={2}
              style={{fontSize: 15, fontWeight: 'bold'}}>
              ${e.price}
            </Text>
            <Text numberOfLines={2} style={{color: 'red'}}>
              {e.rating.rate}
            </Text>
          
          </View>
        </View>
      </View>
    </TouchableOpacity> 
    </View>)
    }) :
    <View style={{width : '100%', height : '100%', alignItems : 'center', justifyContent : 'center', backgroundColor : '#f9f4f4'}}>
      <Icon name="isv" size={100} color="black" />
      <Text style={{fontSize : 20}}> No Favorite Item Added! </Text>
      </View> }
      
    </>
  );
}

export default Favorite;
