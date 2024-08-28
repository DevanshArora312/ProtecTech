import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import React, { useState } from 'react'
import ClickAnimation from '../components/click'
import ScanningAnimation from '../components/scanner';

const ThreatDetect = () => {
    const imgData  = [require('../../assets/images/image1.png'),require('../../assets/images/image2.png'),require('../../assets/images/image3.png')];
    const [scanning,setScanning] = useState<Boolean>(false);
    const [result,setResult] = useState<Boolean>(false);
  return (
    <ScrollView className={`w-full p-5`}>
        
        <View className='text-black'>
            <Text className='text-black text-[20px] font-semibold'>
                Scan nearby threats with a single click!
            </Text>
        </View>
        <View className='items-center'>
            <ClickAnimation/>
        </View>
        <View className='w-full items-center my-3 gap-y-4'>
            {
                scanning ?
                <View className='w-full h-50'>
                    <ScanningAnimation/>
                </View>
                : result ? 
                <View className='w-full justify-center items-center'>
                    <Text className='text-[25px] font-bold text-green-400'>
                        You are Safe!
                    </Text>
                </View>
                : null
            }
            <TouchableOpacity
                className={`w-full px-5 py-3 ${scanning ? "bg-red-500" : "bg-blue-500"} rounded-xl`}
                onPress={() => {
                    const local = scanning;
                    setScanning(!scanning)
                    if(!local){
                        setTimeout(()=>{
                            setScanning(false);
                            setResult(true);
                        },2000);
                    }
                    if(local) setResult(false);
                }}
            >
                <Text className='text-center text-[20px] font-mono'>
                    {scanning  ? "Cancel" : "Scan my Surroundings"}
                </Text>
            </TouchableOpacity>
                
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