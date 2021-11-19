export const ADD_CHAT = 'CHATS::ADD_CHAT'
export const DELETE_CHAT = 'CHATS::DELETE_CHAT'



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