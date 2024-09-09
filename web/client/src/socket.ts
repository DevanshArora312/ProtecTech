import { io, Socket } from 'socket.io-client';

export let socket: Socket;

export const FullDuplexConnection = (stationid: string) => {
    socket = io('ws://localhost:4000', {
        query: {
            station_id: stationid
        }
    });
}
