import { StyleSheet } from 'react-native';

import theme from '../../styles/theme';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  description: {
    color: theme.primaryDarkColor,
    marginVertical: 25
  },
  button: {
    width: '100%',
    marginVertical: 25,
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 50
  },
  textButton: {
    textAlign: 'center'
  },
  registerText: {
    color: '#fff',
    fontWeight: '600'
  }
});
