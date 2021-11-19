
import { ADD_CHAT,DELETE_CHAT } from "../chats/action";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialMessages = {
      
}
export const reducerMessages = (state = initialMessages, {payload,type}) => {
    switch (type) {
        case ADD_MESSAGE:
            return {
            ...state, [payload.chatId]: [...state[payload.chatId],
                payload.newMessage]
            }        
        
        case DELETE_MESSAGE: {
            const newMessages = {...state}
            newMessages[payload.chatId] = newMessages[payload.chatId].filter(({ id }) => id !== payload.idToDelete)
              return newMessages          

        }
        case ADD_CHAT:
            return {
                ...state,
                [payload.chatId]:[]
            }
        case DELETE_CHAT: {
            const newMessages = { ...state }
            delete newMessages[payload]
            return newMessages
        }      
            
            
    
        default:
           return state
    }
}
