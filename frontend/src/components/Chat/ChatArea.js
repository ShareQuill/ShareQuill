import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageSelf from "./MessageSelf";
import MessageOthers from "./MessageOthers";

const ChatArea = ({ chatId, userId }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:6000/chat/${chatId}/messages`);
                setMessages(response.data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchMessages();
    }, [chatId, newMessage]); // Include newMessage as a dependency if needed

    const handleSendMessage = async () => {
        try {
            await axios.post(`http://localhost:6000/chat/${chatId}/messages`, {
                content: newMessage,
                chatId,
            });

            // No need to fetch messages here; useEffect will handle it

            setNewMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <div>
            <div>
                {messages.map((message) => (
                    <div key={message._id}>
                        {message.sender._id === userId ? (
                            <MessageSelf props={message} />
                        ) : (
                            <MessageOthers props={message} />
                        )}
                    </div>
                ))}
            </div>
            <div>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatArea;
