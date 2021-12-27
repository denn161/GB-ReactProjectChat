
import React, { useEffect} from "react";
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
import {useDispatch} from "react-redux";
import {initMessagesTracking } from "../../store/messages/actions";
import { auth } from "../../services/firebase";
import { signInProfile, signOutProfile } from "../../store/profile/actions";
import MainPage from "../../containers/MainPage";


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
  return unsubscribe    
  
  }, [dispatch])  

  useEffect(() => {
   dispatch(initMessagesTracking())

  },[dispatch])
 
  return (    
    <BrowserRouter>
     <Header/>
      <Routes>
         <Route path="/" element={
          <PublicRouter>
            <MainPage />
          </PublicRouter>} />
        <Route path="/home" element={
          <PublicRouter>
            <HomePage />
          </PublicRouter>} />
        <Route path="/login" element={<PublicRouter><Login/></PublicRouter>}
        />
        <Route path="/profile" element={
          <PrivateRouter>
          <Profile />
          </PrivateRouter>} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="chats">
          <Route path=":chatId" element={
            <PrivateRouter>
              <Chat  />
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

