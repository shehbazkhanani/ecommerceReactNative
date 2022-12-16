import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';

function Home({navigation}) {
  const [Globeldata, setGlobeldata] = useState([]);
  const [searchGlobelData, setSearachGlobelData] = useState([]);
  // console.log(searchGlobelData, 'Dataaaaa');
  const api = () =>
    axios
      .get('https://fakestoreapi.com/products')
      .then(succ => {
        setGlobeldata(succ.data);
      })
      .catch(err => {
        console.log(err);
      });

  useEffect(() => {
    api();
  }, []);

  searchData = val => {
    setSearachGlobelData(
      Globeldata.filter(e => {
        if (e.title.includes(val)) {
          return {
            e,
          };
        }
      }),
    );
  };

  const CardNevigetor = e => {
    navigation.navigate('Card', e);
  };

  const FavroritNavigation = e => {
    navigation.navigate('Favorite', e)
  }

  return (
    <>
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={{width: '100%', marginTop: 20, flexDirection: 'row'}}>
            <TextInput
              placeholder="find any product here..."
              onChangeText={searchData}
              style={styles.search}
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#f96565',
                alignItems: 'center',
                justifyContent: 'center',
                width: '20%',
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <Image
                source={require('../assets/search.png')}
                style={{width: 25, height: 25}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View style={{width: 100, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text
              style={{
                width: 100,
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Products
            </Text>
          </View>
          <View style={{width: 100, height: 1, backgroundColor: 'black'}} />
        </View>
        <ScrollView>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
            {searchGlobelData &&
              searchGlobelData.map((e, i) => {
                return (
                  <TouchableOpacity
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
                    <View style={{marginTop: 10, padding: 10}}>
                      <Text
                        numberOfLines={2}
                        style={{color: 'black', fontSize: 15}}>
                        Title : {e.title}
                      </Text>
                    </View>
                    <View style={{marginTop: 10, padding: 10}}>
                      <Text
                        numberOfLines={2}
                        style={{color: 'black', fontSize: 17}}>
                        Price : ${e.price}
                      </Text>
                    </View>
                    <View style={{padding: 10}}>
                      <Text numberOfLines={2} style={{color: 'red'}}>
                        Rating : {e.rating.rate}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}>
            {Globeldata &&
              Globeldata.map((e, i) => {
                return (
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
                          <Icon name="hearto" size={20} color="red" style={{marginTop : 10, marginRight : 10}} /> 
                          </TouchableOpacity>
                        </View>
                        <View style={{}}>
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
                );
              })}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f4f4',
    alignItems: 'center',
  },
  search: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    width: '70%',
    fontSize: 18,
    paddingLeft: 20,
    padding: 15,
  },
});

export default Home;
