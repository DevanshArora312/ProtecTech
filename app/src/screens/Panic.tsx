import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import SecureAnimation from '../components/Secure';

const Panic = () => {
  return (
    <SafeAreaView className='w-full h-full py-4 justify-center'>
        
        <Text className='text-black text-[20px] text-center'>
            Press the below button if you feel like you are in danger!
        </Text> 
        <SecureAnimation/>
        <View className='w-full items-center justify-center py-8 px-2 gap-2'>
            <TouchableOpacity className='rounded-md bg-green-500 p-5'>
                <Text className='text-[25px] text-white'>
                    I'm in Danger!
                </Text>
            </TouchableOpacity>
            <View className='w-full px-6 py-2 gap-y-3'>
                <Text className='text-black text-[20px] text-center'>
                    A team of officers will contact you and assist you through the situation immediately!
                </Text>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Panic;
