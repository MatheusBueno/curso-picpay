import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Camera } from 'expo-camera';

export default function MyCodeScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    getPermissionsAsync();
  });

  const getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  return (
    <Camera style={styles.container}>
      <View style={styles.code}>
        <QRCode
          size={200}
          value="currentUserData"
          logo={require('../../../assets/users/eduardo.png')}
          logoSize={60}
          logoBorderRadius={30}
        />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  code: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8
  }
});
