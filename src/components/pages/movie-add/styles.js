import {StyleSheet, Dimensions} from 'react-native';
const WidthScreen = Dimensions.get('window').width;

export default StyleSheet.create({
  viewImage: {
    alignItems: 'center',
    height: 200,
    marginBottom: 20,
  },
  image: {
    width: WidthScreen,
    height: 200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  imageButton: {
    flex: 1,
    justifyContent: 'center',
  },
  contentText: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  imageButtonLabel: {
    color: '#000',
    fontSize: 16,
  },
  input: {
    marginBottom: 20,
    marginHorizontal: 20,
  },
  textArea: {
    height: 150,
  },
  error: {
    textAlign: 'right',
    fontSize: 12,
    color: 'red',
    marginTop: 6,
    marginEnd: 20,
    textTransform: 'lowercase',
  },
});
