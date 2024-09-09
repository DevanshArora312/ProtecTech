import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SpinnerAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/spinner.json')} 
        autoPlay
        loop
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
  textContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});

export default SpinnerAnimation;
