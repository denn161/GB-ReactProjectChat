import { ADD_MESSAGE } from "../messages/actions"

export const ALERT_INIT = 'ALERT::ALERT_INIT'
export const ALERT_HIDE = 'ALERT::ALERT_HIDE'


export const initAlert = (text) => ({
    type: ALERT_INIT,
    payload:text    
})


export const hideAlert = () => ({
    type: ALERT_HIDE,       
})


export const initAlertWithRiply = (text, newMessage) => (dispatch)=> {
  
           if (!newMessage.message) {
         dispatch(initAlert(text))
    setTimeout(() => {
       dispatch(hideAlert()) 
    },2000)
    } 
}

const forbidden = ['fuck', 'сука','ппц', 'dig','хер','иди в жопу']

export function forbiddenWordsMiddleware({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === ADD_MESSAGE) {
                const found = forbidden.filter(word => action.payload.newMessage.message.includes(word))                
                if (found.length) {
                  return dispatch(initAlert("Вы спамер!Вы нам не подходите!Идите домой"))                 
                }
                setTimeout(() => {
                    dispatch(hideAlert())
                }, 2000)
             
            }
            return next(action)
        }
    }


}








