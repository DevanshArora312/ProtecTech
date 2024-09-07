import { View, Text, TouchableOpacity, SafeAreaView, Alert,Image } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import SosButton from '../components/SosButton';
import Icon2  from 'react-native-vector-icons/MaterialIcons';
import Contacts from '../components/Contacts';
import AddContactModal from '../components/AddContactModal';


const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
            text: 'Ok',
            onPress: () => Alert.alert('Ok Pressed'),
            style: 'default',
          },
      ],
      {
        cancelable: true,
      },
    );

const Home = () => {
  const [isVisible,setVisible] = useState<boolean>(false);
  return (
    <SafeAreaView className="bg-[#F3F4F5] w-screen h-screen flex-1 gap-y-3">
        <View className="flex flex-col justify-center items-center w-full px-5 py-4 gap-2">
            <SosButton/>
        </View>
        <Text className="text-black text-[23px] px-2 font-semibold">Contacts to send sos message : </Text>
        <View className="w-full flex-1 text-[25px] p-2 justify-center items-center">
            <Contacts/>
        </View>
        <View className="justify-center items-center w-full px-4 pb-3">
            <TouchableOpacity className="py-2 px-5 w-[90%]" onPress={()=> setVisible(true)} >
                <View className='justify-center flex-row items-center gap-2'>
                    <Icon2 name="person-add-alt-1" size={30} color={"#FE5E5C"}/>
                    <Text className="text-center text-[20px] text-[#FE5E5C] ">
                        Add a contact
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        {/* </View> */}
        <AddContactModal isVisible={isVisible} setVisible={setVisible}/>
    </SafeAreaView>
  );
};

export default Home;
