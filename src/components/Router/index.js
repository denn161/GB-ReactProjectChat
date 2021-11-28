
import React, { useEffect } from "react";
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../../containers/HomePage'
import Chat from '../../containers/Chat'
import ChatList from "../ChatLIst";
import NotFoundPage from "../../containers/NotFoundPage";
import Header from "../Header";
import Profile from "../../containers/Profile";
import ArticlesPage from "../../containers/ArticlesPage";
import {PublicRouter} from "../PublicRouter";
import {PrivateRouter } from "../PrivateRouter";
import Login from "../../containers/Login/Login";
import {auth} from "../../services/firebase";
import {useDispatch} from "react-redux";
import {signInProfile, signOutProfile } from "../../store/profile/actions";


export const PageRouter = () => {

  const dispatch=useDispatch() 
  
  useEffect(() => {
   const unsubscribe=auth.onAuthStateChanged((user) => {
      if (user) {
      dispatch(signInProfile())
      } else {
        dispatch(signOutProfile())
       }
   })
    return unsubscribe;
   },[dispatch])

  return (    
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={
          <PublicRouter>
            <HomePage />
          </PublicRouter>} />
        <Route path="/login" element={<Login/>}
        />
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

