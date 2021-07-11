import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    width: windowWidth / 2,
    height: undefined,
    aspectRatio: 2 / 3,
    alignItems: 'center',
  },
  image: {
    width: '85%',
    height: 270,
    borderRadius: 20,
  },
});
