
import React, { useCallback, useEffect, useState } from "react";
import Form from "./components/Form/Form";
import { USER_NAME, BOT_NAME } from "./components/constants/constants";
import { useBotMessage } from "./components/hooks/useBotMessage";
import MessagePage from "./components/MessagePage";

function App() {
  const [messages, setMessages] = useState([]);  
  const addMessage = useCallback((message) => {
    if (message) {
      const newMessage = {
        id: Math.random().toString(36).substr(2, 9),
        name:USER_NAME,
        message,
       }
      setMessages([
        ...messages,
        newMessage
      ])
    }
  }, [messages])

  useBotMessage(messages,setMessages,USER_NAME,BOT_NAME)
 
  return ( 
    <div className="container">
      <MessagePage messages={messages}/>
      <Form addMessage={addMessage} />       
      
   </div>   
  );
}

export default App;
