import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function ScannCodeScreen({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    getPermissionsAsync();
  });

  const getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission(status === 'granted');
  };

  const handleBarCodeScanned = ({ data }) => {
    console.log(data);
    navigation.navigate('NewTransaction');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}>
      <BarCodeScanner
        onBarCodeScanned={handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  );
}
