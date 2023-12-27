import React from 'react';
import {
  FlatList,
  SafeAreaView,
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
      <View style={styles.flat_container}>
        <FlatList
          data={item_data}
          renderItem={renderGoods}
          style={styles.flat_list}
          keyExtractor={keyCall}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
  },
  search_container: {
    height: 50,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#ECEFF1',
    fontSize: 15,
    fontWeight: 'bold',
  },
  flat_container: {},

  flat_list: {},
});

export default App;
