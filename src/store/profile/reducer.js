import { ARRAY_NAMES, CHANGE_VALUE} from "./actions";

// const initialState = {
//     checkbox: false,
//     name:'Показать текст'
// }

const initialState = {
    name: 'default name',
    names:[]
}


export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_VALUE:
            return {
                ...state,
                name: action.payload,
               

            }
        case ARRAY_NAMES:
            return {
                ...state,
                names:[...state.names,action.payload]
            }
    
        default:
            return state;
    }
}