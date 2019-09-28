import { StyleSheet } from 'react-native';
import theme from '../styles/theme';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  containerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: theme.lightGray
  }
});

export const container = globalStyles.container;
export const containerRow = globalStyles.containerRow;
export const backgroundContainer = globalStyles.backgroundContainer;
