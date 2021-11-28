import React, { useEffect, useRef, useState } from 'react'
import {useDispatch,useSelector } from 'react-redux'
import ChatItem from '../../componentsItem/ChatItem'
import { useInput } from '../../hooks/useInput'
// import { addChats } from '../../store/chats/action'
import img from '../../componentsItem/ChatItem/img/img1.jpg'
import styles from './ChatList.module.css'
import { deleteChat } from '../../store/chats/action';
import {selectorChats } from '../../store/chats/secelectors'
import { onValue,set } from '@firebase/database'
import { chatsRef, getChatMessagesRefById, getChatRefById } from '../../services/firebase'
// import { imgDefault } from '../utils/constants'


const ChatList = () => { 

const [chats,setChats] = useState([])

const chatList = useSelector(selectorChats)
  
      
 const dispatch = useDispatch()
 
  const [counter, setCounter] = useState(1)

  const { bind, onClear } = useInput("")

  const inputRef = useRef()  


  useEffect(() => {  
    inputRef?.current.focus()
    
     const unsubscribe=onValue(chatsRef, (chatsSnap) => {
          console.log(chatsSnap)
          const newChats = [];
          chatsSnap.forEach((snapshot) => {
         newChats.push(snapshot.val())
          })
       
       setChats(newChats)
        
     })
    
     return unsubscribe
 
  }, [])


    
  const incrementCounter = () => {
    setCounter(counter + 1);
  }

 const removeChats = (id) => {
   dispatch(deleteChat(id))
  //  dispatch(deleteMessages(id,id))
  } 

  const handelSubmit = (e) => {
    e.preventDefault()
    incrementCounter()
    if (bind.value.trim()) {
      const newChat = {
        id: `chat${counter}`,
        img:img,
        name: bind.value        
      }
    // dispatch(addChats(newChat))
      
       set(getChatMessagesRefById(newChat.id),{empty:true})
      
      set(getChatRefById(newChat.id),{
        id: `chat${counter}`,
        img:img,
        name: bind.value        
      })
    
     
    }
    onClear()
    inputRef.current.focus()
  }
  
 
  return (

    <>     
    <div container className={styles.chatlist__wrapper}>      
     <form onSubmit={handelSubmit} className={styles.chatlist__form}>    
      <input ref={inputRef} className={styles.chatlist__input} style={{width:"55%",padding:"0 15px",
      }} type="text" {...bind} />
      <button className={styles.chatlist__btn} type="submit">Добавить</button>    
      </form>   
      {chatList.length ?
        (<ChatItem chats={chats} removeChats={removeChats} />)
        : <p>Список чатов пуст, поробуйте добавить новый чат</p>}    
      </div>
      </>
  );
}

export default ChatList;