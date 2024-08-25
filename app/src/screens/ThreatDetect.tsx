import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import ClickAnimation from '../components/click'
import ScanningAnimation from '../components/scanner';

const ThreatDetect = () => {
    const imgData  = [require('../../assets/images/image1.png'),require('../../assets/images/image2.png'),require('../../assets/images/image3.png')];
    const [scanning,setScanning] = useState<Boolean>(false);
  return (
    <ScrollView className={`w-full p-5`}>
        {
            scanning ?
            <View className='w-full h-50'>
                <ScanningAnimation/>
            </View>
            : null
        }
        <View className='text-black'>
            <Text className='text-black text-[20px] font-semibold'>
                Scan nearby threats with a single click!
            </Text>
        </View>
        <View className='items-center'>
            <ClickAnimation/>
        </View>
        <View className='w-full items-center my-3'>
            {
                scanning ? 
                <TouchableOpacity
                    className='w-full px-5 py-3 bg-red-500 rounded-xl'
                    onPress={() => setScanning(!scanning)}
                >
                    <Text className='text-center text-[20px] font-mono'>
                        Cancel
                    </Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    className='w-full px-5 py-3 bg-blue-500 rounded-xl'
                    onPress={() => setScanning(!scanning)}
                >
                    <Text className='text-center text-[20px] font-mono'>
                        Scan my Surroundings
                    </Text>
                </TouchableOpacity>
            }
        </View>
        <View className='text-black'>
            <Text className='text-black text-[20px] font-semibold'>
                Your safety is our top priority!!
            </Text>
        </View>
        <FlatList
            horizontal={true}
            className="w-full my-2"
            data={imgData}
            contentContainerStyle={{columnGap:10}}
            renderItem={(({item,index}) => {
                // console.log(item);
                return(
                    <Image 
                        source={item} 
                        className='w-[250px] h-[250px] rounded-xl'
                    />
                );
            })}
            keyExtractor={(index) => (index.toString())}
        />
        <View className={`${scanning ? "h-50" : ""}`}>
            <Text>
                
            </Text>
        </View>
    </ScrollView>
  )
}

export default ThreatDetect