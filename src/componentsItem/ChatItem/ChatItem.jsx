


import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import close from './img/close.png'
import styles from './ChatItem.module.css';


const ChatItem = ({chats,removeChat}) => {
  return (
    <ul className={styles.chat__list}>
      {chats.map(({ id,name, img }) =>
        <li className={styles.list__item} key={id}>
          <NavLink to={`/chats/${id}`}>
          <img className={styles.img} src={img} alt="photoChat" />
          <div className={styles.name}>
            {name}
          </div>
          </NavLink>
           <div onClick={()=>removeChat(id)} className={styles.chat__btn}><img src={close} alt="close" /></div>
       
          </li>
      )}      
      </ul>
  );
}

ChatItem.propTypes = {
  nameChat: PropTypes.array,
 
}
export default ChatItem;