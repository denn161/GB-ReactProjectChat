
import React from "react";
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './containers/HomePage'
import Chat from './containers/Chat/Chat'
import Login from './containers/Login'
import ChatList from "./components/ChatLIst/ChatList";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() { 
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="chats">
          <Route path=":chatId" element={<Chat/>} />
          <Route index element={<ChatList/>}/>
        </Route>
          <Route path="/found" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
