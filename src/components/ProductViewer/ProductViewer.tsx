import { StyleSheet, Text, View,Image } from "react-native";
import React from "react";
import { IProducts } from "../../Interfaces/IProducts";

interface IProductViewerProps {
    product: IProducts;
}

const ProductViewer = ({ product }: IProductViewerProps) => {
    return (
        <View style={styles.ProductViewer}>
            <Text style={styles.titre}>{product.title}</Text>
            <View style={styles.colsFlex}>
                <View style={styles.colLeft}>
                    <Text style={styles.stock}>stock: {product.stock}</Text>
                    <Text style={styles.descriptionLabel}>Description : {product.description}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.prix}>Prix: {product.prix}</Text>
                </View>
                <View style={styles.colRight}>
                    <Image style={styles.image} source={{ uri: product.imageUrl }}/>
                </View>
            </View>
        </View>
    );
};

export default ProductViewer;

const styles = StyleSheet.create({
     ProductViewer: {
    borderColor: "grey",
    borderWidth: 1,
    borderStyle: "solid",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
   titre: {
    textAlign: "center",
    fontSize: 20,
    textDecorationLine: "underline",
  },
    colsFlex: {
    flexDirection: "row",
    gap: 5,
  },
  colLeft: {},
  colRight: {
    justifyContent: "center",
    gap:10
  },
  stock: {},
  descriptionLabel: {},
  description: {},
  prix: {},
  bold: { fontWeight: 900 },
  image:{
    width:100,
    height:100
  }
});