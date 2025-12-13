import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';
import { useState } from 'react';
import './ChatEntry.css';

const ChatEntry = ({sender, body, timeStamp, isLocal, localColor, remoteColor }) => {

  const [liked, setLiked] = useState(false);

  const handleLikedClick = () => {
    setLiked(!liked);
  }

  return (
    <article className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble" style={{ color: isLocal ? localColor : remoteColor }}>
        <p>{body}</p>
        <p className="entry-time">
          <TimeStamp time = {timeStamp}/>
        </p>
        <button className="like" onClick={handleLikedClick}>{liked ? '❤️' : '🤍'}</button>
      </section>
    </article>
  );
};

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  isLocal: PropTypes.bool.isRequired,
  localColor: PropTypes.string.isRequired,
  remoteColor: PropTypes.string.isRequired,
};

export default ChatEntry;
