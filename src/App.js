
import React, { useCallback,useState} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store/index'
import HomePage from './containers/HomePage'
import Chat from './containers/Chat/Chat'
import ChatList from "./components/ChatLIst/ChatList";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";
import { ThemeContext } from './components/utils/ThemeContext'
import Profile from "./containers/Profile/Profile";
import music from './componentsItem/ChatItem/img/music.jpg'
import poezia from './componentsItem/ChatItem/img/poezia.jpg'
import tehnologi from './componentsItem/ChatItem/img/tehnologi.jpg'
import travel from './componentsItem/ChatItem/img/travel.jpg'
// import { useParams } from "react-router";


const initialState = {
   chat1: [],
   chat2: [],
   chat3: [],
   chat4: [],
   
}

const nameChats = [
  {
    id:'chat1',
    name:"Музыка",
    img:music
  },
   {
     id:'chat2',
     name:"Поэзия",
     img:poezia
  },
    {
      id:'chat3',
      name:"Технологии",      
      img:tehnologi
  },
    {
      id:'chat4',
      name:"Путешествия",
      img:travel
  },   

]

function App() { 

  const [nameChat, setNameChats] = useState(nameChats) 
    

  const [messages, setMessages] = useState(initialState);
   
  const [color, setColor] = useState('blue');
  
  const addChat = useCallback((Chat) => {
    setMessages((prevChatId) => ({
      ...prevChatId,[Chat.id]:[]
    }))
    setNameChats((prevState) => [...prevState,Chat]
  
  )},[])     
     
  const removeChat = useCallback((id) => {
   
     setNameChats((prevState) => prevState.filter(el => el.id !== id))   
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages }
      delete newMessages[`${id}`]
      return newMessages;
     })
  },[])

  const hendleChangeColor = useCallback(() => {
       setColor((prevColor)=>prevColor==='blue'?"red":"blue") 

  }, [])  
  
  return (
    <Provider store={store}>
    <ThemeContext.Provider value={{color,hendleChangeColor,nameChat,setNameChats}}>
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="chats">
              <Route path=":chatId" element={<Chat
                messages={messages}
                setMessages={setMessages}
                nameChat={nameChat}
                addChat={addChat}
                removeChat={removeChat}
                />} />
              <Route index element={<ChatList
                     nameChat={nameChat}
                     addChat={addChat}
                     removeChat={removeChat}
               
              />} />
        </Route>
          <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
      </Provider>
  );
}

export default App;
