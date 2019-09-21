import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import StartScreen from './screens/StartScreen/StartScreen';
import WalletScreen from './screens/WalletScreen/WalletScreen';
import PaymentScreen from './screens/PaymentScreen/PaymentScreen';
import NotificationScreen from './screens/NotificationScreen/NotificationScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';

// icons
import HomeIcon from '../assets/Inicio_ativo.svg';
import WallerIcon from '../assets/Carteira_inativo.svg';
import PaymentIcon from '../assets/cifrao.svg';
import NotificaitonIcon from '../assets/notificacoes.svg';
import SettingsIcon from '../assets/ajustes.svg';
import theme from './styles/theme';
import TabBottom from './components/TabBottom/TabBottom';

const homeStack = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ focused }) => (
          <HomeIcon fill={focused ? theme.primaryDarkColor : theme.textGray} height={18} />
        )
      }
    },
    WalletScreen: {
      screen: WalletScreen,
      navigationOptions: {
        tabBarLabel: 'Carteira',
        tabBarIcon: ({ focused }) => (
          <WallerIcon fill={focused ? theme.primaryDarkColor : theme.textGray} height={18} />
        )
      }
    },
    PaymentScreen: {
      screen: PaymentScreen,
      navigationOptions: {
        tabBarLabel: 'Pagar',
        tabBarIcon: ({ focused }) => (
          <PaymentIcon fill={focused ? theme.primaryDarkColor : theme.textGray} height={18} />
        )
      }
    },
    NotificationScreen: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: 'Notificações',
        tabBarIcon: ({ focused }) => (
          <NotificaitonIcon fill={focused ? theme.primaryDarkColor : theme.textGray} height={18} />
        )
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Ajustes',
        tabBarIcon: ({ focused }) => (
          <SettingsIcon fill={focused ? theme.primaryDarkColor : theme.textGray} height={18} />
        )
      }
    }
  },
  {
    tabBarComponent: TabBottom
  }
);

const startStack = createStackNavigator(
  {
    StartScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const AppNavigator = createSwitchNavigator({
  startStack,
  homeStack
});

export default Routes = createAppContainer(AppNavigator);
