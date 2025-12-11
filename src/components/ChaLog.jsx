import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';
import './ChatLog.css';

const ChatLog = ({ entries }) => {
  return (
    <section className='chat-log'>
      {entries.map((entries) => (
        <ChatEntry
          key = {entries.id}
          sender = {entries.sender}
          body = {entries.body}
          timeStamp = {entries.timeStamp}
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

};

export default ChatLog;