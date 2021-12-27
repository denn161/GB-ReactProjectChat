
import PropTypes from 'prop-types';

import Message from './Message';
import styles from './MessageItem.module.css';

const MessageItem = (props) => {
  const { messages = [], removeMessage } = props
  
  if(!messages.length) return null
            
  return (
    <>
      <ul className={styles.messages__list}>
    {messages.map((message) =>
      <Message key={message.id} message={message}
        removeMessage={removeMessage} />

        )      
        
        }
</ul>
      
      </>
  );
}

MessageItem.propTypes = {
  messages: PropTypes.array,
  removeMessage:PropTypes.func
}
export default MessageItem;