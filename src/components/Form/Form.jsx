
import React, { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import { TextField, Button, Grid } from '@material-ui/core'
import { USER_NAME } from '../utils/constants'
import {useInput} from '../../hooks/useInput'
import styles from './Form.module.css'
import { ThemeContext } from '../utils/ThemeContext';

const Form = ({ addMessage,chatId }) => {

  const { color, hendleChangeColor} = useContext(ThemeContext);
     

  
  const { bind, onClear } = useInput("")
  
  const inputRef = useRef()

    const handleSubmit = (e) => {
      e.preventDefault()
      hendleChangeColor();
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
    if (chatId) {
     inputRef?.current.focus() 
    } 
    
  },[chatId])

  
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
          style={{ marginTop: 20, padding: "10px 20px", color:`${color}`, borderColor: "orange" }}>
          Отправить
        </Button>
      </Grid>      
       </form>   
  );
}

Form.propTypes = {
  addMessage: PropTypes.func,
  chatId:PropTypes.string
}

export default Form;




