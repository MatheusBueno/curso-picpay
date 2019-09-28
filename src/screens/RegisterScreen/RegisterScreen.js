import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';

import Input from '../../components/Input/Input';
import theme from '../../styles/theme';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import AuthService from '../../services/authentication.service';
import UserClass from '../../classes/user.class';
import UserService from '../../services/user.service';

export function RegisterNavigation() {
  return {
    title: 'Criar conta',
    headerStyle: {
      backgroundColor: theme.lightGray,
      elevation: 1
    },
    headerTintColor: theme.primaryColor,
    headerTitleStyle: { color: theme.dark }
  };
}

export default function RegisterScreen({ navigation }) {
  const [name, setname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registerUser = async () => {
    try {
      const { user } = await AuthService.registerUser(email, password);
      const newUser = new UserClass(email, name, name, '');

      await UserService.createUserInUsersList(user.uid, newUser);

      navigation.navigate('HomeScreen');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior="padding" enabled>
        <Input
          value={name}
          changeText={setname}
          label="Nome"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Input
          autoCapitalize="none"
          value={email}
          changeText={setEmail}
          label="Email"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <Input
          autoCapitalize="none"
          secureTextEntry
          value={password}
          changeText={setPassword}
          label="Senha"
          isPrimary
          focusedColor={theme.primaryColor}
          unfocusedColor={theme.darktGray}
        />
        <PrimaryButton
          onPress={registerUser}
          label="Criar conta"
          backgroundColor={theme.primaryColor}
        />
      </KeyboardAvoidingView>
    </View>
  );
}
