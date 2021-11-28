import React from 'react'
import { Navigate} from 'react-router'
import { useSelector } from 'react-redux'
import { selectorName } from '../../store/profile/selectors'

export const PrivateRouter = ({ children }) => {
   const {auth} = useSelector(selectorName)  

    return auth?children:<Navigate to='/' replace/>
}




