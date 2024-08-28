import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const contacts = [1,2,3,4,5,6,7,8,9,10,199,12,21,14,991,12312];

const Contacts = () => {
  return (
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
  )
}

export default Contacts