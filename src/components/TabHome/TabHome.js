import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

import theme from '../../styles/theme';

import { styles } from './styles';
const WIDTH_SCREEN = Dimensions.get('window').width;
const TAB_WIDTH = WIDTH_SCREEN / 4;

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [{ key: 'allActivities', title: 'Todos' }, { key: 'myActivities', title: 'Minhas' }]
  };

  handleIndexChange = index => this.setState({ index });

  getCurrentColor = (props, currentTabIndex, [maxColor, minColor]) =>
    Animated.round(
      Animated.interpolate(props.position, {
        inputRange: [0, 1],
        outputRange: [0, 1].map(inputIndex =>
          inputIndex === currentTabIndex ? maxColor : minColor
        ),
        extrapolate: 'clamp'
      })
    );

  renderTabBar = props => {
    const translateTabX = Animated.round(
      Animated.interpolate(props.position, {
        inputRange: [0, 1],
        outputRange: [WIDTH_SCREEN / 2 + 5, TAB_WIDTH * 3 - 5],
        extrapolate: 'clamp'
      })
    );

    return (
      <View style={styles.tabBar}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={styles.tabText}>Ativiades</Text>
        </View>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
          {props.navigationState.routes.map((route, currentTabIndex) => {
            const color = Animated.color(
              this.getCurrentColor(props, currentTabIndex, [17, 187]),
              this.getCurrentColor(props, currentTabIndex, [199, 187]),
              this.getCurrentColor(props, currentTabIndex, [111, 187])
            );

            return (
              <TouchableOpacity
                key={currentTabIndex.toString()}
                style={styles.tabItem}
                onPress={() => this.setState({ index: currentTabIndex })}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Animated.View
          style={[
            styles.indicator,
            { transform: [{ translateX: translateTabX }] }
          ]}></Animated.View>
      </View>
    );
  };

  renderScene = SceneMap({
    allActivities: this.props.allActivities,
    myActivities: this.props.myActivities
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}
