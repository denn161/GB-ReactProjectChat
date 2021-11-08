


import PropTypes from 'prop-types';
import styles from './ChatItem.module.css';


const ChatItem = ({nameChat}) => {
  return (
    <ul className={styles.chat__list}>
      {nameChat.map(({ id,name, img }) =>
          <li className={styles.list__item} key={id}>
          <img className={styles.img} src={img} alt="" />
          <div className={styles.name}>
            {name}
          </div>
          </li>
      )}      
      </ul>
  );
}

ChatItem.propTypes = {
  nameChat: PropTypes.array
}
export default ChatItem;