

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.css';




const Message = ({ text,flag}) => {   
    
    return (    
        
      <div >  
      <h1 className={styles.text} style={{color:flag?"orange":"darkgreen"}}>{text}</h1>   
      </div>
  );
}


Message.propTypes = {
  text: PropTypes.string
}
export default Message;