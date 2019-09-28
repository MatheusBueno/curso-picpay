import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import theme from '../../styles/theme';
import UserActivity from '../../components/UserActivity/UserActivity';
import Like from '../../../assets/Like.svg';
import Send from '../../../assets/send.svg';
import Input from '../../components/Input/Input';

export function TransactionFinishedNavigation() {
  return {
    title: 'Transação',
    headerStyle: {
      backgroundColor: theme.lightGray,
      elevation: 1
    },
    headerTintColor: theme.primaryColor,
    headerTitleStyle: { color: theme.dark }
  };
}

export default function TransactionFinishedScreen({ navigation }) {
  const [comment, setComment] = useState(undefined);
  const activitySelected = navigation.getParam('activity');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.userContent}>
        <UserActivity item={activitySelected} />
      </View>
      <View style={styles.likeContent}>
        <Like fill='#ACB1BD' height={15} />
        <Text style={styles.likeText}>Curtir</Text>
      </View>
      <View style={styles.bottomInput}>
        <Input
          value={comment}
          changeText={setComment}
          label='Deixe um comentário...'
          focusedColor={theme.secondaryColor}
          unfocusedColor={theme.dark}
        />
        <Send fill='#c7c7c7' height='25'></Send>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 120,
    backgroundColor: '#fff',
    padding: 15
  },
  likeContent: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.borderGray,
    borderWidth: 0.6,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  likeText: {
    color: '#666666',
    fontSize: 12
  },
  bottomInput: {
    position: 'absolute',
    bottom: 0,
    left: 15,
    right: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: 12
  }
});
