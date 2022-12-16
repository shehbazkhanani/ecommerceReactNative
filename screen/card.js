import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';

function Card({navigation, route}) {
  const ProductData = route.params;
  // console.log(ProductData);

  const checkUser = () => {
    if (auth) {
      navigation.navigate('Cart', ProductData);
    } else {
      navigation.navigate('login');
    }
  };

  return (
    <>
      <ScrollView
        style={{backgroundColor: 'white', width: '100%', height: '100%'}}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginLeft: 10}}>
            <Icon name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', margin: 20}}>
          <Image
            source={{uri: ProductData.image}}
            style={{height: 300, width: 300, resizeMode: 'contain'}}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#f9f4f4',
              width: '100%',
              borderRadius: 30,
              height: '100%',
            }}>
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 25,
                  }}>
                  Title :
                </Text>
              </View>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, width: '90%', marginLeft: 15}}>
                {ProductData.title}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 25,
                }}>
                Price :
              </Text>
              <Text style={{fontSize: 20, marginLeft: 5, width: '90%'}}>
                ${ProductData.price}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 25,
                }}>
                Category :
              </Text>
              <Text style={{fontSize: 20, marginLeft: 5, width: '90%'}}>
                {ProductData.category}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}></View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginLeft: 25,
                  marginTop: 10,
                }}>
                Decription :
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20, marginLeft: 15, width: '90%'}}>
                {ProductData.description}
              </Text>
            </View>
            <View style={{marginTop: 10, width: '90%', flexDirection: 'row'}}>
              <Text
                style={{
                  // color: 'red',
                  fontSize: 18,
                  marginLeft: 25,
                  fontWeight: 'bold',
                }}>
                Rating :
              </Text>
              <Text style={{color: 'red', fontSize: 18}}>
                {ProductData.rating.rate}
              </Text>
            </View>
            <View style={[styles.center, {marginTop: 20, marginBottom: 20}]}>
              <TouchableOpacity style={styles.buttonStyle} onPress={checkUser}>
                <Text style={styles.button}> Add Cart </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
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
});

export default Card;
