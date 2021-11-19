import { ALERT_HIDE, ALERT_INIT } from "./actions"

const initialAlert = {
    alert:false
}

export const reducerAlert = (state = initialAlert, action) => {
    switch (action.type) {
        case ALERT_INIT:
            return {
                ...state,
                alert:action.payload
            }
        case ALERT_HIDE:
            return {
                ...state,
                alert:false
            }         
    
        default:
          return state
    }
}