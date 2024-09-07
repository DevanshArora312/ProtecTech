import React from 'react';
import { Text,View, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
import LottieView from 'lottie-react-native';
import GeoLocation from "react-native-geolocation-service";


const getLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      GeoLocation.getCurrentPosition(
        position => {
          console.log(position);
          return position;
        },
        error => {
          console.log(error.code, error.message);
          return null;
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      console.log('You cannot use Geolocation');
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}

const sendLocation = async () => {
  const posn = await getLocation();
  if(!posn) return;
  
}

const SosButton = () => {
  return (
      <TouchableOpacity 
        style={styles.container}
        onPress={sendLocation}
      >      
        <LottieView
            source={require('../../assets/blob.json')} 
            autoPlay
            loop
            style={styles.lottie}
        />
        <View style={styles.textContainer}>
            <Text style={styles.text}>SOS</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: {
    width: 230,
    height: 230
  },
  textContainer: {
    position: "absolute"
  },
  text: {
    fontSize: 35,
    color: '#fff',
    fontWeight:"bold"
  },
});

export default SosButton;
