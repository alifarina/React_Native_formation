import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import Button from './src/Button/Button';
import { IProducts } from './src/Interfaces/IProducts';
import ProductViewer from './src/ProductViewer/ProductViewer';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [tColor, setTextColor] = useState("red")
  const [products, setProducts] = useState<Array<IProducts>>([]);
  useEffect(() => {
    console.log('updated:', counter);
    const p=fetch(
      `${process.env.EXPO_PUBLIC_API_URL
      }:${process.env.EXPO_PUBLIC_API_PORT
      }${process.env.EXPO_PUBLIC_API_ENDPOINT_PRODUCTS
      }`,
    ).then((r) => r.json())
    p.then((a) => {
        setProducts(a)
      });
  }, [])
  return (
    <View style={styles.container}>
     { products.length>0&&<ProductViewer product={products[0]}/>}
      {/*<Text>{JSON.stringify(products)}</Text>*/}
      {/* <Text style={[styles.text, { color: tColor }]}>value of counter {counter}</Text>
      <Button bgColor="red" color="white" onButtonPressed={() => {
        setCounter(counter - 1);
        setTextColor('red')
        console.log("button pressed", counter)
      }}>reduce -1</Button>
      <Button bgColor="blue" color="white" onButtonPressed={() => {
        setCounter(counter + 1);
        setTextColor("blue")
        console.log("button pressed", counter)
      }}>add +1</Button>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  }
});
