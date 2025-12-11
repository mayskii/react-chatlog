import React, { useState } from 'react';
import ChatLog from './components/ChatLog';
import messages from './data/messages.json';
import ColorChoice from './components/ColorChoice';
import './App.css';



const App = () => {

  const [localColor, setLocalColor] = useState('#ffffe0');
  const [remoteColor, setRemoteColor] = useState('#ffffe0');

  return (
    <div id="App">
      <header>
        <h1>
          Chat Between{' '}
          <span className='local-name'>Vladimir</span> and{' '}
          <span className='remote-name'>Estragon</span>
        </h1>
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
        />
      </main>
    </div>
  );
};

export default App;
