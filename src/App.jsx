import React, { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import ColorChoice from './components/ColorChoice';
import './App.css';



const App = () => {
  const [localColor, setLocalColor] = useState('#000000ff');
  const [remoteColor, setRemoteColor] = useState('#000000ff');
  const [likedMessages, setLikedMessages] = useState([]);

  const toggleLikes = (id) => {
    setLikedMessages((prev) => {
      if (prev.includes(id)){
        return prev.filter((messageId) => messageId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between{' '}
          <span className='local-name'>Vladimir</span> and{' '}
          <span className='remote-name'>Estragon</span>
        </h1>
        <p className="liked-count">{likedMessages.length} ❤️s</p>
        <div className='color-controls'>
          <div className='color-group' style={{ '--text-color': localColor }}>
            <span>Vladimir</span>
            <ColorChoice setColorCallback={setLocalColor} />
          </div>

          <div className='color-group' style={{ '--text-color': remoteColor }}>
            <span>Estragon</span>
            <ColorChoice setColorCallback={setRemoteColor} />
          </div>
        </div>
      </header>
      <main>
        <ChatLog
          entries={messages}
          localColor={localColor}
          remoteColor={remoteColor}
          likedMessages={likedMessages}
          toggleLikes={toggleLikes}
        />
      </main>
    </div>
  );
};

export default App;
