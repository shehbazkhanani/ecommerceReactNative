import { Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';


function Cart ({navigation, route}) {
    console.log(route, 'cart data');
    return (
        <>
        <View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{marginLeft: 10}}>
            <Icon name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text> Cart </Text>
        </View>
        </>
    )
}

export default Cart