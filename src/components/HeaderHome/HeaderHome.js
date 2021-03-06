import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextMask } from 'react-native-masked-text';

import { styles } from './styles';
import QrcodeIcon from '../../../assets/qrcode.svg';
import AddUser from '../../../assets/Adicionar_amigo.svg';
import theme from '../../styles/theme';

export default function HeaderHome({ userCurrentBalance, sentToQrCode }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={sentToQrCode}>
        <QrcodeIcon fill={theme.primaryColor} height={27} />
      </TouchableOpacity>
      <View>
        <Text style={styles.centerAlign}>Meu saldo</Text>
        <TextMask
          style={styles.centerAlign}
          value={userCurrentBalance}
          type={'money'}
          options={{
            precision: 2,
            separator: ',',
            delimiter: '.',
            unit: 'R$',
            suffixUnit: ''
          }}
        />
      </View>
      <AddUser fill={theme.primaryColor} height={23} />
    </View>
  );
}
