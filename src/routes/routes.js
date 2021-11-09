

import Chat from '../containers/Chat'
import HomePage from '../containers/HomePage'
import Login from '../containers/Login'


 export const publicComponents = [
    
    {
        path: "/",
        element:<HomePage/>
    },
       {
        path:"/login",
        element:<Login/>
    },
     {
        path: "chat",
         element: <Chat />,
         chatId:":chatId"
        
    },
]