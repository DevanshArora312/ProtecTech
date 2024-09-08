import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { socket,connectSocket } from '../utils/socket';
import { sendLocation } from '../utils/locationUtils';
import { setActive } from '../redux/slices/active';

const Startup = ({navigation} : {navigation : any}) => {
    const dispatch = useDispatch();
    const activeState = useSelector((state : any) => state.active)
    const checkPermissions = async () => {
        // return new Promise((res,rej)=>console.log(res))
    }
    const checkLoggedIn = () => {
        
        try{
            const isLogged = useSelector((state : any) => state.auth.userId);
            if(!isLogged || isLogged == null) return false;
            else return true;
        } catch(err){
            return false;
        }
    }
    const setupSocket = () => {
        if(!socket){
            const userId = useSelector((state : any) => state.auth.userId);
            connectSocket(userId);
        }
    }
    useEffect(()=>{
        
        checkPermissions()
        .then(_ => {
            const res = checkLoggedIn();
            console.log(res);
            if(!res){
                navigation.replace("Login");
            }
            else{
                setupSocket();
                if(socket){
                    if(activeState && activeState.longInterval) return;
                    const longInterval = setInterval(()=>{
                        sendLocation();
                    },60*60*1000);
                    dispatch(setActive({name:"longInterval",intv : longInterval}));
                }
                navigation.replace("App")
            }
        })
        .catch(err => {
            console.log(err)
        })
        // setTimeout(()=>{
        //     navigation.replace("App")
        // },1000)
    },[])
  return (
    <View className='h-screen justify-center items-center'>
      <Text className='text-[30px]'>ProtecTech</Text>
    </View>
  )
}

export default Startup