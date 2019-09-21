import React, { Fragment } from 'react';
import { View, Dimensions, StyleSheet, Text } from 'react-native';
import Ripple from 'react-native-material-ripple';

import theme from '../../styles/theme';
import { styles } from './styles';

export default function TabBottom({
  renderIcon,
  getLabelText,
  activeColor,
  inactiveColor,
  onTabPress,
  onTabLongPress,
  getAccessibilityLabel,
  navigation
}) {
  const { routes, index: activateRouteIndex } = navigation.state;

  return (
    <View style={styles.container}>
      {routes.map((route, index) => {
        const focused = activateRouteIndex === index;
        const tintColor = focused ? activeColor : inactiveColor;

        if (index === 2) {
          return (
            <Fragment key={index.toString()}>
              <View style={styles.tabButton} />
              <Ripple
                rippleContainerBorderRadius={50}
                rippleColor={activeColor}
                style={styles.selectedTabButton}
                onPress={() => onTabPress({ route })}>
                {renderIcon({ route, focused, tintColor: '#fff' })}
                <Text style={[styles.label, { color: '#fff' }]}>{getLabelText({ route })}</Text>
              </Ripple>
            </Fragment>
          );
        }

        return (
          <Ripple
            key={index.toString()}
            rippleColor={activeColor}
            style={styles.tabButton}
            onPress={() => onTabPress({ route })}>
            {renderIcon({ route, focused, tintColor })}
            <Text style={[styles.label, { color: tintColor }]}>{getLabelText({ route })}</Text>
          </Ripple>
        );
      })}
    </View>
  );
}
