import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import Ripple from 'react-native-material-ripple';

import { backgroundContainer } from '../../styles/styles';
import ItemSeparator from '../../components/ItemSeparator/itemSeparator';
import SettingsItem from '../../components/SettingsItem/SettingsItem';
import { SETTINGS } from '../../config/constants';
import theme from '../../styles/theme';

export default function SettingsScreen() {
  const logout = () => {
    console.log('sair');
  };

  return (
    <View style={backgroundContainer}>
      <View style={styles.containerHeaderSettings}>
        <Image style={styles.profileImage} source={require('../../../assets/users/matheus.png')} />
        <Text style={styles.userName}>@matheus.bueno</Text>
        <Text style={styles.name}>Matheus Bueno </Text>
      </View>
      <View style={styles.containerSettings}>
        <Text style={styles.titleSettingsBox}>Minha conta</Text>
        <View style={styles.containerSettingsBox}>
          <FlatList
            data={SETTINGS}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <SettingsItem item={item} />}
            ItemSeparatorComponent={ItemSeparator}
          />
          <Ripple onPress={logout} rippleColor={theme.darktGray} style={styles.logoutButton}>
            <SettingsItem item={{ title: 'Sair' }} />
          </Ripple>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeaderSettings: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userName: {
    fontSize: 18,
    color: '#555555'
  },
  name: {
    fontSize: 15,
    color: '#ABABAB'
  },
  containerSettings: {
    flex: 3,
    flexDirection: 'column',
    width: '100%'
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    margin: 10
  },
  titleSettingsBox: {
    padding: 5,
    marginLeft: 10,
    color: '#8EC29A'
  },
  containerSettingsBox: {
    borderWidth: 0.4,
    borderColor: '#C8C8C8'
  },
  logoutButton: {
    marginTop: 20
  }
});
