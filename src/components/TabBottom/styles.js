import { StyleSheet } from 'react-native';

import { WIDTH_SCREEN, TABS_WIDTH } from '../../config/constants';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 53,
    borderTopColor: theme.borderGray,
    borderTopWidth: 0.3
  },
  tabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.lightGray,
    width: TABS_WIDTH
  },
  selectedTabButton: {
    position: 'absolute',
    backgroundColor: theme.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    bottom: 10,
    borderRadius: 50,
    flex: 1,
    shadowColor: '#000000',
    shadowOpacity: 0.16,
    shadowRadius: 1,
    shadowOffset: {
      width: 1,
      height: 2
    },
    elevation: 2,
    zIndex: 10,
    transform: [{ translateX: (WIDTH_SCREEN - 60) / 2 }]
  }
});
