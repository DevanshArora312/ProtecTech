import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const chats = [
    {id:1,text:"Hello How may i help you?", sentBy:"operator"},
    {id:2,text:"I am in danger!", sentBy:"person"},
    {id:3,text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.", sentBy:"operator"},
    {id:4,text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.", sentBy:"person"},
    {id:5,text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.", sentBy:"operator"},

]

const Chat = () => {
    const [loading,setLoading] = useState<Boolean>(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000);
    },[])
    return (
    <SafeAreaView className='w-full flex-1 justify-between py-4'>
        {
            loading ? 
            null : 
            <FlatList
                className="w-full"
                data={chats}
                numColumns={1}
                contentContainerStyle={{rowGap:0}}
                renderItem={(({item,index}) => {
                    // console.log(item);
                    return(
                        <View 
                            className={`flex-row items-center ${ item.sentBy == "operator" ? "justify-start" : "justify-end"} py-3 px-5 w-full`}
                        >
                            <View 
                                className={`${item.sentBy == "operator" ? "rounded-tr-xl" : "rounded-tl-xl"}  rounded-b-xl max-w-[60%] ${item.sentBy == "operator" ? "bg-[#FE5E5C]" : "bg-white"} p-4`}
                            >
                                <Text className={`text-[20px] ${item.sentBy == "operator" ? "text-white" : "text-black"}`}>
                                    {item.text}
                                </Text>
                            </View>
                            
                        </View>
                    );
                })}
                keyExtractor={(item) => (item.id.toString())}
            />
            
            
        }
        <View className='flex-row items-center justify-between p'>
            <TextInput className='rounded-full p-4 h-18 w-[85%] bg-white' placeholder='Enter a message'/>
            <TouchableOpacity className="w-[50px] h-[50px] bg-[#FE5E5C] rounded-full justify-center items-center" onPress={() => console.log("hehe")}>
                    <Icon name="send" size={30} color="white" />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Chat