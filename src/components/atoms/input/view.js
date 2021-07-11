import React from 'react';
import {TextInput, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  keyboardType,
  error,
  style,
  multiline,
  numberOfLines,
  styleInput,
}) => {
  return (
    <View style={style}>
      {label ? <Text style={styles.inputLabel}>{label}</Text> : null}
      <View style={styles.inputBorder}>
        <TextInput
          style={[styles.input, styleInput]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
      </View>
      {error ? <Text style={styles.inputError}>{error}</Text> : null}
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  style: PropTypes.any,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.any,
  styleInput: PropTypes.any,
};

Input.defaultProps = {
  keyboardType: 'default',
  value: '',
  placeholder: '',
  onChangeText: () => {},
  style: {},
  multiline: false,
  numberOfLines: 1,
  styleInput: {},
};

export default Input;
