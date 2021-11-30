

import { ADD_CHAT, DELETE_CHAT, SET_CHATS } from "./action";

const initialState = [
   
];

export const reducerChats = (state = initialState, {type,payload}) => {
    switch (type) {
        case ADD_CHAT:
            return [...state, payload.chat]
        case SET_CHATS:
            return payload
        case DELETE_CHAT:
            return state.filter(({id})=> id !==payload)
               
        default:
          return state
    }
    
}