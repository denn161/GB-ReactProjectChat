import PropTypes from 'prop-types';
import close from './close/close.png'
import styles from './Message.module.css';


const Message = ({message,removeMessage}) => {
  return (
    <li className={styles.item} style={{
        margin: 10,
        border:"2px solid green",
        marginLeft:"auto",
        width: "fit-content",
        padding: 20,borderRadius:10                        }}>
      <span>{message.name}</span>
        <p>{message.message}</p>
       <img onClick={()=>removeMessage(message.id)} src={close} alt="close" className={styles.btn} />
        </li>
  );
}

Message.propTypes = {
    message: PropTypes.object,
    removeMessage:PropTypes.func
}
export default Message;