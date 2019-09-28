import React, { useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Alert
} from 'react-native';
import theme from '../../styles/theme';
import Input from '../../components/Input/Input';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { container } from '../../styles/styles';

export function LoginNavigation() {
  return {
    title: 'Login',
    headerStyle: {
      backgroundColor: theme.primaryColor,
      shadowOpacity: 0,
      borderBottomWidth: 0,
      elevation: 0
    },
    headerTintColor: '#fff'
  };
}

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(email, password) {
    navigation.navigate('HomeScreen');
  }

  return (
    <View style={container}>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center', width: '100%' }}
        behavior='padding'
        enabled
      >
        <Input
          autoFocus
          autoCapitalize='none'
          value={email}
          changeText={setEmail}
          label='Email'
          focusedColor={theme.secondaryColor}
          unfocusedColor={theme.dark}
        />
        <Input
          autoCapitalize='none'
          secureTextEntry
          value={password}
          changeText={setPassword}
          label='Senha'
          focusedColor={theme.secondaryColor}
          unfocusedColor={theme.dark}
        />
        <PrimaryButton
          label='Entrar'
          onPress={() => handleSubmit(email, password)}
        />
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text
            style={{
              color: theme.secondaryColor,
              fontWeight: '600',
              textAlign: 'center',
              marginVertical: 25
            }}
          >
            Já sou cadastrado
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
