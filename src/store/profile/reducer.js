import {AUTH_PROFILE_SIGN, AUTH_PROFILE_SIGNOUT, CHANGE_VALUE} from "./actions";

// const initialState = {
//     checkbox: false,
//     name:'Показать текст'
// }

const initialState = {
    name: 'default name',
    names: [],
    auth:null
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                name: action.payload,
                names:[...state.names,action.payload]

            }
          case AUTH_PROFILE_SIGN:
            return {
                ...state,
                auth:true           
            }
        case AUTH_PROFILE_SIGNOUT:
            return {
                ...state,
                auth:false           
            }
       
        default:
            return state;
    }
}