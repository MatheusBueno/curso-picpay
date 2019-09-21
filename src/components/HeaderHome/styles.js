import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '100%',
    backgroundColor: theme.lightGray,
    paddingVertical: 5
  }
});
