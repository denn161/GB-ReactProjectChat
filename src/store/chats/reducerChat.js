

import { ADD_CHAT, DELETE_CHAT } from "./action";

const initialState = [
   
];

export const reducerChats = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return [...state,action.payload.chat]
        case DELETE_CHAT:
            return state.filter(({id})=> id !==action.payload)
               
        default:
          return state
    }
    
}