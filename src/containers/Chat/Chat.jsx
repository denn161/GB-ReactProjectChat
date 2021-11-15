
import React, { useCallback, useState } from "react";
// import PropTypes from 'prop-types';
import Form from "../../components/Form";
import { BOT_NAME} from "../../components/utils/constants";
import { useBotMessage } from "../../hooks/useBotMessage";
import MessagePage from "../../components/MessageList";
import ChatList from "../../components/ChatLIst/ChatList";
import styles from './Chat.module.css';
import { Box } from "@material-ui/core";
import { Navigate, useParams } from "react-router";


const initialState = {
   chat1: [],
   chat2: [],
   chat3: [],
   chat4: [],
   
}

const Chat = () => {

  
  const [messages, setMessages] = useState(initialState);
      
  const { chatId } = useParams();   
  
  const addMessage = useCallback((newMessage) => {
    if (newMessage.message) {
             setMessages((prevMessages)=>({
        ...prevMessages,[chatId]:[...prevMessages[chatId],newMessage],        
      }))
        }
   
  }, [chatId])
  
  useBotMessage(messages, addMessage, BOT_NAME, chatId)
  
  if (!messages[chatId]) {
      return <Navigate to="/found" replace/>
    }

  return (
    <div className="container">
      <div className={styles.inner}>
        <ChatList/>
        <Box container style={{width:"70%",height:"70vh"}}>
       <MessagePage messages={messages[chatId]}/>
      <Form addMessage={addMessage} chatId={chatId}/>   
        </Box>      
      </div>        
   </div>   
  );
}

// Chat.propTypes = {
//   setErrorApi: PropTypes.func
// }
export default Chat;