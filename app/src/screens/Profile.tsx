import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import Contacts from '../components/Contacts'
const Profile = () => {
  return (
    <SafeAreaView className='w-full h-full flex-1'>
        <View className='w-full h-[40%]'>
        <Image source={require('../../assets/images/image1.png')} className='w-full h-full' />
        </View>
        <View className='w-full py-5 h-[65%] absolute top-[37%] left-0 bg-white rounded-t-3xl'>
            <View className='w-full items-center justify-center'>
                <Text className='text-[#FE5E5C] text-[25px] font-semibold'>My Profile</Text>
            </View>
            <View className='h-[1px] bg-black w-[90%] mx-auto my-2'/>
            <View className='w-full flex-row gap-x-4 justify-around items-center my-4'>
                <View className='flex-row gap-x-2 items-center text-black '>
                    <Icon name="face-woman-profile" size={30} color={"#FE5E5C"} />
                    <Text className='text-[22px]'>Vasiu</Text>
                </View>
                <View className='flex-row gap-x-2 items-center text-black '>
                    <Icon name="calendar-month" size={30} color={"#FE5E5C"} />
                    <Text className='text-[22px]'>31-10-2004</Text>
                </View>
            </View>
            <View className='w-full flex-col '>
                <View className='flex-row gap-x-2 justify-around  items-center my-4'>
                    <View className='flex-row gap-x-2 items-center text-black '>
                        <Icon name="gender-male-female" size={30} color={"#FE5E5C"} />
                        <Text className='text-[22px]'>Female</Text>
                    </View>
                    <View className='flex-row gap-x-2 items-center text-black '>
                        <Icon name="phone-in-talk" size={30} color={"#FE5E5C"} />
                        <Text className='text-[22px]'>+91 9013474563</Text>
                    </View>
                </View>
                <Text className="text-black text-[20px] px-2 mt-2 mx-2">Your favourite contacts are : </Text>
                <View className="w-full text-[25px] p-2 justify-center items-center">
                    <Contacts/>
                </View>
                
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Profile