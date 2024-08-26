import { View, Text, TouchableOpacity, SafeAreaView, Alert,Image } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import SosButton from '../components/SosButton';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2  from 'react-native-vector-icons/MaterialIcons';

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
    <SafeAreaView className="bg-[#F3F4F5] w-screen h-screen flex-1 gap-y-3">
        <View className="flex flex-col justify-center items-center w-full px-5 py-4 gap-2">
            <SosButton/>
        </View>
        <Text className="text-black text-[23px] px-2 font-semibold">Contacts to send sos message : </Text>
        <View className="w-full flex-1 text-[25px] p-2 justify-center items-center">
            <FlatList
                className="w-full"
                data={contacts}
                numColumns={1}
                contentContainerStyle={{rowGap:6,flexGrow:1}}
                renderItem={(({item,index}) => {
                    // console.log(item);
                    return(
                        <View 
                            className="flex-row items-center justify-between text-black py-3 px-5 w-full rounded-lg text-center bg-white"
                        >
                            <View className='flex-row gap-x-10 items-center'>
                                <Image source={require('../../assets/images/defaultpfp.jpg')} className={"w-[40px] h-[40px] rounded-full"} />
                                <View className='flex'>
                                    <Text className="text-[18px] text-black">
                                        John Doe
                                    </Text>
                                    <Text className="text-[15px] text-black">
                                        +91 123123113
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Icon name="dots-vertical" size={30} color={"black"} />
                            </TouchableOpacity>
      
                        </View>
                    );
                })}
                keyExtractor={(item) => (item.toString())}
            />
        </View>
        <View className="justify-center items-center w-full px-4 pb-3">
            <TouchableOpacity className="py-2 px-5 w-[90%]">
                <View className='justify-center flex-row items-center gap-2'>
                    <Icon2 name="person-add-alt-1" size={30} color={"#FE5E5C"}/>
                    <Text className="text-center text-[20px] text-[#FE5E5C] ">
                        Add a contact
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        {/* </View> */}
    </SafeAreaView>
  );
};

export default Home;
