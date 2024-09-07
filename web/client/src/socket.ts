import {io, Socket} from 'socket.io-client';

export let socket : Socket;

export const FullDuplexConnection = async()=>{
    socket = io('ws://localhost:4000');
}

