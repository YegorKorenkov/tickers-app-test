import { io, Socket } from 'socket.io-client';

let socket: Socket;
const socketUrl = process.env.REACT_APP_API_URL;

function getSocket() {
  if (!socket && socketUrl) {
    socket = io(socketUrl);
  }
  return socket;
}

export { getSocket };
