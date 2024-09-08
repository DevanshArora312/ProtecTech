import { View, Text,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const Login = ({navigation} : {navigation : any}) => {
    const handleLogin = async () => {

        //implement endpoint

        navigation.navigate("OTP");
        // navigation.replace("App");
    }
  return (
    <KeyboardAvoidingView behavior='padding' className='w-screen h-screen justify-center items-center gap-y-10'>
        {/* <ScrollView className='w-full p-2' contentContainerStyle={{justifyContent:"space-around",alignItems:"center"}}> */}
            <View className='w-full justify-center items-center'>
                <Text className='text-black font-bold text-[30px] text-center'>Verify your</Text>
                <Text className='text-black font-bold text-[30px] text-center'>Mobile Number</Text>
                <Text className='text-slate-400 font-semibold text-[20px] text-center my-2' >Please enter your Mobile Number</Text>
            </View>
            <TextInput maxLength={10} className='border-[1px] rounded-lg border-[#FE5E5C] p-2 w-[80%] h-14 text-center' keyboardType='numeric'/>
            <TouchableOpacity
                className='bg-[#FE5E5C] rounded-xl px-4 py-2'
                onPress={handleLogin}
            >
                <Text className='text-white text-[30px]'>
                    Login
                </Text>
            </TouchableOpacity>
        {/* </ScrollView> */}
    </KeyboardAvoidingView>
    
  )
}

export default Login