import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-navigation-stack';

import { SUGGESTED_HEIGHT, USER_SUGGESTIONS } from '.././../config/constants';
import { styles } from './styles';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import SuggestedUsers from '../../components/SuggestedUsers/SuggestedUsers';

const HIDE_HEIGHT = SUGGESTED_HEIGHT + Header.HEIGHT;

export default function HomeScreen() {
  return (
    <View style={styles.safeArea}>
      <View>
        <View style={styles.header}>
          <HeaderHome />
        </View>
        <SuggestedUsers users={USER_SUGGESTIONS} />
      </View>
    </View>
  );
}
