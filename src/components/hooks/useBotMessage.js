
import { useEffect} from "react"

export const useBotMessage = (messages, setMessages, userName, botName) => {
      useEffect(() => {  
        if(messages.length>0) {
          if(messages[messages.length-1].name === userName){
            const newMessage = {
              message: 'Привет это робот.Напишите что нибудь', 
              name: botName
            } 
            setTimeout(() =>setMessages([...messages, newMessage]), 1500)
          }
        }
 },[messages])
    
  
}

 