import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Store from '../screens/Store'
import { IProduct } from '../interfaces/IProducts'
import Cart from '../screens/cart'
import CartIcon from '../components/ui/CartIcon/CartIcon.connected'
import Cam from '../screens/Cam'


export type RootStackParams = {
    home:undefined
    store:undefined
    cart:undefined
    scan:undefined

}

const Stack=createNativeStackNavigator<RootStackParams>()
const Navigation = () => {
  return (
   <Stack.Navigator initialRouteName='scan' >
        <Stack.Screen name='home' component={Home} options={{
            headerShown:false,
        }}/>
        <Stack.Screen name='store' component={Store} options={{
          headerRight:()=><CartIcon/>,
          headerStyle:{
            backgroundColor:'skyblue',
        
          },
          title:'Les produits',
          headerBackTitleStyle:{fontSize:32},
          headerTitleAlign:'center'
        }
        }/>
        <Stack.Screen name='cart' component={Cart}/>
        <Stack.Screen name='scan' component={Cam}/>
       
   </Stack.Navigator>
  )
}

export default Navigation