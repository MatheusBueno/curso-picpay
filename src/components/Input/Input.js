import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import FloatingLabel from 'react-native-floating-labels';

import theme from '../../styles/theme';

export default function Input({
  value,
  changeText,
  label,
  secureTextEntry,
  autoCapitalize,
  focusedColor,
  unfocusedColor,
  autoFocus
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FloatingLabel
      autoFocus={autoFocus}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
      labelStyle={styles({ isFocused, focusedColor, unfocusedColor }).labelInput}
      inputStyle={styles({ isFocused, focusedColor, unfocusedColor }).input}
      style={styles({ isFocused, focusedColor, unfocusedColor }).formInput}
      value={value}
      onChangeText={text => changeText(text)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}>
      {label}
    </FloatingLabel>
  );
}

const styles = ({ isFocused, focusedColor, unfocusedColor }) =>
  StyleSheet.create({
    labelInput: {
      color: isFocused ? focusedColor : unfocusedColor,
      fontSize: 14
    },
    formInput: {
      flex: 1,
      maxHeight: 52,
      borderBottomWidth: 1,
      borderColor: isFocused ? focusedColor : unfocusedColor
    },
    input: {
      color: isFocused ? focusedColor : unfocusedColor,
      borderWidth: 0
    }
  });
