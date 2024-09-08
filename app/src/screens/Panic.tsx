import { View, Text, SafeAreaView, TouchableOpacity, PermissionsAndroid } from 'react-native';
import React from 'react';
import SecureAnimation from '../components/Secure';
import GeoLocation from "react-native-geolocation-service";

const Panic = () => {
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
    return (
    <SafeAreaView className='w-full h-full py-4 justify-center'>
        
        <Text className='text-black text-[20px] text-center'>
            Press the below button if you feel like you'd like to alert your contacts!
        </Text> 
        <SecureAnimation/>
        <View className='w-full items-center justify-center py-8 px-2 gap-2'>
            <TouchableOpacity 
                onPress={sendLocation}
                className='rounded-md bg-green-500 p-5'
            >
                <Text className='text-[25px] text-white'>
                    I'm in Danger!
                </Text>
            </TouchableOpacity>
            <View className='w-full px-6 py-2 gap-y-3'>
                <Text className='text-black text-[20px] text-center'>
                    This will immediately send your current location to your chosen contacts!
                </Text>
                <Text className='text-black text-[20px] text-center'>
                    if you need police assisstance please use the SOS button!
                </Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Panic;
