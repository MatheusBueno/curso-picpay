import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ripple from 'react-native-material-ripple';

import styles from './styles';
import Logo from '../../../assets/logo.svg';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo fill='#fff' width={200} height={55} />
      <Text style={styles.description}>
        Envie e receba dinheiro pelo smartphone
      </Text>
      <Ripple
        rippleContainerBorderRadius={50}
        style={styles.button}
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        <Text style={styles.textButton}>Criar minha conta no PicPay!</Text>
      </Ripple>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.registerText}>Já sou cadastrado</Text>
      </TouchableOpacity>
    </View>
  );
}
