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

export default ChatPage;
