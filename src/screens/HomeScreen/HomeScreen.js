import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-navigation-stack';

import { SUGGESTED_HEIGHT } from '.././../config/constants';
import { styles } from './styles';
import HeaderHome from '../../components/HeaderHome/HeaderHome';

const HIDE_HEIGHT = SUGGESTED_HEIGHT + Header.HEIGHT;

// import { Container } from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.safeArea}>
      <View>
        <View style={styles.header}>
          <HeaderHome />
        </View>
      </View>
    </View>
  );
}
