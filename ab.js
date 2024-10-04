// src/App.js
import React, { useState } from 'react';
import Frontend from './Frontend';
import Chat from './Chat';

function App() {
  const [showChat, setShowChat] = useState(false);

  const handleChatButtonClick = () => {
    setShowChat(true);
  };

  return (
    <div>
      {!showChat ? (
        <Frontend onChatButtonClick={handleChatButtonClick} />
      ) : (
        <Chat />
      )}
    </div>
  );
}

export default App;