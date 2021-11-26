import { BOT_NAME } from "../../components/utils/constants"
import { hideAlert } from "../alertMessage/actions"

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE'

export const addMessages = (chatId,newMessage) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,newMessage
    }
})

export const deleteMessages = (chatId,idToDelete) => ({
    type: DELETE_MESSAGE,
    payload:{chatId,idToDelete}    
})

let timeout;
const forbidden = ['fuck', 'сука','ппц', 'dig','хер','иди в жопу']

export const addMessageWithReply = (chatId, newMessage) => (dispatch) => {
    dispatch(addMessages(chatId, newMessage))
     const found = forbidden.filter(word => newMessage.message.includes(word)
        )
    if (newMessage.name !== BOT_NAME) {
        if (timeout) {
           clearTimeout(timeout)
        }
        const botMessage = {
          id:Math.random().toString(36).substr(2,9),           
           name: BOT_NAME,
           message: 'Привет это робот.Напишите что нибудь'
        }
     timeout=setTimeout(()=>dispatch(addMessages(chatId,botMessage)),1500)
    }
    if (found.length) {
        clearTimeout(timeout)       
        setTimeout(() => {
            dispatch(hideAlert())
        },2000)     
    }     
}


