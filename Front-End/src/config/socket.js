import { io } from 'socket.io-client';

const URL = import.meta.env.VITE_SOCKET_URL;

// We export a socket instance but we configure it with autoConnect: false.
// This prevents the socket from attempting a connection when the file is imported.
export const socket = io(URL, {
  autoConnect: false,
  withCredentials: true,
});
