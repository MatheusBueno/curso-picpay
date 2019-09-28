import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Header } from 'react-navigation-stack';
import Ripple from 'react-native-material-ripple';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import theme from '../../styles/theme';
import PaymentService from '../../services/payment.service';
import LoadingModal from '../../components/LoadingModal/LoadingModal';
import PaymentClass from '../../classes/payment.class';
import { transformBalanceInRealToCents } from '../../utils/utils.service';

export function NewTransactionNavigation() {
  return {
    title: 'Nova Transação',
    headerStyle: {
      backgroundColor: theme.lightGray,
      elevation: 1
    },
    headerTintColor: theme.primaryColor,
    headerTitleStyle: { color: theme.dark }
  };
}

export default function NewTransactionScreen({ navigation }) {
  const [paymentValue, setPaymentValue] = useState(0);
  const [message, setMessage] = useState(undefined);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const user = navigation.getParam('user');

  const createPayment = async () => {
    setPaymentLoading(true);
    const userReciver = {
      userId: user.key,
      userName: user.userName,
      userNickname: user.userNickname,
      userPhotoUrl: user.userPhotoUrl
    };

    const newPayment = new PaymentClass(
      transformBalanceInRealToCents(paymentValue),
      message,
      {},
      userReciver
    );

    try {
      await PaymentService.createPayment(newPayment);

      navigation.navigate('SuccessTransaction');
    } catch (error) {
      console.log(error);
    } finally {      
      setPaymentLoading(false);
    }
  }

  renderUser = () => {
    return (
      <View style={styles.userContent}>
        <Image style={styles.senderPhoto} source={{ uri: user.userPhotoUrl }} />
        <View>
          <Text> {user.userNickname} </Text>
          <TextInputMask
            autoFocus
            style={styles.money}
            type={'money'}
            value={paymentValue}
            onChangeText={value => setPaymentValue(value)}
            options={{
              precision: 2,
              separator: ',',
              delimiter: '.',
              unit: 'R$',
              suffixUnit: ''
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
    <LoadingModal isVisible={paymentLoading} />
    <KeyboardAvoidingView
      keyboardVerticalOffset={Header.HEIGHT + Constants.statusBarHeight}
      style={{ flex: 1, justifyContent: 'space-between' }}
      behavior="padding"
      enabled>
      <View>
        {renderUser()}
        <TextInput
          style={styles.messageInput}
          value={message}
          placeholder="Escreva uma mensagem legal aqui :)"
          onChangeText={text => setMessage(text)}
        />
      </View>
      <View style={styles.bottomInput}>
        <Ripple onPress={createPayment} rippleContainerBorderRadius={30} rippleColor={theme.dark} style={styles.payButton}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#57E583', '#0EB85F']}
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 21
            }}>
            <Text
              style={{
                color: theme.secondaryColor,
                fontSize: 14,
                fontWeight: '500',
                textAlign: 'center'
              }}>
              Pagar
            </Text>
          </LinearGradient>
        </Ripple>
      </View>
    </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  userContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingTop: 10,
    paddingBottom: 15,
    paddingRight: 25,
    paddingLeft: 25,
    borderBottomColor: theme.borderGray,
    borderBottomWidth: 0.6
  },
  senderPhoto: {
    width: 64,
    height: 64,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 32,
    marginRight: 25
  },
  money: {
    color: theme.textGray,
    fontSize: 25,
    marginLeft: 2
  },
  messageInput: {
    height: 52,
    marginTop: 2,
    paddingHorizontal: 20,
    fontSize: 17,
    color: '#9F9F9F',
    fontWeight: '100'
  },
  bottomInput: {
    minHeight: 55,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: theme.lightGray
  },
  payButton: {
    maxWidth: 100,
    height: '100%',
    borderRadius: 18,
    flex: 1,
    alignItems: 'flex-end'
  }
});
