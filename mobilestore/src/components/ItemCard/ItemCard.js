import React from 'react';
import styles from './ItemCard.style';
import {Image, SafeAreaView, Text, View} from 'react-native';

const ItemCard = ({goods}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.img_tag}>
          <Image source={{uri: goods.imgURL}} style={styles.image} />
        </View>
        <View style={styles.second_container}>
          <Text style={styles.title}>{goods.title}</Text>
          <Text>{goods.price}</Text>
          <Text style={styles.instock}>
            {!goods.inStock ? 'Stokta Yok' : ''}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemCard;
