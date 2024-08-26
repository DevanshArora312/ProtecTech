import { Button, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Header = ({ navigation, route }:{navigation:any, route:any, options:any}) =>{
    // console.log(route,navigation,options);
    return (
        <View className="bg-white flex-row py-5 px-2 items-center justify-between">
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text className="text-center">
                    <Icon name="menu" size={30} color="#000" />
                </Text>
            </TouchableOpacity>
            <Text className="text-[30px] text-[#FE5E5C]">
                {route.name === 'Home' ? 'Send an Alert' : route.name }!
            </Text>
            <View className="w-5 h-2 bg-transparent" />
        </View>
    );
  };

export default Header;