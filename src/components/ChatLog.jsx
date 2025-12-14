import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, localColor, remoteColor, likedMessages= [], toggleLikes = () => {}}) => {
  return (
    <section className='chat-log'>
      {entries.map((entry) => (
        <ChatEntry
          key = {entry.id}
          id={entry.id}
          sender = {entry.sender}
          body = {entry.body}
          timeStamp = {entry.timeStamp}
          isLocal={entry.sender !== 'Estragon'}
          localColor={localColor}
          remoteColor={remoteColor}
          liked={likedMessages.includes(entry.id)}
          toggleLikes={toggleLikes}
        />
      ))}
    </section>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string,
  likedMessages: PropTypes.array,
  toggleLikes: PropTypes.func,
};

export default ChatLog;