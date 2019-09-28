import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Like from '../../../assets/Like_ativo.svg';
import Comments from '../../../assets/Comentarios.svg';
import Public from '../../../assets/public.svg';
import theme from '../../styles/theme';

export default function UserActivities({ item, showActionsButton }) {
  return (
    <>
      <View style={styles.containerRow}>
        <Image style={styles.avatar} source={item.avatar} />
        <Text styles={{ color: theme.dark }}>
          <Text style={styles.userBoldText}>{item.sender}</Text> pagou a
          <Text style={styles.userBoldText}>{` ${item.receiver}`}</Text>
        </Text>
      </View>
      <View style={[styles.containerRow, { justifyContent: 'space-between' }]}>
        <View style={styles.containerRow}>
          <Text style={styles.transferenceValue}> R$ {item.paymentAmountInCents} </Text>
          <Public fill={theme.textGray} height={11} />
          <Text
            style={{
              color: theme.textGray,
              fontSize: 12
            }}
          >
            5 dias atrás
          </Text>
        </View>
        {showActionsButton && (
          <View style={styles.containerRow}>
            <Comments fill={theme.textGray} height={17} />
            <Text style={{ color: theme.textGray }}> {item.comments} </Text>
            <Like fill={theme.primaryColor} height={17} />
            <Text style={{ color: theme.textGray }}> {item.likes} </Text>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 22.5,
    marginRight: 12
  },
  userBoldText: {
    fontWeight: '700',
    color: theme.dark
  },
  transferenceValue: {
    color: theme.primaryColor,
    fontSize: 15,
    fontWeight: '500'
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
