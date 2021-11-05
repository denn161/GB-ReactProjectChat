


import PropTypes from 'prop-types';
import styles from './MessageItem.module.css';


const MessageItem = ({messages}) => {
  return (
    <>
      <ul className={styles.messages__list}>
    {messages.map(({ id, name, message }) =>
      <li key={id} style={{
        margin: 10,
        border:"2px solid green",
        marginLeft:"auto",
        width: "fit-content",
        padding: 10,borderRadius:10                        }}>
            <span>{name}</span>
            <p>{message}</p>
        </li>

    )}
</ul>
      
      </>
  );
}


MessageItem.propTypes = {
  messages: PropTypes.array
}
export default MessageItem;