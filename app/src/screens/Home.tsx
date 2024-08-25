import { View, Text, TouchableOpacity, SafeAreaView, Alert } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import SosButton from '../components/SosButton';

const contacts = [1,2,3,4,5,6,7,8,9,10,199,12,21,14,991,12312];

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
  return (
    <SafeAreaView className="w-screen h-screen">
        <View className="flex flex-col justify-center items-center w-full px-5 py-4 gap-2">
            {/* <TouchableOpacity className="bg-red-500 justify-center rounded-full w-[200px] h-[200px] p-10 font-semibold">
                <Text className='text-[35px] text-center'>
                    SOS
                </Text>
            </TouchableOpacity> */}
            <SosButton/>
        </View>
        <View className="justify-center items-center w-full px-5 gap-2">
            <Text className="text-black text-[20px]">Contacts to send sos message : </Text>
            <TouchableOpacity className="bg-green-400 text-white py-2 px-5 w-[90%] rounded-lg text-center">
                <Text className="text-center text-[20px]">
                    + Add a contact
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={showAlert}
            className="bg-red-400 text-white py-2 px-5 w-[90%] rounded-lg text-center">
                <Text className="text-center text-[20px]">
                    - Remove a contact
                </Text>
            </TouchableOpacity>
        </View>
        <View className="w-full text-[25px] flex-1 h-full p-2 justify-center items-center pb-28">
        <FlatList
                className="w-full"
                data={contacts}
                numColumns={1}
                contentContainerStyle={{rowGap:6}}
                renderItem={(({item,index}) => {
                    // console.log(item);
                    return(
                        <View 
                        className="flex-row justify-between text-black py-3 px-5 w-full rounded-lg text-center border-[2px] border-black shadow-black">
                            <Text className="text-[20px] text-black">
                                {item}. John Doe
                            </Text>
                            <Text className="text-[20px] text-black">
                                +91 123123113
                            </Text>
                        </View>
                    );
                })}
                keyExtractor={(item) => (item.toString())}
            />
        </View>
        {/* </View> */}
    </SafeAreaView>
  );
};

export default Home;
