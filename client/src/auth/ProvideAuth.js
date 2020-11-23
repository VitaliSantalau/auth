import React, { createContext, useContext, useState } from 'react';


const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

function useHandleAuth() {
  const [user, setUser] = useState("admin");
  const [isAdmin, setIsAdmin] = useState(true)

  return {
    user,
    isAdmin
  };
};


export function ProvideAuth({ children }) {
  return (
    <authContext.Provider value={useHandleAuth()}>
      { children }
    </authContext.Provider>
  );
};