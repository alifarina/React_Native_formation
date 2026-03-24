import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { IProducts } from "../../../Interfaces/IProducts";
import ProductsListViewer from "../../ui/ProductListViewer/ProductListViewer";
import { styles } from "./ProductSearcher.styles";

interface IProductsSearcherProps {
  products: Array<IProducts>;
}

const ProductsSearcher = ({ products }: IProductsSearcherProps) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <TextInput
        style={styles.fieldFind}
        placeholder="Recherche"
        placeholderTextColor={"grey"}
        value={search}
        onChangeText={(str) => {
          setSearch(str);
        }}
      />
      <ScrollView>
        <ProductsListViewer
          products={products.filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()),
          )}
        />
      </ScrollView>
    </>
  );
};

export default ProductsSearcher;