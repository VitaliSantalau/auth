import React, { createContext, useState, useContext } from 'react';


const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

function HandleAuth() {
  const [user, setUser] = useState();
  const [status, setStatus] = useState('user'); // or 'admin'

  const logIn = () => {
  
  };

  const logOut = () => {
    
  };

  return (
    user,
    logIn,
    logOut
  );
};

function ProvideAuth({ children }) {
  
  return (
    <authContext.Provider value={HandleAuth()}>
      { children }
    </authContext.Provider>
  );
};
export default ProvideAuth;