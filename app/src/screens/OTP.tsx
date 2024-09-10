import { View, Text,TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { connectSocket, socket } from '../utils/socket'
import { useDispatch, useSelector } from 'react-redux'
import { setActive } from '../redux/slices/active'
import { sendLocation } from '../utils/locationUtils'
import SpinnerAnimation from '../components/spinner'

const OTP = ({navigation} : {navigation : any}) => {
    const dispatch = useDispatch();
    const [checking,setChecking] = useState<Boolean>(false);
    const handleOTP = async () => {
        setChecking(true);
        //implement endpoint

        const responsePayload = { data : "...smth" , userId : "" }
        if('otpCorrect'){
            try{
                if(!socket){
                    connectSocket(responsePayload.userId);
                }
                if(socket){
                    const longInterval = setInterval(()=>{
                        sendLocation();
                    },60*60*1000);
                    dispatch(setActive({name:"longInterval",intv : longInterval}));
                }
                // navigation.pop(); <--------------------- uncomment
                // navigation.replace("App");
                setTimeout(()=>{
                    setChecking(false);
                    navigation.pop();
                    navigation.replace("App");
                },2000)
            }
            catch(err){
                console.log(err);
                //show error toast
            }
        }
        else{
            // show error message
        }
    }
  return (
    <KeyboardAvoidingView behavior='padding' className='w-screen h-screen justify-center items-center gap-y-10'>
        {/* <ScrollView className='w-full p-2' contentContainerStyle={{justifyContent:"space-around",alignItems:"center"}}> */}
            {
                checking ? 
                <SpinnerAnimation/>
                :
                <>
                <View className='w-full justify-center items-center'>
                    <Text className='text-black font-bold text-[30px] text-center'>OTP</Text>
                    <Text className='text-black font-bold text-[30px] text-center'>Verification</Text>
                    <Text className='text-slate-400 font-semibold text-[20px] text-center mt-2' >Enter the 4 digit code</Text>
                    <Text className='text-slate-400 font-semibold text-[20px] text-center mb-2' >we sent to your mobile phone</Text>
                </View>
                <View className='w-full px-2 flex-row gap-x-4 justify-center items-center'>
                    <TextInput maxLength={1} className='text-black border-[1px] rounded-lg border-[#FE5E5C] p-2 w-[17%] h-14 text-center' keyboardType='numeric'/>
                    <TextInput maxLength={1} className='text-black border-[1px] rounded-lg border-[#FE5E5C] p-2 w-[17%] h-14 text-center' keyboardType='numeric'/>
                    <TextInput maxLength={1} className='text-black border-[1px] rounded-lg border-[#FE5E5C] p-2 w-[17%] h-14 text-center' keyboardType='numeric'/>
                    <TextInput maxLength={1} className='text-black border-[1px] rounded-lg border-[#FE5E5C] p-2 w-[17%] h-14 text-center' keyboardType='numeric'/>
                </View>
                <TouchableOpacity
                    className='bg-[#FE5E5C] rounded-xl px-4 py-2'
                    onPress={handleOTP}
                >
                    <Text className='text-white text-[30px]'>
                        Verify
                    </Text>
                </TouchableOpacity>
                </>
            }
        {/* </ScrollView> */}
    </KeyboardAvoidingView>
    
  )
}

export default OTP