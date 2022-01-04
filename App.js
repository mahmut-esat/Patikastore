import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import products_data from './src/products_data.json';
import ProductsCard from './src/components/ProductCard';

function App() {
  const renderProducts = ({ item }) => <ProductsCard products={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PATİKA STORE</Text>
      <TextInput style={styles.searchBar} placeholder="Ara..." />

      <FlatList
        data={products_data}
        renderItem={renderProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 30,
    },
  
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'purple',
  },

  searchBar: {
    marginTop: 10,
    backgroundColor: '#eceff1',
    padding: 8,
    margin: 5,
    borderRadius: 7,
  },
});
