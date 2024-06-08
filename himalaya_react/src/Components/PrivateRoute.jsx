import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {isAuthenticated}=useContext(AuthContext)
    const navigate=useNavigate()
  
  
  
useEffect(() => {
        if (!isAuthenticated) {
          navigate('/login');
        }
      }, [isAuthenticated, navigate]);
    
      return isAuthenticated ? children : null;
  

  
  
}

export default PrivateRoute
