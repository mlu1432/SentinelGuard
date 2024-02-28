import React, { useState, useEffect } from 'react';
import '../styles/components/ChatInterface.css';

const ChatInterface = ({ socket }) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        socket.on('newMessage', (incomingMessage) => {
            setMessages((prevMessages) => [...prevMessages, incomingMessage]);
        });

        return () => socket.off('newMessage');
    }, [socket]);

    /**
     * Handles sending a new message.
     * @param {Event} e - The submit event.
     */
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const messageToSend = {
            id: messages.length + 1,
            text: newMessage,
            sender: 'You',
            timestamp: new Date().toISOString(),
        };

        socket.emit('sendMessage', messageToSend);

        setMessages((prevMessages) => [...prevMessages, messageToSend]);
        setNewMessage('');
    };

    return (
        <div className="chat-interface">
            <div className="messages-container">
                {messages.map((msg) => (
                    <div key={msg.id} className="message">
                        <span className="message-sender">{msg.sender}:</span>
                        <span className="message-text">{msg.text}</span>
                        <span className="message-timestamp">{msg.timestamp}</span>
                    </div>
                ))}
            </div>
            <form className="send-message-form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="message-input"
                />
                <button type="submit" className="send-button">Send</button>
            </form>
        </div>
    );
};

export default ChatInterface;