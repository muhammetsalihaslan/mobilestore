import React from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import item_data from './data/item_data.json';
import ItemCard from './components/ItemCard/ItemCard';

function App() {
  const renderGoods = ({item}) => <ItemCard goods={item} />;
  const keyCall = item => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Search..." style={styles.search_container} />
      <ScrollView style={styles.flat_container}>
        <FlatList
          data={item_data}
          renderItem={renderGoods}
          style={styles.flat_list}
          keyExtractor={keyCall}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: 'white',
    color: 'black',
  },
  search_container: {
    height: 50,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ECEFF1',
    fontSize: 15,
    fontWeight: 'bold',
  },
  flat_container: {
    marginHorizontal: 20,
  },

  flat_list: {},
});

export default App;
