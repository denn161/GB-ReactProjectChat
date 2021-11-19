
export const TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX'
export const CHANGE_VALUE = 'PROFILE::CHANGE_VALUE'
export const ARRAY_NAMES = 'PROFILE::ARRAY_NAMES'

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



