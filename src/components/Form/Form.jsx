
import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import {useInput} from '../hooks/useInput'
import styles from './Form.module.css'

const Form = ({ addMessage }) => {

  const {bind,onClear} = useInput("") 

    const handleSubmit = (e) => {
    e.preventDefault()
    addMessage(bind.value)
      onClear()
  }  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }
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
        />
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