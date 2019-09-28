import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';

import styles from './styles';

export default function SuggestedUsers({ users, isBackgroundGray }) {
  return (
    <View
      style={[
        styles.content,
        {
          backgroundColor: isBackgroundGray ? theme.lightGray : theme.primaryColor
        }
      ]}>
      <Text
        style={[
          styles.suggestText,
          {
            color: isBackgroundGray ? theme.dark : theme.secondaryColor
          }
        ]}>
        Sugestões para Você
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map(user => {
          return (
            <Ripple key={user.id} style={styles.user} onPress={() => console.log('user')}>
              <Image style={styles.avatar} source={user.avatar} />
              <Text
                style={[
                  styles.username,
                  {
                    color: isBackgroundGray ? theme.dark : theme.secondaryColor
                  }
                ]}>
                {user.username}
              </Text>
            </Ripple>
          );
        })}
      </ScrollView>
    </View>
  );
}
