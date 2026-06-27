import React, { createContext, useContext, useEffect, useState } from 'react';
import { socket } from '../../config/socket';
import { useAuth } from '../auth/useAuth';

const SocketContext = createContext(null);

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const { user } = useAuth();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Only connect if there is an authenticated user
    if (user) {
      console.log('User authenticated, connecting Socket.IO...');
      socket.connect();

      const onConnect = () => {
        console.log('Socket.IO connected successfully');
        setIsConnected(true);
      };

      const onDisconnect = () => {
        console.log('Socket.IO disconnected');
        setIsConnected(false);
      };

      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);

      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
        // We do NOT disconnect the socket here, we only disconnect when user becomes null
      };
    } else {
      // If user logs out (user becomes null), disconnect
      console.log('No user, ensuring socket is disconnected...');
      socket.disconnect();
      setIsConnected(false);
    }
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
