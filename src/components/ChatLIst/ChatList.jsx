

import React,{useEffect, useRef, useState } from 'react';

import ChatItem from '../../componentsItem/ChatItem'
import styles from './ChatList.module.css';
import { useInput } from '../../hooks/useInput';
 import travel from '../../componentsItem/ChatItem/img/travel.jpg'


// import { Navigate } from 'react-router';

const ChatList = ({nameChat,addChat,removeChat}) => { 

  const [counter, setCounter] = useState(5)

  const { bind, onClear } = useInput("")

  const inputRef = useRef()

 

    
  const incrementCounter = () => {
    setCounter(counter + 1);
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    incrementCounter()
    if (bind.value) {
      const newChat = {
        id: `chat${counter}`,
        img:travel,
        name: bind.value
        
      }
          
      addChat(newChat)
     
    }
    onClear()
    inputRef.current.focus()
  } 

  useEffect(() => {
  
    inputRef?.current.focus()   
      
  }, []) 

  return (
   
    <div container className={styles.chatlist__wrapper}>
     <form onSubmit={handelSubmit} className={styles.chatlist__form}>    
      <input ref={inputRef} className={styles.chatlist__input} style={{width:"55%",padding:"0 15px",
      }} type="text" {...bind} />
      <button className={styles.chatlist__btn} type="submit">Добавить</button>    
      </form>
      

      {nameChat.length ?
        (<ChatItem chats={nameChat} removeChat={removeChat} />)
        : <p>Список чатов пуст, поробуйте добавить новый чат</p>}
    
    </div>
   
  );
}



export default ChatList;