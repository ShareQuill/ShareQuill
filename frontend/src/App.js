import React from 'react';
import { useParams } from 'react-router-dom';
import ChatArea from '../components/Chat/ChatArea';
import { useAuth } from '../components/auth-context'; // Import the useAuth hook

const ChatPage = () => {
  const { _id } = useParams();
  const { userId } = useAuth(); // Use the useAuth hook to get the userId

  return (
    <div>
      <h1>Chat Page</h1>
      <ChatArea chatId={_id} userId={userId} />
    </div>
  );
};
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket_url = 'http://localhost:3001';

const App = () => {
  const [username, setUsername] = useState('');
  const [shouldStream, setShouldStream] = useState(false);

  const socket = io(socket_url, {
    auth: { username, password: 'secret' },
    path: '/chat',
  });

  const connectError = (err) => {
    console.log(`The connection failed! ${err}`);
  };

  const connectSuccess = () => {
    console.log('Connected!');
    if (shouldStream) {
      streamMessages();
    }
  };

  const onSocketId = (data) => {
    console.log(`Received socketid: "${data}"`);
  };

  const onStreamMessage = (data) => {
    const currentTimestamp = new Date().toISOString();
    console.log(`Received event: "${data}"`);
    console.log(currentTimestamp);
  };

  const onMessage = (data) => {
    console.log('Received message: ', data);
  };

  const streamMessages = () => {
    const currentTimestamp = new Date().toISOString();
    const sendMessageCommand = {
      destId: '',//email
      payload: {
        timestamp: currentTimestamp,
        content: 
      },
    };
    socket.emit('send-message', sendMessageCommand);
  };

  useEffect(() => {
    socket.on('connect_error', connectError);
    socket.on('connect', connectSuccess);
    socket.on('socketid', onSocketId);
    socket.on('stream-message', onStreamMessage);
    socket.on('message', onMessage);

    return () => {
      socket.disconnect();
    };
  }, [username, shouldStream]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleShouldStreamChange = (e) => {
    setShouldStream(e.target.checked);
  };

  const handleConnect = () => {
    socket.connect();
  };

  return (
    <div>
      <label>
        Enter username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Should stream?:
        <input type="checkbox" checked={shouldStream} onChange={handleShouldStreamChange} />
      </label>
      <br />
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
};

export default App;
