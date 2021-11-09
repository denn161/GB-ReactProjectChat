

import React,{useEffect, useRef, useState } from 'react';
import { Box, Button, Grid} from '@material-ui/core';
import ChatItem from '../../componentsItem/ChatItem'
import styles from './ChatList.module.css';
import music from '../../componentsItem/ChatItem/img/music.jpg'
import poezia from '../../componentsItem/ChatItem/img/poezia.jpg'
import tehnologi from '../../componentsItem/ChatItem/img/tehnologi.jpg'
import travel from '../../componentsItem/ChatItem/img/travel.jpg'
 import { useInput } from '../../hooks/useInput';
// import { Navigate } from 'react-router';


const nameChats = [
  {
    id:'chat1',
    name:"Музыка",
    img:music
  },
   {
     id:'chat2',
     name:"Поэзия",
     img:poezia
  },
    {
      id:'chat3',
      name:"Технологии",      
      img:tehnologi
  },
    {
      id:'chat4',
      name:"Путешествия",
      img:travel
  },   

]

const ChatList = () => {

  const [nameChat, setNameChats] = useState([])

  const [counter, setCounter] = useState(5)

  const { bind, onClear } = useInput("")

 const inputRef = useRef()

  
  const incrementCounter = () => {
    setCounter(counter + 1);
  }
 
  const handleButton = () => {
    incrementCounter()
    if (bind.value) {
       const newChat = {
      id: `chat${counter}`,
      name:bind.value
      }
     setNameChats((prevState)=>
      [...prevState, newChat])
     }     
  
    onClear()
     inputRef.current.focus()
  }
 
  const removeChat = (id) => {
   setNameChats((prevState) => prevState.filter(el => el.id !== id))  
  }    

  useEffect(() => {
    setNameChats(nameChats)

    inputRef?.current.focus()   
   
  }, []) 

  return (
    <Box container className={styles.chatlist__wrapper}>
      <Grid container > 
      <input ref={inputRef} className={styles.chatlist__input} style={{width:"55%",padding:"0 15px",
      }} type="text" {...bind} />
      <Button variant={'outlined'} style={{padding:"10px 15px",color:"orange",width:"45%"}} onClick={handleButton}>Добавить чат</Button>
      </Grid>     
      {nameChat.length ?
        (<ChatItem nameChat={nameChat} removeChat={removeChat} />)
        : <p>Список чатов пуст, поробуйте добавить новый чат</p>}
    
    </Box>
  );
}



export default ChatList;