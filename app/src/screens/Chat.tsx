import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native-gesture-handler';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { loadChat, pushChat } from '../redux/slices/chat';
import { socket } from '../utils/socket';
import SpinnerAnimation from '../components/spinner';

const ch = [
    {id:1,text:"Hello How may i help you?", sentBy:"operator"},
    {id:2,text:"I am in danger!", sentBy:"person"},
    {id:3,text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.", sentBy:"operator"},
    {id:4,text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.", sentBy:"person"},
    {id:5,text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, eos.", sentBy:"operator"},
] 
const Chat = () => {
    const [loading,setLoading] = useState<Boolean>(true);
    const [msg,setMsg] = useState<string>("");
    const dispatch = useDispatch();
    const chats = useSelector((state : any) => state.chat.chat) 
    const scrollRef = useRef<any>(null);
    const  url = 'https://catfact.ninja/fact';
    // console.log(chats)
    useEffect(()=>{

        // implement endpoint
        fetch(url)
        .then(res => {
            setLoading(false);
            dispatch(loadChat(ch))
        })
        .catch(err => {
            console.warn(err);
            // show error toast
        })
    },[])

    useEffect(()=>{
        if(socket){
            socket.on("new_message",async (socketData : any) => {
                dispatch(pushChat(socketData));
            });
        }
        return () => {
            if(socket) socket.off("new_message");
        }
    },[]);

    useEffect(()=>{
        scrollRef?.current?.scrollToEnd({animated : true}) 
    },[chats.length])

    const handleMessage = async () => {
        const newMessage = {
            id : chats[chats.length - 1].id + 1,
            text : msg,
            sentBy : "person"
        }
        //implement endpoint
        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console.log(data);
            dispatch(pushChat(newMessage));
        })
        .catch(err => {
            console.warn(err);
            // show error toast
        })
        setMsg("");
        
    }
    return (
        <KeyboardAvoidingView behavior='padding' className='w-full flex-1 justify-between py-3'>
            {
                loading ? 
                <View className='flex-1 justify-center items-center'>
                    <SpinnerAnimation/>
                </View> : 
                <FlatList
                    className="w-full"
                    data={chats}
                    numColumns={1}
                    contentContainerStyle={{rowGap:0}}
                    ref = {scrollRef}
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
                <TextInput 
                    className='rounded-full p-4 h-18 w-[85%] bg-white border-[1px] border-black' 
                    placeholder='Enter a message'
                    onChangeText={(txt) => setMsg(txt)}
                    value={msg}
                />
                <TouchableOpacity 
                    className="w-[55px] h-[55px] bg-[#FE5E5C] rounded-full justify-center items-center" 
                    onPress={handleMessage}
                >
                    <Icon name="send" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
  )
}

export default Chat