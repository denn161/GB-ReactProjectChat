
import React,{useCallback} from "react";



import { Box } from "@material-ui/core";
import { useParams, Navigate } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import Form from "../../components/Form";
import AlertPage from '../../components/Alert'
import{selectAlert} from '../../store/alertMessage/selectors'
import { selectMessages } from "../../store/messages/selectors";
import MessagePage from "../../components/MessageList";
import ChatList from "../../components/ChatLIst/ChatList";
import { addMessageWithReply, deleteMessages } from "../../store/messages/actions";
import {initAlertWithRiply} from '../../store/alertMessage/actions'
import styles from './Chat.module.css';



const Chat = () => { 

  const messages = useSelector(selectMessages)
  
  const alertText = useSelector(selectAlert)
  
 
  const dispatch = useDispatch()
       
  const { chatId } = useParams();
  
   const removeMessage =  useCallback((id) => {
    dispatch(deleteMessages(chatId,id))
  },[dispatch,chatId]
)
   const addMessage = useCallback((newMessage) => {
     if (newMessage.message.trim()) {
      dispatch(addMessageWithReply(chatId,newMessage))
     
     }
       dispatch(initAlertWithRiply('Поле сообщения не может быть пустым',newMessage))
       
  }, [dispatch,chatId]) 
   
 
  
  if (!messages[chatId]) {
      return <Navigate to="/chats" replace/>
  }
  
  return (
    <div className="container">
      {alertText && <AlertPage text={alertText} />}
      
      <div className={styles.inner}>
        <ChatList/>
        <Box
          container
          style={{ width: "70%", height: "70vh" }}>
          <MessagePage
            messages={messages[chatId]}
            removeMessage={removeMessage}/>
          <Form
            addMessage={addMessage}
            chatId={chatId} />
        </Box>      
      </div>        
   </div>   
  );
}

// Chat.propTypes = {
//   setErrorApi: PropTypes.func
// }
export default Chat;