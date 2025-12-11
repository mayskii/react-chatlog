import './App.css';
// import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChaLog';
import messages from './data/messages.json';

const App = () => {

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
