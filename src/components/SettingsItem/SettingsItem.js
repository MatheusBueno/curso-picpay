import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function SettingsItem({ item }) {
  return (
    <View style={styles.settingsBox}>
      <Text style={styles.title}>{item.title}</Text>
      {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  settingsBox: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width: '100%',
    padding: 10,
    paddingLeft: 15
  },
  title: {
    color: '#555555'
  },
  subtitle: {
    color: '#AAAAAA',
    fontSize: 13
  }
});
