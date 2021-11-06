

import React,{useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import ChatItem from '../../componentsItem/ChatItem'
import styles from './ChatList.module.css';
import music from '../../componentsItem/ChatItem/img/music.jpg'
import poezia from '../../componentsItem/ChatItem/img/poezia.jpg'
import tehnologi from '../../componentsItem/ChatItem/img/tehnologi.jpg'
import travel from  '../../componentsItem/ChatItem/img/travel.jpg'

const nameChats = [
  {
    id: Date.now(),
    name:"Музыка",
    img:music
  },
   {
     id: Date.now(),
     name:"Поэзия",
     img:poezia
  },
    {
      id: Date.now(),
      name:"Технологии",      
      img:tehnologi
  },
    {
      id: Date.now(),
      name:"Путешествия",
      img:travel
  },   

]

const ChatList = () => {

  const [nameChat, setNameChat] = useState([])
   
  
  useEffect(() => {
    setNameChat(nameChats)
  },[])
 


  return (
    <Box container className={styles.chatlist__wrapper}>
      <ChatItem nameChat={nameChat}/>
    </Box>
  );
}


ChatList.propTypes = {
  setErrorApi: PropTypes.func
}
export default ChatList;