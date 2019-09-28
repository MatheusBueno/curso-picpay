import React from 'react';
import { View, Modal, StyleSheet, ActivityIndicator, Text } from 'react-native';

import theme from '../../styles/theme';

export default function LoadingModal({ isVisible }) {
  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color={theme.primaryColor} />
          <Text style={styles.text}>Aguarde...</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(51, 51, 51, 0.4)'
  },
  modal: {
    backgroundColor: '#fff',
    height: 100,
    width: '90%',
    paddingLeft: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    elevation: 1,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.1
  },
  text: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: '300',
    color: theme.dark
  }
});
