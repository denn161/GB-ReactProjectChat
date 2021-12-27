import { onValue,set } from "@firebase/database"
import { chatsRef, getChatMessagesRefById, getChatRefById } from "../../services/firebase"

export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'

export const SET_CHATS = 'CHATS::SET_CHATS_FIREBASE'


export const addChats = (newChat) => ({ 
    type: ADD_CHAT,
    payload: {
        chat: newChat,
        chatId:newChat.id
    } 
})

export const deleteChat = (id) => ({
        type: DELETE_CHAT,
        payload:id    
})
export const setChats = (chats) => {
    return {
        type: SET_CHATS,
        payload:chats
     }
}
export const initChatTracking = () => (dispatch) => {       
    onValue(chatsRef, (chatsSnap) => {
          console.log(chatsSnap)
          const newChats = [];
          chatsSnap.forEach((snapshot) => {
         newChats.push(snapshot.val())
          })       
     dispatch(setChats(newChats))        
     })
}

export const addNewChatinFirebase = (newChat) => (dispatch) => {
   set(getChatRefById(newChat.id),newChat)
   set(getChatMessagesRefById(newChat.id),{ empty: true })
  
}

// export const deleteChatsOfFirebase = (id) => (dispatch) => {
//     set(getChatRefById(id),null)
// }




