
import PropTypes from 'prop-types';
import MessageItem from '../../componentsItem/MessageItem';
import styles from './MessageList.module.css';


const MessageList = ({ messages }) => {
  
  return (     
       
<div className={styles.messages__container}>
    <MessageItem messages={messages}/>
</div>


);
}


MessageList.propTypes = {
  messages: PropTypes.array

}
export default MessageList;