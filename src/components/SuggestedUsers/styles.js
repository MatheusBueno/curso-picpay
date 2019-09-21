import { StyleSheet } from 'react-native';

import { SCREEN_HEIGHT } from '../../config/constants';
import theme from '../../styles/theme';

export default styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    height: SCREEN_HEIGHT / 3.5,
    backgroundColor: theme.primaryColor
  },
  suggestText: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: '500',
    color: theme.secondaryColor
  },
  user: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    marginHorizontal: 8,
    marginVertical: 8
  },
  avatar: {
    borderColor: theme.secondaryColor,
    borderWidth: 2,
    borderRadius: 30,
    height: 60,
    width: 60,
    backgroundColor: '#c0c0c0'
  },
  username: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 13,
    color: '#fff'
  }
});
