import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import StartScreen from './screens/StartScreen/StartScreen';
import WalletScreen from './screens/WalletScreen/WalletScreen';
import PaymentScreen, { PaymentNavigation } from './screens/PaymentScreen/PaymentScreen';
import NotificationScreen from './screens/NotificationScreen/NotificationScreen';
import SettingsScreen from './screens/SettingsScreen/SettingsScreen';
import LoginScreen, { LoginNavigation } from './screens/LoginScreen/LoginScreen';
import RegisterScreen, { RegisterNavigation } from './screens/RegisterScreen/RegisterScreen';
import TransactionFinishedScreen, {
  TransactionFinishedNavigation
} from './screens/TransactionFinishedScreen/TransactionFinishedScreen';
import NewTransactionScreen, {
  NewTransactionNavigation
} from './screens/NewTransactionScreen/NewTransactionScreen';
import SuccessTransactionScreen from './screens/SuccessTransactionScreen/SuccessTransactionScreen';

// icons
import HomeIcon from '../assets/Inicio_ativo.svg';
import WallerIcon from '../assets/Carteira_inativo.svg';
import PaymentIcon from '../assets/cifrao.svg';
import NotificaitonIcon from '../assets/notificacoes.svg';
import SettingsIcon from '../assets/ajustes.svg';
import theme from './styles/theme';
import TabBottom from './components/TabBottom/TabBottom';

const PaymentStack = createStackNavigator({
  Payment: {
    screen: PaymentScreen,
    navigationOptions: PaymentNavigation
  }
});

const homeBottomTabStack = createBottomTabNavigator(
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
      screen: PaymentStack,
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

const homeStack = createStackNavigator({
  homeBottomTabStack: {
    screen: homeBottomTabStack,
    navigationOptions: {
      header: null
    }
  },
  TransactionFinished: {
    screen: TransactionFinishedScreen,
    navigationOptions: TransactionFinishedNavigation
  },
  NewTransaction: {
    screen: NewTransactionScreen,
    navigationOptions: NewTransactionNavigation
  },
  SuccessTransaction: {
    screen: SuccessTransactionScreen,
    navigationOptions: { header: null }
  }
});

const startStack = createStackNavigator({
  StartScreen: {
    screen: StartScreen,
    navigationOptions: { header: null }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: LoginNavigation
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: RegisterNavigation
  }
});

const AppNavigator = createSwitchNavigator({
  startStack,
  homeStack
});

export default Routes = createAppContainer(AppNavigator);
