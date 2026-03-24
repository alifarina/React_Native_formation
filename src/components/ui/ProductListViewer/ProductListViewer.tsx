import { View, Text } from "react-native";
import React from "react";
import { IProducts } from "../../../Interfaces/IProducts";
import { styles } from "./ProductListViewer.styles";
import ProductViewer from "../../ProductViewer/ProductViewer";

interface IProductsListViewerProps {
  products: Array<IProducts>;
}

const ProductsListViewer = ({ products }: IProductsListViewerProps) => {
  return (
    <View style={styles.container}>
      {products.map((element) => {
        return <ProductViewer key={element.id} product={element} />;
      })}
    </View>
  );
};

export default ProductsListViewer;