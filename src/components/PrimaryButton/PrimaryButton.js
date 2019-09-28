import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';
import theme from '../../styles/theme';

export default function PrimaryButton({ label, onPress, backgroundColor }) {
  return (
    <Ripple
      onPress={onPress}
      rippleContainerBorderRadius={50}
      rippleColor={backgroundColor ? theme.secondaryColor : theme.primaryColor}
      style={styles({ backgroundColor }).button}
    >
      <Text
        style={{ color: backgroundColor ? theme.secondaryColor : '#0E0E0E', textAlign: 'center' }}
      >
        {label}
      </Text>
    </Ripple>
  );
}

const styles = ({ backgroundColor }) =>
  StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 20,
      backgroundColor: backgroundColor ? backgroundColor : theme.secondaryColor,
      paddingVertical: 15,
      borderRadius: 50,
      // ios border shadow
      shadowColor: '#333',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.16,
      shadowRadius: 6,
      // android border shadow
      elevation: 2
    }
  });
