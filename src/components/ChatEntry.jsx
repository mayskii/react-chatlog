import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import './ChatEntry.css';

const ChatEntry = ({sender, body, timeStamp, isLocal, localColor, remoteColor, liked, toggleLikes, id }) => {

  return (
    <article className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble" style={{ color: isLocal ? localColor : remoteColor }}>
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time = {timeStamp}/>
        </p>
        <button className="like" onClick={() => toggleLikes(id)}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLocal: PropTypes.bool,
  localColor: PropTypes.string,
  remoteColor: PropTypes.string,
  liked: PropTypes.bool.isRequired,
  toggleLikes: PropTypes.func,
  id: PropTypes.number.isRequired,
};

export default ChatEntry;
