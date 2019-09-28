import React from 'react';
import { TextInput, YellowBox } from 'react-native';

import './src/config/firebase';
import Routes from './src/routes';
import theme from './src/styles/theme';
TextInput.defaultProps.selectionColor = theme.primaryColor;
YellowBox.ignoreWarnings(['']);

export default function App() {
  return <Routes />;
}
