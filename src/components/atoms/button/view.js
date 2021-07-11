import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = ({loading, label, onPress}) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity style={styles.buttonView} onPress={onPress}>
        {loading ? (
          <ActivityIndicator color={styles.loadingColor} />
        ) : (
          <Text style={styles.text}>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  loading: false,
  onPress: () => {},
};

export default Button;
