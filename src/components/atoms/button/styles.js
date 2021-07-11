import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const loadingColor = '#fff';
export default StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
  },
  buttonView: {
    width: width * 0.9,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 30,
    minHeight: 40,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
});
