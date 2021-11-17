
import React,{useCallback} from "react";
// import PropTypes from 'prop-types';
import Form from "../../components/Form";
import { BOT_NAME} from "../../components/utils/constants";
import { useBotMessage } from "../../hooks/useBotMessage";
import MessagePage from "../../components/MessageList";
import ChatList from "../../components/ChatLIst/ChatList";
import styles from './Chat.module.css';
import { Box } from "@material-ui/core";
import { useParams,Navigate } from "react-router";


const Chat = ({messages,setMessages,nameChat,addChat,removeChat,initialChats}) => {
       
  const { chatId } = useParams();  

   const addMessage = useCallback((newMessage) => {
    if (newMessage.message) {
             setMessages((prevMessages)=>({
        ...prevMessages,[chatId]:[...prevMessages[chatId],newMessage],        
      }))
        }
   
  }, [chatId,setMessages])
  
  useBotMessage(messages, addMessage, BOT_NAME, chatId)
   
 
  
  if (!messages[chatId]) {
      return <Navigate to="/chats" replace/>
  }

 
  return (
    <div className="container">
      <div className={styles.inner}>
        <ChatList nameChat={nameChat}
                  addChat={addChat}
                  removeChat={removeChat}
                 initialChats={initialChats}/>
        <Box
          container
          style={{ width: "70%", height: "70vh" }}>
          <MessagePage
            messages={messages[chatId]} />
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