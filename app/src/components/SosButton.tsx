import React, { useEffect } from 'react';
import { Text,View, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
import LottieView from 'lottie-react-native';
import { socket } from '../utils/socket';
import {sendLocation} from "../utils/locationUtils"



const SosButton = () => {
  useEffect(()=>{
    if(socket){
      socket.on("track",()=>{
        sendLocation();
      })
    }
  },[])
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
