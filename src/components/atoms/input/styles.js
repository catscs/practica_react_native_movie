import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  inputBorder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  input: {
    color: '#000',
    fontSize: 16,
  },
  inputError: {
    textAlign: 'right',
    fontSize: 12,
    color: 'red',
    marginTop: 6,
    textTransform: 'lowercase',
  },
});
