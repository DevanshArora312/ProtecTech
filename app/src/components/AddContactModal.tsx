import * as React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export default function AddContactModal({isVisible,setVisible}:{isVisible : boolean, setVisible:React.Dispatch<React.SetStateAction<boolean>>}) {
  
  return (
      <Modal 
        isVisible={isVisible} 
        className="m-0"
        coverScreen={false}
        hasBackdrop={true}
        onBackdropPress={() => setVisible(false)}
      >
        <View className="bg-white rounded-t-3xl m-0 h-[70%] absolute bottom-0 left-0 w-full">
          <Text>I am the modal content!</Text>
          <TouchableOpacity onPress={()=> setVisible(false)}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
  );
}
