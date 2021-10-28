import { useState } from "react";
import Message from "./components/Message";


function App() {

  const [text, setText] = useState("Привет мой друг!Это курс по реакту")
  const [flag,setFlag]=useState(false)
   
  const changeText = () => {
    setText("Это текст изменили")
   
  } 
  
  const changeColor = () => {
    setFlag((prev)=>!prev)
  }
  
  return (
    <div className="container pt-3"> 

      <Message text={text} flag={flag}/>
      <button className="btn btn-success" onClick={changeText}>Изменить текст</button>
      <button className="btn btn-warning" onClick={changeColor}>Изменить цвет текста</button>
          
    </div>
  );
}

export default App;
