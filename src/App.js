import { useState } from "react";
import Message from "./components/Message";
import Button from "./components/Button/Button";


function App() {

  const [text, setText] = useState("Привет мой друг!Это курс по реакту!!")
  const [flag,setFlag]=useState(false)
   
  const changeText = () => {
    setText("Пора приступать к работе!!!")   
  }   
  const changeColor = () => {
    setFlag((prev)=>!prev)
  }
  
  return (
    <div className="container pt-3"> 
      <Message text={text} flag={flag}/>
      <Button
        classes="btn btn-success"
        onClick={changeText}
        text="Изменить текст"/>
      <Button
        classes="btn btn-warning"
        onClick={changeColor}
        text="Изменить цвет текста"/>          
    </div>
  );
}

export default App;
