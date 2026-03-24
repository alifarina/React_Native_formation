import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IProducts } from "../Interfaces/IProducts";

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
                <View style={styles.colRight}></View>
            </View>
        </View>
    );
};

export default ProductViewer;

const styles = StyleSheet.create({
    ProductViewer: { borderColor: 'grey', borderWidth: 1, borderStyle: 'solid', padding: 5 },
    titre: { textAlign: 'center', fontSize: 15, fontWeight: 900, textDecorationLine: 'underline' },
    colsFlex: {},
    colLeft: {},
    colRight: {},
    descriptionLabel: {},
    stock: {},
    description: {},
    prix: {}
});