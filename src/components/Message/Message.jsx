

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';



const Message = ({ text, colored }) => {
    
    
    return (            
      <div className="alert alert-danger message">
      <p className={styles.text} style={{color:colored?"orange":"darkgreen"}}>{text}</p>   
      </div>
  );
}


Message.propTypes = {
  text: PropTypes.string
}
export default Message;