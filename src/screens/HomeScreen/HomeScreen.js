import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { Header } from 'react-navigation-stack';
import Ripple from 'react-native-material-ripple';

import { SUGGESTED_HEIGHT, USER_SUGGESTIONS, ACTIVITIES } from '.././../config/constants';
import { styles } from './styles';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';
import TabHome from '../../components/TabHome/TabHome';
import theme from '../../styles/theme';
import UserActivity from '../../components/UserActivity/UserActivity';
import UserService from '../../services/user.service';
import { transformBalanceInCentsToReal, transformUserListInArray, transformTrasnferListInArray } from '../../utils/utils.service';
import TransferService from '../../services/transfer.service';
import AuthService from '../../services/authentication.service';

const HIDE_HEIGHT = SUGGESTED_HEIGHT + Header.HEIGHT;

export default function HomeScreen({ navigation }) {
  const [scrollY] = useState(new Animated.Value(0));
  const [userCurrentBalance, setUserCurrentBalance] = useState('0');
  const [userList, setUserList] = useState([]);
  const [transferList, setTransferList] = useState([]);
  const [myTransferList, setMyTransferList] = useState([]);

  useEffect(() => {
    const userBalanceRef = UserService.getUserBalance();

    userBalanceRef.on('value', (snapshot) => {
      if(snapshot.exists()) {
        setUserCurrentBalance(transformBalanceInCentsToReal(snapshot.val()));
      }
    })

    return () => {
      userBalanceRef.off();
    }
  }, []);

  useEffect(() => {
    getUserList();
  }, []);

  useEffect(() => {
    const transferListRef = TransferService.getAllTransferences();
    transferListRef.on('value', snapshot => {
      const allTransferences  = transformTrasnferListInArray(snapshot.val());
      console.log(allTransferences);
      const myTransferList = allTransferences.filter(transfer => transfer.userWhoPaid.userId === AuthService.userKey);
      
      setMyTransferList(myTransferList)
      setTransferList(allTransferences);
    })

    return () => {
      transferListRef.off();
    }
  }, []);

  const getUserList = async() => {
    try {
      const userList = await UserService.getUserList();
      const userListOnlyPublic = transformUserListInArray(userList);
      console.log(userListOnlyPublic);
      
      setUserList(userListOnlyPublic);
    } catch (error) {
      console.log('Error :(', error);
      
    }
  }

  const renderAllActivities = (myList) => {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true
        })}
        showsVerticalScrollIndicator={false}>
          {console.log(myList)          }
        {myList.map((activity,index) => {          
          return (
            <Ripple
              rippleContainerBorderRadius={10}
              rippleColor={theme.darktGray}
              style={styles.card}
              key={index.toString()}
              onPress={() => console.log('')}>
              <UserActivity item={activity} showActionsButton />
            </Ripple>
          );
        })}
      </Animated.ScrollView>
    );
  };

  const sentToQrCode = () => {
    navigation.navigate('QrCodeBottomTab');
  };

  const translateY = scrollY.interpolate({
    inputRange: [0, HIDE_HEIGHT + 80],
    outputRange: [0, -HIDE_HEIGHT],
    extrapolate: 'clamp'
  });

  const sendToNewTransference = (user) => {
    navigation.navigate('NewTransaction', { user });
  }

  return (
    <View style={styles.safeArea}>
      <Animated.View style={{ translateY }}>
        <View>
          <View style={styles.header}>
            <HeaderHome userCurrentBalance={userCurrentBalance} sentToQrCode={sentToQrCode} />
          </View>
          <SuggestedUsers users={userList} sendToNewTransference={sendToNewTransference} />
        </View>
        {
          transferList.length > 0 && (
            <View style={styles.tabsContainer}>
            <TabHome 
              allActivities={ () => renderAllActivities(transferList)} 
              myActivities={() => renderAllActivities(myTransferList)}
            />
          </View>
          )
        }
      
      </Animated.View>
    </View>
  );
}
