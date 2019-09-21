import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import QrcodeIcon from '../../../assets/qrcode.svg';
import AddUser from '../../../assets/Adicionar_amigo.svg';
import theme from '../../styles/theme';

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <QrcodeIcon fill={theme.primaryColor} height={27} />
      <View>
        <Text style={styles.centerAlign}>Meu saldo</Text>
        <Text style={styles.centerAlign}>100,00</Text>
      </View>
      <AddUser fill={theme.primaryColor} height={23} />
    </View>
  );
}
