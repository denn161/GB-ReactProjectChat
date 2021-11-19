import {CHANGE_VALUE} from "./actions";

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
                names:[...state.names,action.payload]

            }
       
        default:
            return state;
    }
}