import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Card from '../screen/card';
import Cart from '../screen/cart';
import Favorite from '../screen/favorite';
import Home from '../screen/home';
import Login from '../screen/login';
import Purchase from '../screen/purchase';
import Signup from '../screen/singup';
import TabNavigation from './tabnivigation';
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    // <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} >
      <Stack.Screen name="HomeScreens" component={TabNavigation} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Cart" component={Cart} />
        {/* <Stack.Screen name="Purchase" component={Purchase} /> */}
        <Stack.Screen name="Favorite" component={Favorite} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Navigation;
