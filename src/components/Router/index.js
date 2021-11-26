import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from '../../containers/HomePage'
import Chat from '../../containers/Chat'
import ChatList from "../ChatLIst";
import NotFoundPage from "../../containers/NotFoundPage";
import Header from "../Header";
import Profile from "../../containers/Profile";
import ArticlesPage from "../../containers/ArticlesPage";




export const PageRouter = () => {

  return (    
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="chats">
        <Route path=":chatId" element={<Chat/>} />
        <Route index element={<ChatList/>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </BrowserRouter>
    
  );
}

