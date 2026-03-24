import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView ,TextInput} from 'react-native';
import React, { useEffect, useState } from 'react'
import Button from './src/components/Button/Button';
import { IProducts } from './src/Interfaces/IProducts';
import ProductViewer from './src/components/ProductViewer/ProductViewer';
import ProductsListViewer from './src/components/ui/ProductListViewer/ProductListViewer';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [tColor, setTextColor] = useState("red")
  const [products, setProducts] = useState<Array<IProducts>>([]);
  const [search, setSearch] = useState('coca')
  useEffect(() => {
    console.log('updated:', counter);
    const p = fetch(
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
     <View style={{ flex: 1,paddingTop:30 }}>
      <TextInput
        style={styles.fieldFind}
        placeholder="Recherche"
        placeholderTextColor={"grey"}
        value={search}
        onChangeText={(str)=>{
          setSearch(str)
        }}
      />
      <ScrollView>
        <ProductsListViewer products={products.filter((product)=>product.titre.toLowerCase().includes(search.toLowerCase()))} />
      </ScrollView>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 20,
    marginBottom: 10
  },
  fieldFind: {
    height: 40,
    fontSize: 28,
    borderWidth: 1,
    borderColor: "black",
  },
});
