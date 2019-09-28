import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

export default function Contact({ item }) {
  return (
    <View style={styles.contactBox}>
      <Image
        style={styles.profilePhoto}
        source={require('../../../assets/users/matheus.png')}></Image>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{item.userName}</Text>
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePhoto: {
    height: 50,
    width: 50,
    borderRadius: 50
  },

  contactBox: {
    flexDirection: 'row',
    margin: 10
  },

  userInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 20
  },
  userName: {
    fontSize: 15,
    color: '#414141',
    fontWeight: 'bold'
  },

  name: {
    fontSize: 13,
    color: '#8F929D'
  }
});
