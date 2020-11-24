import React, { createContext, useContext, useState } from 'react';

import {credentialData} from "./UserCredentials";


const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

function useHandleAuth() {
  const [status, setstatus] = useState(credentialData.user.status);
  const [isAuth, setIsAuth] = useState(true);

  function logIn() {
    setIsAuth(true)
  }

  function logOut() {
    setIsAuth(false)
  }

  return {
    status,
    isAuth,
    logIn,
    logOut
  };
};


export function ProvideAuth({ children }) {
  return (
    <authContext.Provider value={useHandleAuth()}>
      { children }
    </authContext.Provider>
  );
};