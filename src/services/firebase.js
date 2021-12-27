import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from 'firebase/database'


const app = initializeApp({
  apiKey: "AIzaSyAw-Ot-i08cHgFmFJOpnT53BD7pYMCT64E",
  authDomain: "chat-gb-5b64f.firebaseapp.com",
  projectId: "chat-gb-5b64f",
  storageBucket: "chat-gb-5b64f.appspot.com",
  messagingSenderId: "1054519694108",
  appId: "1:1054519694108:web:c9205955fcf012dd0120d9"
});

export const auth = getAuth(app)
 


 export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass)


export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass)

export const logOut = async () => await signOut(auth);


export const db = getDatabase(app)

export const userRef = ref(db, 'user')

export const chatsRef = ref(db, 'chats')

export const messagesRef = ref(db, 'messages')

export const getChatRefById = (id) => ref(db, `chats/${id}`)

export const getChatMessagesRefById = (chatId) => ref(db,`messages/${chatId}`)
export const getChatMessagesListRefById = (chatId) => ref(db,`messages/${chatId}/messageList`)





 