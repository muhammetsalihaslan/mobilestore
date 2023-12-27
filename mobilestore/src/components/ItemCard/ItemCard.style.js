import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.2,
    marginTop: 5,
    marginStart: 5,
  },
  body: {
    alignItems: 'center',
    marginTop: 5,
  },
  img_tag: {
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 200,

    resizeMode: 'contain',
  },
  second_container: {marginTop: 5},
  title: {
    width: 150,
    color: 'black',
    fontWeight: 'bold',
  },

  instock: {
    color: 'red',
  },
});
