import React from 'react';
import { TextInput } from 'react-native';

import './src/config/firebase';
import Routes from './src/routes';
import theme from './src/styles/theme';
TextInput.defaultProps.selectionColor = theme.primaryColor;

export default function App() {
  return <Routes />;
}
