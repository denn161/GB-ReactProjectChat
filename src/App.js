
import React, { useCallback, useState } from "react";
import Form from "./components/Form/Form";
import { BOT_NAME } from "./components/utils/constants";
import { useBotMessage } from "./hooks/useBotMessage";
import MessagePage from "./components/MessagePage";

function App() {
  const [messages, setMessages] = useState([]);
  
  const addMessage = useCallback((newMessage) => {  
      setMessages((prevMessages)=>[
        ...prevMessages,
        newMessage
      ])
    },[])

  useBotMessage(messages,addMessage,BOT_NAME)
 
  return ( 
    <div className="container">
      <MessagePage messages={messages}/>
      <Form addMessage={addMessage} />       
      
   </div>   
  );
}

export default App;
