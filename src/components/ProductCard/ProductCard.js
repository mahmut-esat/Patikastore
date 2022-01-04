import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from './ProductCard.style';

const ProductsCard = ({ products }) => {
  return (
    <View style={styles.container}>
      
      
      <Image style={styles.image} source={{ uri: products.imgURL }} />

      <View style={styles.inner_container}>
        <Text style={styles.title}>{products.title}</Text>
        <Text style={styles.price}>{products.price}</Text>

        {products.inStock == false ? (
          <Text style={styles.stock}>STOKTA YOK</Text>
        ) : null}
      </View>
    </View>
  );
};

export default ProductsCard;
