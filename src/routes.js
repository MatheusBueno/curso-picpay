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

const homeStack = createBottomTabNavigator({
  HomeScreen,
  WalletScreen,
  PaymentScreen,
  NotificationScreen,
  SettingsScreen
});

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
