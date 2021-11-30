import { onValue,push } from "@firebase/database"
// import { BOT_NAME } from "../../components/utils/constants"
import { getChatMessagesListRefById, messagesRef } from "../../services/firebase"
import { hideAlert, initAlert } from "../alertMessage/actions"

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE'
export const DELETE_MESSAGE = 'MESSAGES::DELETE_MESSAGE'

export const SET_MESSAGES = 'MESSAGES::SET_MESSAGES:FIREBASE'

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


export const setMessages = (newMessages) => ({
    type: SET_MESSAGES,
    payload:newMessages
})

export const initMessagesTracking = () => (dispatch) => {
       onValue(messagesRef, (snepMessages) => {
      const newMssg = {};
      snepMessages.forEach((chatMsgSnap) => { 
        newMssg[chatMsgSnap.key] = Object.values(chatMsgSnap.val().messageList || {});
      })
     dispatch(setMessages(newMssg))     
   }) 
}


const forbidden = ['fuck', 'сука','ппц', 'dig','хер','иди в жопу']

export const adderMessageinFirebase = (chatId, newMessage) => (dispatch) => {
    const found = forbidden.filter(word => newMessage.message.includes(word)
    )
    if (found.length) {
        dispatch(initAlert('Вы спамер!Вы нам не подходите, идите домой!'))
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000)
        return
    }
    push(getChatMessagesListRefById(chatId), newMessage)
}


export const addMessageWithReply = (chatId, newMessage) => (dispatch) => {
    dispatch(addMessages(chatId, newMessage)) 
   
}



// let timeout;
// const forbidden = ['fuck', 'сука','ппц', 'dig','хер','иди в жопу']

// export const addMessageWithReply = (chatId, newMessage) => (dispatch) => {
//     dispatch(addMessages(chatId, newMessage))
//      const found = forbidden.filter(word => newMessage.message.includes(word)
//         )
//     if (newMessage.name !== BOT_NAME) {
//         if (timeout) {
//            clearTimeout(timeout)
//         }
//         const botMessage = {
//           id:Math.random().toString(36).substr(2,9),           
//            name: BOT_NAME,
//            message: 'Привет это робот.Напишите что нибудь'
//         }
//      timeout=setTimeout(()=>dispatch(addMessages(chatId,botMessage)),1500)
//     }
//     if (found.length) {
//         clearTimeout(timeout)       
//         setTimeout(() => {
//             dispatch(hideAlert())
//         },2000)     
//     }     
// }




