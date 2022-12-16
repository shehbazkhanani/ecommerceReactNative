// import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import home from "../screen/home";
import purchase from "../screen/purchase";
import Icon from 'react-native-vector-icons/AntDesign';
import Favorite from '../screen/favorite';
import Setting from '../screen/setting';



const Tab = createBottomTabNavigator(
//   {  
//   home:{  
//     screen:home,  
//     navigationOptions:{  
//       tabBarLabel:'home',  
//       tabBarIcon:<Icon name="home" co lor='black' size={25}/>   
//     }  
//   },  
//   profile: {  
//     screen:purchase,  
//     navigationOptions:{  
//       tabBarLabel:'purchase',  
//       tabBarIcon: <Icon name="shoppingcart" color='black' size={25}/>  
//     }  
//   },  
// },  
// {  
//   initialRouteName: "Home"  
// },  
); 

function TabNavigation () {
    return ( 
        <>
        {/* <NavigationContainer> */}
      <Tab.Navigator
       screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: () => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
              ? 'home'
              : 'home';
          } else if (route.name === 'Purchase') {
            iconName = 'shoppingcart' ? 'shoppingcart' : 'shoppingcart';
          } else if(route.name === 'Favorite') {
            iconName = 'hearto' ? 'hearto' : 'hearto';
          } else if(route.name === 'Setting') {
            iconName = 'setting' ? 'setting' : 'setting';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={25} color='black' />;  
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })} 
      >
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Purchase" component={purchase} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Setting" component={Setting} />
      </Tab.Navigator>
    {/* </NavigationContainer> */}
        </>
    )
}

export default TabNavigation