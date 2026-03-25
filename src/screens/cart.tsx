import { View, Text } from 'react-native'
import React from 'react'
import CartConnected from '../components/ui/Cart/Cart.connected'

type Props = {}

const Cart = (props: Props) => {
  return (
    <View>
      <CartConnected/>
    </View>
  )
}

export default Cart