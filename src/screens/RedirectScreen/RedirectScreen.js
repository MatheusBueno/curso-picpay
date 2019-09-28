import React, { useEffect } from 'react';
import { View } from 'react-native';

import AuthService from '../../services/authentication.service';

export default function RedirectScreen({ navigation }) {
  useEffect(() => {
    verifyUserAuthenticated();
  }, []);

  const verifyUserAuthenticated = async () => {
    try {
      const user = await AuthService.getCurrentUser();

      if (user) {
        navigation.navigate('homeStack');
      } else {
        navigation.navigate('startStack');
      }
    } catch (error) {
      console.log(error);
      navigation.navigate('startStack');
    }
  };

  return <View />;
}
