import React from 'react';
import styles from './ItemCard.style';
import {Image, SafeAreaView, Text, View} from 'react-native';

const ItemCard = ({goods}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={{uri: goods.imgURL}} />
      <View>
        <Text>{goods.title}</Text>
        <Text>{goods.price}</Text>
        <Text>{!goods.inStock ? 'Stokta Yok' : ''}</Text>
      </View>
    </SafeAreaView>
  );
};

export default ItemCard;
