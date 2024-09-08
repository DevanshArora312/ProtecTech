import * as React from "react";
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import Icon  from 'react-native-vector-icons/MaterialIcons';

export default function AddContactModal({isVisible,setVisible}:{isVisible : boolean, setVisible:React.Dispatch<React.SetStateAction<boolean>>}) {
  
  return (
      <Modal 
        isVisible={isVisible} 
        className="m-0"
        coverScreen={false}
        hasBackdrop={true}
        onBackdropPress={() => setVisible(false)}
      >
        <View className="bg-white rounded-t-3xl m-0 h-[70%] absolute bottom-0 left-0 w-full px-4">
            <ScrollView>
                <View className="flex-row w-full items-center justify-end p-3">
                    <TouchableOpacity
                        onPress={()=>setVisible(false)}
                    >
                        <Text className="text-[#FE5E5C] text-[20px]">
                            Close
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className='justify-center flex-row items-center gap-2 my-5'>
                    <Icon name="person-add-alt-1" size={30} color={"rgb(59,130,246)"}/>
                    <Text className="text-center text-[20px] text-blue-500 ">
                        Import a contact
                    </Text>
                </View>
                <View className="justify-center flex-row items-center gap-2">
                    <View className="bg-slate-400 h-[1px] w-[40%]" />
                    <Text className="text-black text-[20px]">
                        OR
                    </Text>
                    <View className="bg-slate-400 h-[1px] w-[40%]" />
                </View>
                <View className="gap-y-4 w-full my-3 items-center">
                    <Text className="text-[20px] text-black text-center">
                        Enter Details Manually
                    </Text>
                    <TextInput className="border-[1px] border-black w-full h-12 rounded-xl p-2" placeholder="Enter contact name"/>
                    <TextInput className="border-[1px] border-black w-full h-12 rounded-xl p-2" placeholder="Enter contact number"/>
                    <TouchableOpacity 
                        className="rounded-3xl p-4 bg-yellow-600"
                    >
                        <Text className="text-white text-[20px]">Add</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
      </Modal>
  );
}
