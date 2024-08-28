import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SecureAnimation = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/secure.json')} 
        autoPlay={true}
        loop={false}
        style={styles.lottie}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});

export default SecureAnimation;
