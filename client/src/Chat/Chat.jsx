import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';

import './Chat.css'; // Create and import a CSS file for styling

function Chat() {
  const [showBot, setShowBot] = useState(false);

  
  const steps = [
    {
      id: 'Greet',
      message: 'Hello, Welcome to our website',
      trigger: 'Ask Name',
    },
    {
      id: 'Ask Name',
      message: 'Please enter your name',
      trigger: 'waiting1',
    },
    {
      id: 'waiting1',
      user: true,
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Hi {previousValue}, Please select your issue',
      trigger: 'issues',
    },
    {
      id: 'issues',
      options: [
        { value: 'React', label: 'React', trigger: 'React' },
        { value: 'Angular', label: 'Angular', trigger: 'Angular' },
        { value: 'R', label: 'R', trigger: 'React' },
      ],
    },
    {
      id: 'React',
      message: 'Thanks for telling your react issue',
      end: true,
    },
    {
      id: 'Angular',
      message: 'Thanks for telling your Angular issue',
      end: true,
    },
  ];

  return (
    <div>
      {showBot && (
        <div className="chatbot-container">
          <ChatBot steps={steps} />
        </div>
      )}
      <div className="chatbot-icon" onClick={() => setShowBot(!showBot)}>
        <img src="https://img.icons8.com/ios-filled/50/000000/chat.png" alt="Chat Icon" />
      </div>
    </div>
  );
}

export default Chat;
