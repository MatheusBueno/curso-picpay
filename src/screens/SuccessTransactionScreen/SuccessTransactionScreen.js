import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SuccessTransactionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LottieView
        duration={2000}
        autoPlay={true}
        loop={false}
        onAnimationFinish={() => {
          console.log('finished');

          navigation.navigate('HomeScreen');
        }}
        style={{
          width: 400,
          height: 400,
          backgroundColor: '#fff'
        }}
        source={require('../../../assets/animations/success.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
