import { useState } from "react";



export const useInput = (initialState) => {
    const [value, setValue] = useState(initialState);

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onClear = () => {
        setValue("")
    }

    return {
        bind: { value, onChange },
         onClear
    }   


}