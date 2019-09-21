import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header } from 'react-navigation-stack';
import Ripple from 'react-native-material-ripple';

import { SUGGESTED_HEIGHT, USER_SUGGESTIONS, ACTIVITIES } from '.././../config/constants';
import { styles } from './styles';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';
import TabHome from '../../components/TabHome/TabHome';
import theme from '../../styles/theme';
import UserActivity from '../../components/UserActivity/UserActivity';

const HIDE_HEIGHT = SUGGESTED_HEIGHT + Header.HEIGHT;

export default function HomeScreen() {
  const renderAllActivities = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {ACTIVITIES.map(activity => {
          return (
            <Ripple
              rippleContainerBorderRadius={10}
              rippleColor={theme.darktGray}
              style={styles.card}
              key={activity.id}
              onPress={() => console.log('')}>
              <UserActivity item={activity} showActionsButton />
            </Ripple>
          );
        })}
      </ScrollView>
    );
  };

  return (
    <View style={styles.safeArea}>
      <View>
        <View style={styles.header}>
          <HeaderHome />
        </View>
        <SuggestedUsers users={USER_SUGGESTIONS} />
      </View>
      <View style={styles.tabsContainer}>
        <TabHome allActivities={renderAllActivities} />
      </View>
    </View>
  );
}
