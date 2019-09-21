import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Ripple from 'react-native-material-ripple';

import styles from './styles';

export default function SuggestedUsers({ users }) {
  return (
    <View style={styles.content}>
      <Text style={styles.suggestText}>Sugestões para Você</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map(user => {
          return (
            <Ripple key={user.id} style={styles.user} onPress={() => console.log('user')}>
              <Image style={styles.avatar} source={user.avatar} />
              <Text style={styles.username}> {user.username} </Text>
            </Ripple>
          );
        })}
      </ScrollView>
    </View>
  );
}
