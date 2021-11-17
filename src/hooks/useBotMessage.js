
import { useEffect} from "react"

export const useBotMessage = (messages, addMessage,botName,chatId) => {
  useEffect(() => {
        
        if(messages[chatId]?.length&&messages[chatId]?.[messages[chatId]?.length-1].name !== botName) {
        
          const newMessage = {
                 id:Math.random().toString(36).substr(2,9),           
                 name: botName,
                 message: 'Привет это робот.Напишите что нибудь'
            } 
          const time = setTimeout(() => addMessage(newMessage), 1500)
            return()=>clearTimeout(time)          
        }
 },[messages,addMessage,botName,chatId])    
  
}

 