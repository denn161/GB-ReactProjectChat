
import PropTypes from 'prop-types';
import MessageItem from '../../componentsItem/MessageItem';
import styles from './MessageList.module.css';


const MessageList = ({ messages, removeMessage }) => {
  
 
  
  return (     
       
<div className={styles.messages__container}>
    <MessageItem messages={messages} removeMessage={removeMessage}/>
</div>


);
}

MessageList.propTypes = {
  messages: PropTypes.array,
  removeMessage:PropTypes.func
}
export default MessageList;