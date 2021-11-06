
import React, {useEffect, useRef} from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { USER_NAME } from '../utils/constants'
import {useInput} from '../../hooks/useInput'
import styles from './Form.module.css'

const Form = ({ addMessage }) => {
  
  const { bind, onClear } = useInput("")
  
  const inputRef = useRef()

    const handleSubmit = (e) => {
    e.preventDefault()
      addMessage({
       id: Math.random().toString(36).substr(2, 9),
       name:USER_NAME,
       message:bind.value,
      })       
      onClear()
      inputRef.current.focus()
    }
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }
  
  useEffect(() => {
  
    inputRef?.current.focus()
  },[])
  return (
    <form className={styles.form}>
      <Grid container
        direction={"column"}
        alignItems={"flex-end"}
        style={{ width: '80%', marginTop: 10 }}>
        <TextField
          label="Введите сообщение"
          variant={'outlined'}
          fullWidth
          rowsMax={2}
           {...bind}
          onKeyDown={handleKeyPress}
          inputRef={inputRef} />
        <Button
          variant="outlined"
          onClick={handleSubmit}
          style={{ marginTop: 20, padding: "10px 20px", color: "red", borderColor: "orange" }}>
          Отправить
        </Button>
      </Grid>      
       </form>   
  );
}



export default Form;