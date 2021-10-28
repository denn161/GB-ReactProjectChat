import React from "react";
import { useState, useCallback } from "react";
import { useToggle } from "./components/hooks/hook";
import Message from "./components/Message";
import Button from "./components/Button/Button";


//hooks 

function App() {
  const [text, setText] = useState("Привет мой друг!Это курс по реакту!!")  
  const [ state, toggle]  = useToggle()
  const [colored, setColored] = useToggle(false) 
   
  const changeText = () => {
    setText("Пора приступать к работе!!!")   
  }   
  
  return (
    <div className="container pt-3"> 
  { state &&   <Message text={text} colored={colored}/>}
      <Button
        classes="btn btn-success"
        onClick={changeText}
        text="Изменить текст"/>
      <Button
        classes="btn btn-warning"
        onClick={setColored}
        text="Изменить цвет текста" />
        <Button
        classes="btn btn-danger"
        onClick={toggle}
        text={state?"Скрыть текст":"Показать текст"}/>          
    </div>
  );
}

export default App;
