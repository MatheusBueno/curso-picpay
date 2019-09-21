import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import StartScreen from './screens/StartScreen/StartScreen';

const homeStack = createBottomTabNavigator({
  HomeScreen
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
