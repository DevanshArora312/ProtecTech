import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Image, Text, View } from 'react-native';
import Home from './screens/Home';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Panic from './screens/Panic';
import ThreatDetect from './screens/ThreatDetect';
import { TabIconPropType } from './utils/Types';
import Chat from './screens/Chat';
import Header from './components/Header';
import Profile from './screens/Profile';
import {store} from "./redux/store.js";
import {Provider as ReduxProvider} from 'react-redux';
import Startup from './screens/Startup.tsx';
import Login from './screens/Login.tsx';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OTP from './screens/OTP.tsx';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabIcon = ({ icon, color, name, focused } : TabIconPropType ) => {
  if(!focused) icon = icon+'-outline';
  return (
    <View className="flex items-center justify-center gap-1">
      <Icon name={icon} size={30} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-sm`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};


const TabRoot = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown : false,
        tabBarActiveTintColor: "#FE5E5C",
        tabBarInactiveTintColor: "#282e34",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#FFFFFF",
          height: 64,
        },
      }}
    >
      <Tab.Screen 
        name="Recent" 
        component={Home} 
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"home"}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Page 2" 
        component={Chat} 
        options={{
          title: "Chat",
          headerShown: false,
          unmountOnBlur:true,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"chat"}
              color={color}
              name="Chat with us"
              focused={focused}
            />
          ),
        }}  
      />
    </Tab.Navigator>
  )
}

const DrawerNavigator = () => {
  return (
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
          <Drawer.Screen name="Home" component={TabRoot}  />
          <Drawer.Screen name="Panic" component={Panic}  />
          <Drawer.Screen name="ThreatDetect" component={ThreatDetect}  />
          <Drawer.Screen name="Profile" component={Profile}  /> 
        </Drawer.Navigator>
  )
}

const Index = () => {
    return (
      <ReduxProvider store={store}>
      <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Startup"
              component={Startup}
            />
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="OTP"
              component={OTP}
            />
            <Stack.Screen
              name="App"
              component={DrawerNavigator}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
      </ReduxProvider>
    );
  };
export default Index;
