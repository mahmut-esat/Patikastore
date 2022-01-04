import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ebeb',
    margin: 4,
    borderRadius: 5,
    alignItems: 'center',
  },

  image: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
    resizeMode: 'contain',
    backgroundColor: 'white',
    padding: 5,
    margin: 5,
  },
  
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  
  price: {
    color: 'grey',
    fontWeight: 'bold',
  },

  inner_container: {
    padding: 10,
    paddingBottom: 5,
  },

  stock: {
    fontWeight: 'bold',
    color: 'red',
    marginTop: 5,
  },
});
