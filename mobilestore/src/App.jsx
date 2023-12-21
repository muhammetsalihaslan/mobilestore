import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Search..." style={styles.search_container} />
      <View>
        <FlatList />
      </View>
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
});

export default App;
