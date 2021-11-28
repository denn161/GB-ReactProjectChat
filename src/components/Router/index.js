
import React from "react";
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../containers/HomePage'
import Chat from '../../containers/Chat'
import ChatList from "../ChatLIst";
import NotFoundPage from "../../containers/NotFoundPage";
import Header from "../Header";
import Profile from "../../containers/Profile";
import ArticlesPage from "../../containers/ArticlesPage";
import { PublicRouter } from "../PublicRouter";
import { PrivateRouter } from "../PrivateRouter";


export const PageRouter = () => {

  
  return (    
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={
          <PublicRouter>
            <HomePage />
          </PublicRouter>} />
        <Route path="/profile" element={
          <PrivateRouter>
          <Profile />
        </PrivateRouter>} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="chats">
          <Route path=":chatId" element={
            <PrivateRouter>
              <Chat />
            </PrivateRouter>
            } />
          <Route index element={
            <PrivateRouter>
            <ChatList />
          </PrivateRouter>} />
        </Route>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      </BrowserRouter>    
  );
}

