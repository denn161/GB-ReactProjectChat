
import React, { useCallback, useState } from "react";
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


function App() { 

  const [color, setColor] = useState('blue');

  const hendleChangeColor = useCallback(() => {
       setColor((prevColor)=>prevColor==='blue'?"red":"blue") 

  },[])


  return (
    <Provider store={store}>
    <ThemeContext.Provider value={{color,hendleChangeColor}}>
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="chats">
          <Route path=":chatId" element={<Chat/>} />
          <Route index element={<ChatList/>}/>
        </Route>
          <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
      </Provider>
  );
}

export default App;
