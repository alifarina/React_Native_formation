import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { IProduct } from "./src/interfaces/IProducts";
import ProductsListViewer from "./src/components/ui/ProductsListViewer/ProductsListViewer.connected";
import Banner from "./src/components/ui/Banner/Banner";
import {store} from './src/store/store'
import { Provider } from "react-redux";
import ProductsSearcher from "./src/components/functionnals/ProductsSearcher/ProductsSearcher.connected";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/navigation";
export default function App() {
  return (
    <Provider store={store}>
     <NavigationContainer>
      <Navigation/>
     </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});