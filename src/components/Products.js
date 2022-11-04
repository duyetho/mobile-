import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: '1',
        title: 'Second Item',
        img: require('../assets/img/image133.png'),
    },
    {
        id: '2',
        title: 'Third Item',
        img: require('../assets/img/image134.png'),

    },
    {
        id: '3',
        title: 'First Item',
        img: require('../assets/img/image135.png'),

    },
    {
        id: '4',
        title: 'Second Item',
        img: require('../assets/img/image20.png'),

    },
    {
        id: '5',
        title: 'Third Item',
        img: require('../assets/img/image21.png'),

    }, ,    
    {
        id: '6',
        title: 'Third Item',
        img: require('../assets/img/image22.png'),

    }, ,
    {
        id: '7',
        title: 'Third Item',
        img: require('../assets/img/image23.png'),

    },
];

const Products = () => {
  const navigation = useNavigation()
  const windowWidth = Dimensions.get('window').width;
  const renderItem = ({item}) => (
      <TouchableOpacity 
      onPress={()=> navigation.navigate('Detail')}
          style={[
              styles.item,{
                  width: (windowWidth - 66) / 2,
              },
          ]}
          >
          <Image
              style={styles.picture}
              source={item.img}
          />
          <Text>{item.title}</Text>
      </TouchableOpacity>
  );

  return (
      <View style={styles.container}>
          <FlatList
              showsVerticalScrollIndicator ={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              data={DATA}
              numColumns={2}
              renderItem={renderItem}
              keyExtractor={item => item.id}
          />
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
      marginTop: 20,
  },
  item: {
      Width: 157,
      height:250,
      backgroundColor:'#BBBBB',
      marginVertical:20,
       
  },
  picture: {
      top: 10,
      width: 116,
      height: 119,
  },
});
export default Products;