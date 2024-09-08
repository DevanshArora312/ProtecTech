import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SideDrawer from '../components/SideDrawer';
import {socket} from '../socket';
export const Dashboard = () => {

    useEffect(()=>{
        if(socket){
            socket.on("updateAlerts",({alerts}) => {
                console.log(alerts);
            })
        }
      return () => {
          socket?.off("new_group_message");
      }
    }, [socket]);
    return (
        <div className="min-h-full">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <div className="flex flex-row items-start min-h-[90vh] w-full">
                <div>
                    <SideDrawer />
                </div>
                <div className="w-full mt-4 mx-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
