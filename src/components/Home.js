import {View, Text, StyleSheet,Button} from 'react-native';
import React from 'react';
import Products from './Products';
import Banner from './Banner';
import TopProducts from './TopProducts';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Banner />
      </View>
      <View style={styles.title}>
        <Text>Diabetic Diet</Text>
      </View>
      <View style={styles.topProduct}>
        
        <TopProducts />
      </View>
      <View style={styles.title_a}>
       <Text>All Products</Text>
      </View>
      <View style={styles.all_product}>
        <Products/>
      </View>

      {/* <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detail')}/> */}
    </View>
 

  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  title: {
    width: 94,
    height: 25,
    left: 24,
    top: 60,
  },
  title_a: {
    width: 94,
    height: 25,
    top: 30,
  },
  all_product:{
    top: 10,
  }

});

export default Home;