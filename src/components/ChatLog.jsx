import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries, localColor, remoteColor}) => {
  return (
    <section className='chat-log'>
      {entries.map((entry) => (
        <ChatEntry
          key = {entry.id}
          sender = {entry.sender}
          body = {entry.body}
          timeStamp = {entry.timeStamp}
          isLocal={entry.sender !== 'Estragon'}
          localColor={localColor}
          remoteColor={remoteColor}
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
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  localColor: PropTypes.string.isRequired,
  remoteColor: PropTypes.string.isRequired,

};

export default ChatLog;