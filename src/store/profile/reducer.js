import {AUTH_PROFILE_SIGN, AUTH_PROFILE_SIGNOUT, CHANGE_VALUE} from "./actions";


const initialState = {
    name: 'default name',
    names: [],
    auth: null,
 
}

export const profileReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case CHANGE_VALUE:
            return {
                ...state,
                name: payload,
                names:[...state.names,payload]

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