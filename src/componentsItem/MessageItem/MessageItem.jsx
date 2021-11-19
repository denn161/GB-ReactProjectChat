
import PropTypes from 'prop-types';
import close from '../ChatItem/img/close/close.png'
import styles from './MessageItem.module.css';

const MessageItem = ({messages,removeMessage}) => {
  return (
    <>
      <ul className={styles.messages__list}>
    {messages.map(({ id, name, message }) =>
      <li className={styles.item} key={id} style={{
        margin: 10,
        border:"2px solid green",
        marginLeft:"auto",
        width: "fit-content",
        padding: 20,borderRadius:10                        }}>
            <span>{name}</span>
        <p>{message}</p>
       <img onClick={()=>removeMessage(id)} src={close} alt="close" className={styles.btn} />
        </li>

    )}
</ul>
      
      </>
  );
}

MessageItem.propTypes = {
  messages: PropTypes.array,
  removeMessage:PropTypes.func
}
export default MessageItem;