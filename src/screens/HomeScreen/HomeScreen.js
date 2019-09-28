import React, { useState } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import { Header } from 'react-navigation-stack';
import Ripple from 'react-native-material-ripple';

import {
  SUGGESTED_HEIGHT,
  USER_SUGGESTIONS,
  ACTIVITIES
} from '.././../config/constants';
import { styles } from './styles';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';
import TabHome from '../../components/TabHome/TabHome';
import theme from '../../styles/theme';
import UserActivity from '../../components/UserActivity/UserActivity';

const HIDE_HEIGHT = SUGGESTED_HEIGHT + Header.HEIGHT;

export default function HomeScreen() {
  const [scrollY] = useState(new Animated.Value(0));

  const renderAllActivities = () => {
    return (
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true
          }
        )}
        showsVerticalScrollIndicator={false}
      >
        {ACTIVITIES.map(activity => {
          return (
            <Ripple
              rippleContainerBorderRadius={10}
              rippleColor={theme.darktGray}
              style={styles.card}
              key={activity.id}
              onPress={() => console.log('')}
            >
              <UserActivity item={activity} showActionsButton />
            </Ripple>
          );
        })}
      </Animated.ScrollView>
    );
  };

  const translateY = scrollY.interpolate({
    inputRange: [0, HIDE_HEIGHT + 80],
    outputRange: [0, -HIDE_HEIGHT],
    extrapolate: 'clamp'
  });

  return (
    <View style={styles.safeArea}>
      <View>
        <View>
          <View style={styles.header}>
            <HeaderHome />
          </View>
          <SuggestedUsers users={USER_SUGGESTIONS} />
        </View>
        <Animated.View style={styles.tabsContainer}>
          <TabHome allActivities={renderAllActivities} />
        </Animated.View>
      </View>
    </View>
  );
}
