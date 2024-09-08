import { io } from "socket.io-client";
import { BASE_URL } from "@env";

let socket : any;

const connectSocket = (user_id : any) =>{
    socket= io(BASE_URL, {
        query : {user_id},
    });
    
};

export {socket,connectSocket};