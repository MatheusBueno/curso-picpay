import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Money from '../../../assets/cifrao.svg';
import theme from '../../styles/theme';
import Qrcode from '../../../assets/qrcode.svg';
import Contact from '../../components/Contact/Contact';
import { CONTACTS, SCREEN_WIDTH } from '../../config/constants';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';
import { backgroundContainer } from '../../styles/styles';

const Header = ({ navigation }) => {
  const [search, setSearch] = useState();

  useEffect(() => {
    navigation.setParams({ search });
  }, [search]);

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder='A quem você quer pagar?'
        style={styles.searchInput}
        value={search}
        onChangeText={text => setSearch(text)}
      />
    </View>
  );
};

export function PaymentNavigation({ navigation }) {
  return {
    headerTitle: <Header navigation={navigation} />,
    headerStyle: {
      backgroundColor: theme.lightGray,
      elevation: 1
    },
    headerLeft: <Qrcode fill={theme.primaryColor} height={28} />
  };
}

export function PaymentTabNavigation() {
  return {
    tabBarLabel: 'Pagar',
    labelContainer: {
      position: 'absolute',
      height: 400
    },
    tabBarIcon: ({ focused }) => (
      <View style={styles.circle}>
        <Money
          fill={focused ? theme.primaryDarkColor : '#BBBBBB'}
          height={18}
        />
      </View>
    )
  };
}

export default function PaymentScreen({ navigation }) {
  sendToNewTransaction = ({ avatar, username }) => {
    navigation.navigate('NewTransaction', { avatar, username });
  };

  return (
    <View style={backgroundContainer}>
      <SuggestedUsers
        isBackgroundGray
        sendToNewTransaction={sendToNewTransaction}
      />
      <View style={styles.divider} />
      <View style={styles.contactContainer}>
        <Text style={styles.contactsTitle}>Contatos</Text>
        <FlatList
          data={CONTACTS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Contact item={item} />}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    transform: [{ translateY: -40 }],
    backgroundColor: theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 100000
  },
  searchContainer: {
    flex: 1,
    paddingVertical: 9,
    paddingHorizontal: 15
  },
  searchInput: {
    borderColor: '#ACB1BD',
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    textAlign: 'center'
  },
  contactContainer: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: theme.lightGray
  },
  contactsTitle: {
    margin: 10,
    fontSize: 15,
    color: '#414141',
    fontWeight: 'bold'
  },
  divider: {
    height: 0.6,
    width: SCREEN_WIDTH - 20,
    marginHorizontal: 10,
    backgroundColor: '#D6D6D6',
    justifyContent: 'center'
  }
});
