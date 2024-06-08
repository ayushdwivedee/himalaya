import React, { createContext, useState } from "react";

export const AuthContext =  createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [token, setToken] = useState(null);
   

  function Logout() {
     
    setToken(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        token,
        setToken,
        
        
        Logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
