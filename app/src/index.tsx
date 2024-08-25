import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";';
// import { Image, Text, View } from 'react-native';
import Home from './screens/Home';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Panic from './screens/Panic';
import ThreatDetect from './screens/ThreatDetect';


const Drawer = createDrawerNavigator();

const Header = ({ navigation, route }:{navigation:any, route:any, options:any}) =>{
        // console.log(route,navigation,options);
        return (
            <View className="bg-black text-white flex-row py-5 px-2 items-center justify-between">
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Text className="text-center">
                        <Icon name="menu" size={30} color="#fff" />
                    </Text>
                </TouchableOpacity>
                <Text className="text-[30px]">
                    {route.name === 'Home' ? 'Send an Alert' : route.name }!
                </Text>
                <Button
                    title=""
                    // onPress={() => navigation.toggleDrawer()} // Opens the drawer
                    color="#000"
                />
            </View>
        );
      };

const Index = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={
            {
              header: ({ navigation, route, options }) => Header(({ navigation, route, options })),
              headerTransparent:false,
              headerTitleAlign:'center',
            //   headerStyle:{backgroundColor:'black'},
            //   headerTitleStyle:{color:'white'},
            //   headerTitle:'Send an Alert!',
              headerTintColor:'white',
              drawerType:'slide',
            }
          }
        >
          <Drawer.Screen name="Home" component={Home}  />
          <Drawer.Screen name="Panic" component={Panic}  />
          <Drawer.Screen name="ThreatDetect" component={ThreatDetect}  />
          {/* <Drawer.Screen name="Profile" component={Profile}  />  */}
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };
export default Index;
