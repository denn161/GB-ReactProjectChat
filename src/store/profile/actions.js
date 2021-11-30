import { auth } from "../../services/firebase"

export const TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX'
export const CHANGE_VALUE = 'PROFILE::CHANGE_VALUE'
export const ARRAY_NAMES = 'PROFILE::ARRAY_NAMES'
export const AUTH_PROFILE_SIGN = 'AUTH_PROFILE::AUTH'
export const AUTH_PROFILE_SIGNOUT = 'AUTH_PROFILE::SIGNOUT'



export const signInProfile = () => ({
    type:AUTH_PROFILE_SIGN
})

export const signOutProfile = () => ({
    type:AUTH_PROFILE_SIGNOUT
})


export const autchUsersInProject = () => (dispatch) => {
    auth?.onAuthStateChanged((user) => {
      if (user) {
      dispatch(signInProfile())
      } else {
        dispatch(signOutProfile())
       }
   })    
}




export const toggleCheckbox = {
    type:TOGGLE_CHECKBOX
}

export const changeValueStore = (text) => ({
    type: CHANGE_VALUE,
    payload:text
})

// export const changeArrayStoreNames = (value) => {
//           return {     
//         type: ARRAY_NAMES,
//         payload:value
        
//     }  
    
  
// }



