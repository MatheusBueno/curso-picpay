import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation-stack';

import theme from '../../styles/theme';
import { SCREEN_HEIGHT, STATUSBAR_HEIGHT, ACTIVITIES } from '../../config/contants';

const SUGGESTED_HEIGHT = SCREEN_HEIGHT / 3.5;
const HIDE_HEIGHT = SUGGESTED_HEIGHT + Header.HEIGHT;

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.backgroundGray
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 130,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 15,
    margin: 8,
    marginVertical: 4
  },
  tabsContainer: {
    height: SCREEN_HEIGHT - Header.HEIGHT - STATUSBAR_HEIGHT
  }
});
