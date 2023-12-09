// Chat.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io.connect('http://localhost:3001/chat');

const Chat = ({ username }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('load messages', (loadedMessages) => {
            setMessages(loadedMessages);
        });

        socket.on('message', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    // const sendMessage = () => {
    //     if (message.trim() !== '') {
    //         const data = { username, message };
    //         socket.emit('message', data);
    //         setMessage('');

    //         // Save the message to the database
    //         axios.post('http://localhost:3001/api/messages', data)
    //             .then((response) => console.log(response))
    //             .catch((error) => console.error(error));
    //     }
    // };

    return (
        <div>
            <div style={{ height: '300px', border: '1px solid #ccc', overflowY: 'auto' }}>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.username}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatArea;
