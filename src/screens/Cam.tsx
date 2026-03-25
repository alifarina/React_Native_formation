import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import BarcodeScanner from '../components/functionnals/BarcodeScanner/BarcodeScanner'

type Props = {}

const Cam = (props: Props) => {
  return (
    <View style={{flex:1}}>
     <BarcodeScanner/>
    </View>
  )
}

export default Cam