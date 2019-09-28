import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';

import styles from './styles';

export default function SuggestedUsers({ users, isBackgroundGray, sendToNewTransference }) {
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
            <Ripple key={user.key} style={styles.user} onPress={() => sendToNewTransference(user) }>
              <Image style={styles.avatar} source={{ uri: user.userPhotoUrl }} />
              <Text
                style={[
                  styles.username,
                  {
                    color: isBackgroundGray ? theme.dark : theme.secondaryColor
                  }
                ]}>
                {user.userNickname}
              </Text>
            </Ripple>
          );
        })}
      </ScrollView>
    </View>
  );
}
