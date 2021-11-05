
import React, { useCallback, useState } from "react";
// import PropTypes from 'prop-types';
import Form from "../../components/Form";
import { BOT_NAME } from "../../components/utils/constants";
import { useBotMessage } from "../../hooks/useBotMessage";
import MessagePage from "../../components/MessageList";
import ChatList from "../../components/ChatLIst/ChatList";
import styles from './Chat.module.css';
import { Box } from "@material-ui/core";



const Chat = () => {

 const [messages, setMessages] = useState([]);
  
  const addMessage = useCallback((newMessage) => {
    if (newMessage.message) {
             setMessages((prevMessages)=>[
        ...prevMessages,
        newMessage
      ])
        }
   
    },[])

  useBotMessage(messages,addMessage,BOT_NAME) 

  return (
    <div className="container">
      <div className={styles.inner}>
        <ChatList />
        <Box container style={{width:"70%",height:"70vh"}}>
       <MessagePage messages={messages}/>
      <Form addMessage={addMessage} />   
        </Box>      
      </div>        
   </div>   
  );
}

// Chat.propTypes = {
//   setErrorApi: PropTypes.func
// }
export default Chat;